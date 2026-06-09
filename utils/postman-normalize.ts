import crypto from 'crypto';

type JsonRecord = Record<string, unknown>;

function isPlaceholder(value: string): boolean {
  return /^<[^>]+>$/.test(value);
}

function normalizeParamValue(value: unknown): unknown {
  if (typeof value !== 'string') {
    return value;
  }
  if (isPlaceholder(value)) {
    return value;
  }
  return '<string>';
}

function normalizeParams(params: unknown): void {
  if (!Array.isArray(params)) {
    return;
  }
  for (const param of params) {
    if (!param || typeof param !== 'object') {
      continue;
    }
    const entry = param as JsonRecord;
    if ('value' in entry) {
      entry.value = normalizeParamValue(entry.value);
    }
  }
}

function stripRequestExamples(request: JsonRecord): void {
  delete request.body;
  const url = request.url;
  if (url && typeof url === 'object') {
    const urlRecord = url as JsonRecord;
    normalizeParams(urlRecord.query);
    normalizeParams(urlRecord.variable);
  }
  normalizeParams(request.header);
}

function stripResponseExamples(response: JsonRecord): void {
  delete response.body;
  const originalRequest = response.originalRequest;
  if (originalRequest && typeof originalRequest === 'object') {
    stripRequestExamples(originalRequest as JsonRecord);
  }
}

function normalizeCollectionVariables(variables: unknown): void {
  if (!Array.isArray(variables)) {
    return;
  }
  for (const variable of variables) {
    if (!variable || typeof variable !== 'object') {
      continue;
    }
    const entry = variable as JsonRecord;
    const key = String(entry.key ?? '');
    if (key === 'baseUrl') {
      continue;
    }
    entry.value = normalizeParamValue(entry.value);
  }
}

function stableUuid(seed: string): string {
  const hex = crypto.createHash('sha256').update(seed).digest('hex');
  const variant = ((parseInt(hex.slice(16, 18), 16) & 0x3f) | 0x80)
    .toString(16)
    .padStart(2, '0');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-4${hex.slice(13, 16)}-${variant}${hex.slice(18, 20)}-${hex.slice(20, 32)}`;
}

function normalizeItems(
  items: unknown[],
  bundleName: string,
  path: string[],
): void {
  for (const item of items) {
    const entry = item as JsonRecord;
    const name = String(entry.name ?? '');
    const itemPath = [...path, name];
    const pathKey = itemPath.join('/');

    if (entry.request) {
      entry.id = stableUuid(`${bundleName}:request:${pathKey}`);
      stripRequestExamples(entry.request as JsonRecord);
    }
    if (Array.isArray(entry.response)) {
      for (let index = 0; index < entry.response.length; index++) {
        const response = entry.response[index] as JsonRecord;
        response.id = stableUuid(
          `${bundleName}:response:${pathKey}:${String(response.name ?? index)}`,
        );
        stripResponseExamples(response);
      }
    }
    if (Array.isArray(entry.item)) {
      normalizeItems(entry.item, bundleName, itemPath);
    }
  }
}

export function normalizePostmanCollection(
  collection: unknown,
  bundleName: string,
): unknown {
  const root = collection as JsonRecord;
  if (root.info && typeof root.info === 'object') {
    const info = root.info as JsonRecord;
    info._postman_id = stableUuid(`${bundleName}:collection`);
  }
  if (Array.isArray(root.item)) {
    normalizeItems(root.item, bundleName, []);
  }
  normalizeCollectionVariables(root.variable);
  return root;
}
