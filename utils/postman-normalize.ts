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

const FREEFORM_OBJECT_KEYS = new Set([
  'attributes',
  'context',
  'data',
  'default_data',
  'event_data',
  'extra_data',
  'formats_info',
  'headers',
  'http_headers',
  'metadata',
  'output',
  'overrides',
  'parameterizedHeaders',
  'parameters',
  'properties',
  'settings',
  'state_transitions',
  'targeting_attributes',
  'urlTemplateParameters',
  'values',
]);

const STABLE_SINGLE_SEGMENT_KEYS = new Set([
  'auth',
  'body',
  'code',
  'columns',
  'content',
  'data',
  'description',
  'email',
  'enabled',
  'format',
  'formats',
  'headers',
  'id',
  'items',
  'jwt',
  'key',
  'label',
  'lang',
  'message',
  'method',
  'name',
  'parameters',
  'path',
  'paused',
  'prefix',
  'priority',
  'quality',
  'query',
  'request',
  'response',
  'schema',
  'scopes',
  'settings',
  'source',
  'status',
  'summary',
  'tags',
  'title',
  'type',
  'url',
  'value',
  'values',
]);

const STABLE_SHORT_SEGMENTS = new Set([
  'as',
  'at',
  'by',
  'id',
  'ip',
  'ms',
  'of',
  'ok',
  'or',
  'to',
]);

function isUnstableMapKey(key: string): boolean {
  if (isPlaceholder(key)) {
    return false;
  }
  if (/[0-9A-Z]/.test(key) || key.includes('__') || key.endsWith('_')) {
    return true;
  }
  if (!key.includes('_') && !STABLE_SINGLE_SEGMENT_KEYS.has(key)) {
    return true;
  }
  const segments = key.split('_');
  if (
    segments.some(
      (segment) => segment.length <= 2 && !STABLE_SHORT_SEGMENTS.has(segment),
    )
  ) {
    return true;
  }
  if (
    segments.length === 2 &&
    STABLE_SHORT_SEGMENTS.has(segments[0]) &&
    /^[a-f]{3,4}$/i.test(segments[1])
  ) {
    return true;
  }
  return false;
}

function normalizeJsonValue(value: unknown, parentKey?: string): unknown {
  if (typeof value === 'string') {
    return normalizeParamValue(value);
  }
  if (typeof value === 'number' || typeof value === 'boolean' || value === null) {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map((entry) => normalizeJsonValue(entry));
  }
  if (value && typeof value === 'object') {
    const entries = Object.entries(value as JsonRecord).sort(([a], [b]) =>
      a.localeCompare(b),
    );
    if (
      (parentKey && FREEFORM_OBJECT_KEYS.has(parentKey)) ||
      (parentKey && isPlaceholder(parentKey))
    ) {
      return { '<string>': '<string>' };
    }
    const normalized: JsonRecord = {};
    for (const [key, entry] of entries) {
      if (isUnstableMapKey(key)) {
        continue;
      }
      normalized[key] = normalizeJsonValue(entry, key);
    }
    if (Object.keys(normalized).length === 0 && entries.length > 0) {
      return { '<string>': '<string>' };
    }
    return normalized;
  }
  return value;
}

function normalizeRequestBody(body: unknown): void {
  if (!body || typeof body !== 'object') {
    return;
  }
  const bodyRecord = body as JsonRecord;
  if (typeof bodyRecord.raw !== 'string') {
    return;
  }
  try {
    const parsed = JSON.parse(bodyRecord.raw) as unknown;
    bodyRecord.raw = `${JSON.stringify(normalizeJsonValue(parsed), null, 2)}\n`;
  } catch {
    bodyRecord.raw = '<string>';
  }
}

function normalizeRequest(request: JsonRecord): void {
  normalizeRequestBody(request.body);
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
    normalizeRequest(originalRequest as JsonRecord);
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
      normalizeRequest(entry.request as JsonRecord);
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
