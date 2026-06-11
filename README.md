# extole-specification

OpenAPI 3 specifications and Postman collections for the Extole API.

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
- **Postman:** [Extole API workspace](https://www.postman.com/extole-4017592/extole-api/overview) — public workspace with forkable collections for all four API bundles
- **ReadMe:** Extole API reference documentation

## Development

```bash
npm ci
npm run build    # regenerate Postman collections from OpenAPI
npm run lint     # Spectral lint
```

## Publishing to Postman

The **Publish to Postman** workflow (`publish-to-postman.yml`) keeps the public [Extole API workspace](https://www.postman.com/extole-4017592/extole-api/overview) in sync with `main`. It regenerates Postman collections from OpenAPI, publishes them via the Postman API, and runs verification checks.

```bash
export POSTMAN_API_KEY=<your-postman-api-key>
npm run publish:postman
npm run verify:postman
```

Collection and workspace UIDs are stored in `postman/.postman-publish.json` so publishes are idempotent.

**Manual follow-ups (Postman UI only):**

- Submit the workspace to the [Postman API Network](https://www.postman.com/explore) for catalog discoverability.
- Add team branding (logo, description) under Postman team settings.
- Optionally rename the team from `Admin's Team` to `Extole` for a cleaner public URL.

## Publishing to npm

Release Please (`release-please.yml`) bumps version and publishes `@extole/specification` to npm on merge to `main`.

**Follow-up required before first publish:**

1. Create the `@extole` npm organization (or confirm it exists) at [npmjs.com](https://www.npmjs.com/).
2. Add an automation token as the `NPM_TOKEN` repository secret on `extole/extole-specification`.
3. Enable GitHub Pages for this repo (Settings → Pages → GitHub Actions).

Until `NPM_TOKEN` is configured, release-please will still open version-bump PRs but the publish job will fail at `npm publish`.

## Repository secrets

| Secret            | Used by                                                   |
| ----------------- | --------------------------------------------------------- |
| `NPM_TOKEN`       | `release-please.yml` publish job                          |
| `POSTMAN_API_KEY` | `publish-to-postman.yml` — publish and verify collections |

## License

MIT
