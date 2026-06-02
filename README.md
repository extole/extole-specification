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

- **GitHub Pages:** [extole.github.io/extole-specification](https://extole.github.io/extole-specification/) (Swagger UI; enable GitHub Pages in repo settings if this 404s)
- **Postman:** [Extole API workspace](https://www.postman.com/extole-4017592/extole-api/overview) — four collections are published and kept in sync by CI; **flip workspace visibility to Public in Postman UI** (see below) before sharing the link externally
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

## Publishing to Postman

The **Publish to Postman** workflow (`publish-to-postman.yml`) keeps the [Extole API workspace](https://www.postman.com/extole-4017592/extole-api/overview) in sync with `main`. It regenerates Postman collections from OpenAPI, publishes them via the Postman API, and runs verification checks.

```bash
export POSTMAN_API_KEY=<your-postman-api-key>
npm run publish:postman
npm run verify:postman
```

Collection and workspace UIDs are stored in `postman/.postman-publish.json` so publishes are idempotent.

### Make the workspace publicly discoverable (Postman UI — required once)

The Postman REST API cannot create or flip a workspace to `public` on all plan tiers. After the first CI publish, a team admin must complete these steps in the Postman web app:

1. **Enable the team public profile:** Team settings → turn on **Public profile** (otherwise `postman.com/extole-4017592` shows "Profile cannot be found").
2. **Set workspace visibility to Public:** Open **Extole API** → Settings → Workspace type → **Public** → Save. (May require Community Manager approval on Team/Enterprise plans.)
3. **Verify anonymously:** open the workspace URL in an incognito window — all four collections should load without login, with **Fork** / **Run in Postman** visible.
4. **Optional polish:** rename team `extole-4017592` → `extole` for a cleaner URL (`postman.com/extole/extole-api/...`), add logo/description, and submit the workspace to the [Postman API Network](https://www.postman.com/explore) so `search?q=Extole` surfaces it.

After step 2, update `postman/.postman-publish.json` `"type"` to `"public"` (or re-run publish locally) so CI verification enforces anonymous access.

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
| `POSTMAN_API_KEY`   | `publish-to-postman.yml` — publish and verify Postman collections       |

## License

MIT
