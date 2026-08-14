#!/usr/bin/env ts-node

import child_process from 'child_process';
import fs from 'fs';
import path from 'path';
import { normalizePostmanCollection } from './postman-normalize';

const repoRoot = path.join(__dirname, '..');
const openapiDir = path.join(repoRoot, 'openapi');
const postmanDir = path.join(repoRoot, 'postman');
const optionsPath = path.join(__dirname, 'openapi-to-postman-options.json');

if (!fs.existsSync(postmanDir)) {
  fs.mkdirSync(postmanDir, { recursive: true });
}

const bundles = fs
  .readdirSync(openapiDir)
  .filter((filename) => filename.endsWith('.json'))
  .sort();

if (bundles.length === 0) {
  console.error('No OpenAPI specs found in openapi/');
  process.exit(1);
}

for (const bundle of bundles) {
  const name = path.basename(bundle, '.json');
  const src = path.join(openapiDir, bundle);
  const dest = path.join(postmanDir, `${name}.json`);
  console.log(`Converting ${src} -> ${dest}`);
  child_process.execSync(
    `npx openapi2postmanv2 -s "${src}" -o "${dest}" -p -c "${optionsPath}"`,
    { stdio: 'inherit' },
  );
  const collection = JSON.parse(fs.readFileSync(dest, 'utf8')) as unknown;
  const normalized = normalizePostmanCollection(collection, name);
  fs.writeFileSync(dest, `${JSON.stringify(normalized)}\n`);
  child_process.execSync(`npx prettier --write "${dest}"`, {
    stdio: 'inherit',
  });
}

console.log(`Generated ${bundles.length} Postman collection(s).`);
