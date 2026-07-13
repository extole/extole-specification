type JsonRecord = Record<string, unknown>;

const FREEFORM_PROPERTY_NAMES = new Set([
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
  'response_body_handler',
  'settings',
  'state_transitions',
  'targeting_attributes',
  'urlTemplateParameters',
  'values',
]);

function isFreeformObjectSchema(schema: JsonRecord): boolean {
  if (schema.type !== 'object') {
    return false;
  }
  if ('additionalProperties' in schema) {
    return true;
  }
  if (!('properties' in schema) || Object.keys(schema.properties as object).length === 0) {
    return true;
  }
  return false;
}

function addEmptyExample(schema: JsonRecord): void {
  if ('example' in schema || 'examples' in schema) {
    return;
  }
  schema.example = {};
}

function walkSchema(schema: unknown, propertyName?: string): void {
  if (!schema || typeof schema !== 'object') {
    return;
  }
  const node = schema as JsonRecord;

  if (
    propertyName &&
    FREEFORM_PROPERTY_NAMES.has(propertyName) &&
    isFreeformObjectSchema(node)
  ) {
    addEmptyExample(node);
  }

  if (isFreeformObjectSchema(node) && !propertyName) {
    addEmptyExample(node);
  }

  for (const [key, value] of Object.entries(node)) {
    if (key === 'properties' && value && typeof value === 'object') {
      for (const [propName, propSchema] of Object.entries(
        value as JsonRecord,
      )) {
        walkSchema(propSchema, propName);
      }
      continue;
    }
    if (
      key === 'items' ||
      key === 'allOf' ||
      key === 'oneOf' ||
      key === 'anyOf' ||
      key === 'not'
    ) {
      if (Array.isArray(value)) {
        for (const entry of value) {
          walkSchema(entry, propertyName);
        }
      } else {
        walkSchema(value, propertyName);
      }
      continue;
    }
    if (key === 'content' && value && typeof value === 'object') {
      for (const mediaType of Object.values(value as JsonRecord)) {
        walkSchema(mediaType, propertyName);
      }
      continue;
    }
    if (key === 'schema') {
      walkSchema(value, propertyName);
    }
  }
}

export function addFreeformMapExamples(spec: unknown): unknown {
  const root = spec as JsonRecord;
  walkSchema(root);
  if (root.paths && typeof root.paths === 'object') {
    for (const pathItem of Object.values(root.paths as JsonRecord)) {
      walkSchema(pathItem);
    }
  }
  if (root.components && typeof root.components === 'object') {
    const components = root.components as JsonRecord;
    for (const section of ['schemas', 'requestBodies', 'responses', 'parameters']) {
      const entries = components[section];
      if (entries && typeof entries === 'object') {
        for (const entry of Object.values(entries as JsonRecord)) {
          walkSchema(entry);
        }
      }
    }
  }
  return root;
}
