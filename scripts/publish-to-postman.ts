#!/usr/bin/env ts-node

import fs from 'fs';
import path from 'path';
import {
  MAX_COLLECTION_BYTES,
  WORKSPACE_NAME,
  WORKSPACE_SLUG,
  assertOk,
  collectionKeyFromFilename,
  listCollectionFiles,
  loadLocalCollection,
  postmanDir,
  postmanFetch,
  readJson,
  readMapping,
  requireApiKey,
  workspaceOverviewUrl,
  writeMapping,
} from './postman-publish-lib';

interface MeResponse {
  user: {
    teamDomain?: string;
    teamName?: string;
  };
}

interface WorkspaceResponse {
  workspace: {
    id: string;
    name: string;
    type: string;
    slug?: string;
  };
}

interface CollectionResponse {
  collection: {
    id: string;
    uid: string;
    name: string;
  };
}

async function getTeamDomain(apiKey: string): Promise<string> {
  const mapping = readMapping();
  if (mapping.workspace?.teamDomain) {
    return mapping.workspace.teamDomain;
  }

  const response = await postmanFetch(apiKey, '/me');
  const body = (await readJson(response)) as MeResponse;
  assertOk(response, body, 'GET /me');
  const teamDomain = body.user.teamDomain;
  if (!teamDomain) {
    throw new Error('Postman account is missing teamDomain on /me response.');
  }
  return teamDomain;
}

async function createWorkspace(apiKey: string, teamDomain: string): Promise<WorkspaceResponse['workspace']> {
  const createPublic = async () => {
    const response = await postmanFetch(apiKey, '/workspaces', {
      method: 'POST',
      body: JSON.stringify({
        workspace: {
          name: WORKSPACE_NAME,
          type: 'public',
          description:
            'Public Extole API collections generated from OpenAPI specifications in extole/extole-specification.',
        },
      }),
    });
    const body = (await readJson(response)) as WorkspaceResponse;
    return { response, body };
  };

  let { response, body } = await createPublic();
  if (!response.ok) {
    console.warn(
      `Creating public workspace failed (${response.status}); retrying as team workspace.`,
    );
    const fallback = await postmanFetch(apiKey, '/workspaces', {
      method: 'POST',
      body: JSON.stringify({
        workspace: {
          name: WORKSPACE_NAME,
          type: 'team',
          description:
            'Extole API collections generated from OpenAPI specifications in extole/extole-specification.',
        },
      }),
    });
    body = (await readJson(fallback)) as WorkspaceResponse;
    response = fallback;
    if (!response.ok) {
      assertOk(response, body, 'POST /workspaces (team fallback)');
    }
    console.warn(
      'Workspace created as team-private. Flip visibility to public in the Postman UI before sharing externally.',
    );
  }

  const workspace = body.workspace;
  return {
    ...workspace,
    slug: workspace.slug ?? WORKSPACE_SLUG,
    type: workspace.type,
  };
}

async function ensureWorkspace(
  apiKey: string,
  teamDomain: string,
): Promise<NonNullable<ReturnType<typeof readMapping>['workspace']>> {
  const mapping = readMapping();
  if (mapping.workspace?.id) {
    const response = await postmanFetch(apiKey, `/workspaces/${mapping.workspace.id}`);
    const body = (await readJson(response)) as WorkspaceResponse;
    if (response.ok) {
      return mapping.workspace;
    }
    console.warn(
      `Mapped workspace ${mapping.workspace.id} not found (${response.status}); creating a new workspace.`,
    );
  }

  const workspace = await createWorkspace(apiKey, teamDomain);
  return {
    id: workspace.id,
    name: workspace.name,
    slug: workspace.slug ?? WORKSPACE_SLUG,
    teamDomain,
    type: workspace.type as 'public' | 'team' | 'personal',
    overviewUrl: workspaceOverviewUrl(teamDomain, workspace.slug ?? WORKSPACE_SLUG),
  };
}

async function createCollection(
  apiKey: string,
  workspaceId: string,
  collection: unknown,
): Promise<CollectionResponse['collection']> {
  const response = await postmanFetch(apiKey, `/collections?workspace=${workspaceId}`, {
    method: 'POST',
    body: JSON.stringify({ collection }),
  });
  const body = (await readJson(response)) as CollectionResponse;
  assertOk(response, body, 'POST /collections');
  return body.collection;
}

async function updateCollection(
  apiKey: string,
  uid: string,
  collection: unknown,
): Promise<CollectionResponse['collection']> {
  const response = await postmanFetch(apiKey, `/collections/${uid}`, {
    method: 'PUT',
    body: JSON.stringify({ collection }),
  });
  const body = (await readJson(response)) as CollectionResponse;
  if (response.status === 404) {
    throw new Error('COLLECTION_NOT_FOUND');
  }
  assertOk(response, body, `PUT /collections/${uid}`);
  return body.collection;
}

async function publishCollectionFile(
  apiKey: string,
  workspaceId: string,
  filename: string,
  mapping: ReturnType<typeof readMapping>,
): Promise<void> {
  const key = collectionKeyFromFilename(filename);
  const filePath = path.join(postmanDir, filename);
  const fileSize = fs.statSync(filePath).size;
  if (fileSize > MAX_COLLECTION_BYTES) {
    throw new Error(
      `${filename} is ${fileSize} bytes (> ${MAX_COLLECTION_BYTES}). Split or trim before publishing.`,
    );
  }

  const localCollection = loadLocalCollection(filename);
  const existing = mapping.collections[key];

  console.log(`Publishing ${filename} (${(fileSize / (1024 * 1024)).toFixed(2)} MB)...`);

  let published: CollectionResponse['collection'];
  if (existing?.uid) {
    try {
      published = await updateCollection(apiKey, existing.uid, localCollection);
      console.log(`Updated collection ${published.name} (${published.uid}).`);
    } catch (error) {
      if (!(error instanceof Error) || error.message !== 'COLLECTION_NOT_FOUND') {
        throw error;
      }
      console.warn(`Mapped UID ${existing.uid} missing in Postman; creating a new collection.`);
      published = await createCollection(apiKey, workspaceId, localCollection);
      console.log(`Created replacement collection ${published.name} (${published.uid}).`);
    }
  } else {
    published = await createCollection(apiKey, workspaceId, localCollection);
    console.log(`Created collection ${published.name} (${published.uid}).`);
  }

  mapping.collections[key] = {
    uid: published.uid,
    name: published.name,
  };
}

async function main(): Promise<void> {
  const apiKey = requireApiKey();
  const mapping = readMapping();
  const teamDomain = await getTeamDomain(apiKey);
  mapping.workspace = await ensureWorkspace(apiKey, teamDomain);

  const files = listCollectionFiles();
  if (files.length === 0) {
    throw new Error('No Postman collections found in postman/. Run npm run build first.');
  }

  for (const filename of files) {
    await publishCollectionFile(apiKey, mapping.workspace!.id, filename, mapping);
  }

  writeMapping(mapping);

  console.log('\nPublish complete.');
  console.log(`Workspace: ${mapping.workspace.name} (${mapping.workspace.type})`);
  console.log(`Overview:  ${mapping.workspace.overviewUrl}`);
  console.log(`Collections: ${Object.keys(mapping.collections).length}`);
  console.log(`Mapping:   postman/.postman-publish.json`);
  console.log('\nNext: npm run verify:postman');
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
