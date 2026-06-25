# extole-specification — Agent Guide

OpenAPI 3 specifications and Postman collections for the Extole API.

## Agent instructions

Before calling the Extole API or answering API contract questions, read:

- [`.agents/README.md`](.agents/README.md) — how agent rules and skills are organized
- [`.agents/rules/`](.agents/rules/) — mandatory policies (always apply)
- [`.agents/skills/`](.agents/skills/) — workflows for specific tasks
  - [`write-evaluatable`](.agents/skills/write-evaluatable/SKILL.md) — resolve expression context and write evaluatable field values

## Source of truth

| Path                                          | Description                                                      |
| --------------------------------------------- | ---------------------------------------------------------------- |
| `openapi/management.json`                     | Admin config: campaigns, components, audiences, persons, rewards |
| `openapi/management-expert.json`              | Expert-only configuration surfaces                               |
| `openapi/integration-server-to-extole.json`   | Server-to-Extole integration                                     |
| `openapi/integration-consumer-to-extole.json` | Consumer-to-Extole integration                                   |
| `openapi/expression-context/`                 | TypeScript types for buildtime/runtime expression contexts       |

Only operations listed under `paths` in these files are valid API endpoints.

## Development

```bash
npm ci
npm run build    # regenerate Postman collections from OpenAPI
npm run lint     # Spectral lint
```
