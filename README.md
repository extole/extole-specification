# extole-specification

OpenAPI 3 specifications and Postman collections for the Extole API.

Specs are extracted from [extole/pluribus](https://github.com/extole/pluribus), published via the private [extole/openapi](https://github.com/extole/openapi) repo, and mirrored here for public consumption.

## Installation

```bash
npm install @extole/specification
```

## Usage

### OpenAPI specs (CommonJS)

```javascript
const management = require('@extole/specification/openapi/management.json');
const managementExpert = require('@extole/specification/openapi/management-expert.json');
const integrationServer = require('@extole/specification/openapi/integration-server-to-extole.json');
const integrationConsumer = require('@extole/specification/openapi/integration-consumer-to-extole.json');
```

### OpenAPI specs (ES Modules)

```javascript
import management from '@extole/specification/openapi/management.json' with { type: 'json' };
import managementExpert from '@extole/specification/openapi/management-expert.json' with { type: 'json' };
import integrationServer from '@extole/specification/openapi/integration-server-to-extole.json' with { type: 'json' };
import integrationConsumer from '@extole/specification/openapi/integration-consumer-to-extole.json' with { type: 'json' };
```

### Postman collections

```javascript
const managementCollection = require('@extole/specification/postman/management.json');
```

## Published bundles

| File                                  | Description                                                                                                                                |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `management.json`                     | Administrative configuration: campaigns, components, audiences, persons, rewards, reporting setup, and admin tooling.                      |
| `management-expert.json`              | Advanced expert-only configuration: campaign controllers, typed actions and triggers, advanced component types, and other expert surfaces. |
| `integration-server-to-extole.json`   | Backend server-to-Extole integration: event submission, person lookup, zone rendering, token management, and reward retrieval.             |
| `integration-consumer-to-extole.json` | Consumer-to-Extole integration: consumer event submission, zone rendering, profile management, and SDK-backing operations.                 |

## Interactive documentation

- **GitHub Pages:** [extole.github.io/extole-specification](https://extole.github.io/extole-specification/) (Swagger UI)
- **ReadMe:** synced from [extole/openapi](https://github.com/extole/openapi) on each spec update

## Development

```bash
npm ci
npm run build    # regenerate Postman collections from OpenAPI
npm run lint     # Spectral lint (mirrors pluribus rules)
```

## Updating specs

Specs are synced automatically when [extole/openapi](https://github.com/extole/openapi) publishes a new bundle set from pluribus `master`. The `sync-from-openapi` workflow opens a PR in this repo with the updated files.

Manual sync: trigger **Sync from extole/openapi** in the Actions tab, or dispatch from openapi after a successful `update-specs` run.

## Publishing to npm

Release Please (`release-please.yml`) bumps version and publishes `@extole/specification` to npm on merge to `main`.

**Follow-up required before first publish:**

1. Create the `@extole` npm organization (or confirm it exists) at [npmjs.com](https://www.npmjs.com/).
2. Add an automation token as the `NPM_TOKEN` repository secret on `extole/extole-specification`.
3. Enable GitHub Pages for this repo (Settings → Pages → GitHub Actions).

Until `NPM_TOKEN` is configured, release-please will still open version-bump PRs but the publish job will fail at `npm publish`.

## Repository secrets

| Secret              | Used by                                                                 |
| ------------------- | ----------------------------------------------------------------------- |
| `EXTOLE_GITHUB_PAT` | `sync-from-openapi.yml` — clone private `extole/openapi`, push sync PRs |
| `NPM_TOKEN`         | `release-please.yml` publish job                                        |

## License

MIT
