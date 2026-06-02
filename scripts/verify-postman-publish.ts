#!/usr/bin/env ts-node

import assert from 'node:assert/strict';
import test from 'node:test';
import {
  WORKSPACE_NAME,
  collectBaseUrls,
  countRequests,
  fingerprintCollection,
  hasRequestMatching,
  listCollectionFiles,
  loadLocalCollection,
  postmanFetch,
  readJson,
  readMapping,
  requireApiKey,
} from './postman-publish-lib';

interface WorkspaceResponse {
  workspace: {
    id: string;
    name: string;
    type: string;
    collections?: Array<{ id: string; uid?: string }>;
  };
}

interface CollectionResponse {
  collection: {
    info: {
      name: string;
      description?: string | { content?: string };
    };
    item?: unknown[];
    auth?: unknown;
    variable?: Array<{ key: string; value: string }>;
  };
}

async function fetchPublic(url: string): Promise<Response> {
  return fetch(url, {
    headers: {
      Accept: 'text/html,application/json,*/*',
      'User-Agent': 'extole-specification-verify/1.0',
    },
    redirect: 'follow',
  });
}

const apiKey = requireApiKey();
const mapping = readMapping();
assert.ok(
  mapping.workspace?.id,
  'postman/.postman-publish.json is missing workspace.id; run npm run publish:postman first.',
);

const workspaceId = mapping.workspace!.id;
const files = listCollectionFiles();
assert.ok(files.length > 0, 'No local Postman collections found in postman/.');

test('group 1: authenticated workspace and collection state', async () => {
  const workspaceResponse = await postmanFetch(apiKey, `/workspaces/${workspaceId}`);
  const workspaceBody = (await readJson(workspaceResponse)) as WorkspaceResponse;
  assert.equal(workspaceResponse.status, 200, JSON.stringify(workspaceBody));
  assert.equal(workspaceBody.workspace.name, WORKSPACE_NAME);

  if (mapping.workspace?.type === 'public') {
    assert.equal(workspaceBody.workspace.type, 'public');
  } else {
    console.warn(
      `Workspace type is "${workspaceBody.workspace.type}" (expected public). Flip visibility in Postman UI if external discovery is required.`,
    );
  }

  const workspaceCollectionIds = new Set(
    (workspaceBody.workspace.collections ?? []).map((collection) => collection.uid ?? collection.id),
  );

  for (const filename of files) {
    const key = filename.replace(/\.json$/, '');
    const mapped = mapping.collections[key];
    assert.ok(mapped?.uid, `Missing mapped UID for ${key}`);
    assert.ok(
      workspaceCollectionIds.has(mapped.uid),
      `Workspace does not include collection UID ${mapped.uid} (${key})`,
    );

    const collectionResponse = await postmanFetch(apiKey, `/collections/${mapped.uid}`);
    const collectionBody = (await readJson(collectionResponse)) as CollectionResponse;
    assert.equal(collectionResponse.status, 200, JSON.stringify(collectionBody));

    const local = loadLocalCollection(filename);
    assert.equal(collectionBody.collection.info.name, local.info.name);

    const remoteCount = countRequests(collectionBody.collection.item as never);
    const localCount = countRequests(local.item);
    assert.equal(
      remoteCount,
      localCount,
      `Request count mismatch for ${key}: remote=${remoteCount}, local=${localCount}`,
    );
  }
});

test('group 2: public visibility without auth', async () => {
  const overviewUrl = mapping.workspace!.overviewUrl;
  const overviewResponse = await fetchPublic(overviewUrl);
  assert.equal(overviewResponse.status, 200, `Expected public workspace page at ${overviewUrl}`);
  const overviewHtml = await overviewResponse.text();
  assert.match(overviewHtml, /Extole API|extole/i, 'Workspace overview HTML did not mention Extole');

  const workspaceApiResponse = await fetchPublic(
    `https://www.postman.com/_api/workspace/${workspaceId}`,
  );
  assert.ok(
    workspaceApiResponse.status === 200 || workspaceApiResponse.status === 404,
    `Unexpected workspace API status ${workspaceApiResponse.status}`,
  );

  const consumer = mapping.collections['integration-consumer-to-extole'];
  assert.ok(consumer?.uid, 'integration-consumer-to-extole mapping missing');
  const collectionPage = await fetchPublic(
    `https://www.postman.com/_api/collection/${consumer.uid}`,
  );
  assert.equal(
    collectionPage.status,
    200,
    `Expected public collection page/API for ${consumer.uid}`,
  );
});

test('group 3: content sanity', async () => {
  for (const filename of files) {
    const local = loadLocalCollection(filename);
    const baseUrls = collectBaseUrls(local);
    assert.ok(baseUrls.length > 0, `${filename} is missing baseUrl variable`);

    for (const baseUrl of baseUrls) {
      assert.doesNotMatch(baseUrl, /localhost|127\.0\.0\.1|\.internal/i, `${filename} leaked internal baseUrl ${baseUrl}`);
      assert.match(
        baseUrl,
        /api\.extole\.(com|io)|\{\{brand\}\}\.extole\.io/i,
        `${filename} baseUrl ${baseUrl} is unexpected`,
      );
    }
  }

  const consumer = loadLocalCollection('integration-consumer-to-extole.json');
  assert.ok(
    hasRequestMatching(consumer.item, (method, requestPath) =>
      method === 'POST' && requestPath.includes('/zones'),
    ),
    'integration-consumer-to-extole is missing POST /zones request',
  );

  const server = loadLocalCollection('integration-server-to-extole.json');
  assert.ok(server.auth, 'integration-server-to-extole is missing collection-level auth');
  assert.equal((server.auth as { type?: string }).type, 'apikey');
});

test('group 4: round-trip drift detection', async () => {
  for (const filename of files) {
    const key = filename.replace(/\.json$/, '');
    const mapped = mapping.collections[key];
    assert.ok(mapped?.uid, `Missing mapped UID for ${key}`);

    const local = loadLocalCollection(filename);
    const localFingerprint = fingerprintCollection(local);

    const collectionResponse = await postmanFetch(apiKey, `/collections/${mapped.uid}`);
    const collectionBody = (await readJson(collectionResponse)) as CollectionResponse;
    assert.equal(collectionResponse.status, 200, JSON.stringify(collectionBody));

    const remoteFingerprint = fingerprintCollection({
      info: collectionBody.collection.info,
      item: collectionBody.collection.item as never,
    });
    assert.equal(
      remoteFingerprint,
      localFingerprint,
      `Fingerprint mismatch for ${key}; published collection drifted from local postman/${filename}`,
    );
  }
});
