#!/usr/bin/env ts-node

import child_process from 'child_process';
import fs from 'fs';
import path from 'path';

const openapiDir = path.join(__dirname, '..', 'openapi');
const postmanDir = path.join(__dirname, '..', 'postman');

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
  child_process.execSync(`npx openapi2postmanv2 -s "${src}" -o "${dest}" -p`, {
    stdio: 'inherit',
  });
}

console.log(`Generated ${bundles.length} Postman collection(s).`);
