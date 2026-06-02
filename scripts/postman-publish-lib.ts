import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

export const POSTMAN_API_BASE = 'https://api.getpostman.com';
export const WORKSPACE_NAME = 'Extole API';
export const WORKSPACE_SLUG = 'extole-api';
export const MAX_COLLECTION_BYTES = 30 * 1024 * 1024;

export interface CollectionMapping {
  uid: string;
  name: string;
}

export interface WorkspaceMapping {
  id: string;
  name: string;
  slug: string;
  teamDomain: string;
  type: 'public' | 'team' | 'personal';
  overviewUrl: string;
}

export interface PublishMapping {
  workspace: WorkspaceMapping | null;
  collections: Record<string, CollectionMapping>;
}

export interface PostmanCollectionItem {
  name?: string;
  request?: { method?: string; url?: unknown };
  item?: PostmanCollectionItem[];
}

export interface PostmanCollection {
  info: {
    name: string;
    description?: string | { content?: string };
    schema?: string;
    _postman_id?: string;
  };
  auth?: unknown;
  variable?: Array<{ key: string; value: string }>;
  item?: PostmanCollectionItem[];
}

const repoRoot = path.join(__dirname, '..');
export const postmanDir = path.join(repoRoot, 'postman');
export const mappingPath = path.join(postmanDir, '.postman-publish.json');

export function requireApiKey(): string {
  const apiKey = process.env.POSTMAN_API_KEY?.trim();
  if (!apiKey) {
    console.error('POSTMAN_API_KEY is required.');
    process.exit(1);
  }
  return apiKey;
}

export function readMapping(): PublishMapping {
  if (!fs.existsSync(mappingPath)) {
    return { workspace: null, collections: {} };
  }
  return JSON.parse(fs.readFileSync(mappingPath, 'utf8')) as PublishMapping;
}

export function writeMapping(mapping: PublishMapping): void {
  fs.writeFileSync(mappingPath, `${JSON.stringify(mapping, null, 2)}\n`);
}

export function listCollectionFiles(): string[] {
  return fs
    .readdirSync(postmanDir)
    .filter((filename) => filename.endsWith('.json') && !filename.startsWith('.'))
    .sort();
}

export function loadLocalCollection(filename: string): PostmanCollection {
  return JSON.parse(
    fs.readFileSync(path.join(postmanDir, filename), 'utf8'),
  ) as PostmanCollection;
}

export function collectionKeyFromFilename(filename: string): string {
  return path.basename(filename, '.json');
}

export async function postmanFetch(
  apiKey: string,
  pathname: string,
  init: RequestInit = {},
): Promise<Response> {
  const headers = new Headers(init.headers);
  headers.set('X-Api-Key', apiKey);
  if (init.body && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }
  return fetch(`${POSTMAN_API_BASE}${pathname}`, { ...init, headers });
}

export async function readJson(response: Response): Promise<unknown> {
  const text = await response.text();
  try {
    return text ? JSON.parse(text) : {};
  } catch {
    throw new Error(`Invalid JSON from Postman API (${response.status}): ${text.slice(0, 500)}`);
  }
}

export function assertOk(response: Response, body: unknown, context: string): void {
  if (response.ok) {
    return;
  }
  throw new Error(
    `${context} failed (${response.status}): ${JSON.stringify(body).slice(0, 1000)}`,
  );
}

export function workspaceOverviewUrl(teamDomain: string, slug: string): string {
  return `https://www.postman.com/${teamDomain}/${slug}/overview`;
}

export function countRequests(items: PostmanCollectionItem[] | undefined): number {
  if (!items) {
    return 0;
  }
  let count = 0;
  for (const item of items) {
    if (item.request) {
      count += 1;
    }
    if (item.item) {
      count += countRequests(item.item);
    }
  }
  return count;
}

export function collectRequestPaths(items: PostmanCollectionItem[] | undefined): string[] {
  if (!items) {
    return [];
  }
  const paths: string[] = [];
  for (const item of items) {
    if (item.request) {
      const url = item.request.url as
        | { path?: string[]; raw?: string }
        | string
        | undefined;
      if (typeof url === 'string') {
        paths.push(`${item.request.method ?? 'GET'} ${url}`);
      } else if (url?.path) {
        paths.push(`${item.request.method ?? 'GET'} /${url.path.join('/')}`);
      } else if (url?.raw) {
        paths.push(`${item.request.method ?? 'GET'} ${url.raw}`);
      } else {
        paths.push(`${item.request.method ?? 'GET'} ${item.name ?? 'unknown'}`);
      }
    }
    if (item.item) {
      paths.push(...collectRequestPaths(item.item));
    }
  }
  return paths.sort();
}

export function normalizeDescription(
  description: PostmanCollection['info']['description'],
): string {
  if (!description) {
    return '';
  }
  if (typeof description === 'string') {
    return description;
  }
  return description.content ?? '';
}

export function fingerprintCollection(collection: PostmanCollection): string {
  const payload = {
    info: {
      name: collection.info.name,
      description: normalizeDescription(collection.info.description),
      schema: collection.info.schema ?? '',
    },
    paths: collectRequestPaths(collection.item),
  };
  return crypto.createHash('sha256').update(JSON.stringify(payload)).digest('hex');
}

export function collectBaseUrls(collection: PostmanCollection): string[] {
  const urls = new Set<string>();
  for (const variable of collection.variable ?? []) {
    if (variable.key === 'baseUrl') {
      urls.add(variable.value);
    }
  }
  return [...urls];
}

export function hasRequestMatching(
  items: PostmanCollectionItem[] | undefined,
  predicate: (method: string, path: string) => boolean,
): boolean {
  if (!items) {
    return false;
  }
  for (const item of items) {
    if (item.request) {
      const url = item.request.url as { path?: string[] } | undefined;
      const method = item.request.method ?? 'GET';
      const requestPath = url?.path ? `/${url.path.join('/')}` : '';
      if (predicate(method, requestPath)) {
        return true;
      }
    }
    if (item.item && hasRequestMatching(item.item, predicate)) {
      return true;
    }
  }
  return false;
}
