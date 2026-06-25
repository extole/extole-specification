---
name: call-extole-api
description: Call the Extole HTTP API using only operations documented in openapi/*.json paths. Use when the user asks to call, test, or integrate with the Extole API, or when creating/updating audiences, components, campaigns, or other platform resources via HTTP.
---

# Call Extole API (OpenAPI-only)

## Prerequisites

Read `.agents/rules/openapi-only-api-calls.md` first. This skill implements that policy as a workflow.

## Workflow

Copy and complete this checklist before any HTTP request:

```
- [ ] Task understood
- [ ] Correct OpenAPI bundle selected
- [ ] Operation found in paths (method + path template)
- [ ] operationId and schemas identified
- [ ] Auth scheme confirmed from components.securitySchemes
- [ ] Request composed from documented parameters/body only
```

### Step 1 — Pick the bundle

| User need                                                  | OpenAPI file                                  |
| ---------------------------------------------------------- | --------------------------------------------- |
| Admin / config (audiences, components, campaigns, persons) | `openapi/management.json`                     |
| Expert-only config                                         | `openapi/management-expert.json`              |
| Backend server integration                                 | `openapi/integration-server-to-extole.json`   |
| Consumer / browser integration                             | `openapi/integration-consumer-to-extole.json` |

### Step 2 — Find the operation

Search `paths` in the chosen bundle. See [spec-lookup.md](spec-lookup.md) for search strategies, naming patterns, and common traps.

Confirm:

- HTTP method (`get`, `post`, `put`, `delete`, …)
- Path template (e.g. `/v1/audiences/{audience_id}`) — use **exact** parameter names from the spec
- `operationId` and `summary`
- Whether you need the editable path or the `/built` variant

If not in `paths`, **stop**. Tell the user the operation is undocumented.

### Step 3 — Build the request

From the operation definition only:

- Path parameters from `parameters` (`in: path`)
- Query parameters from `parameters` (`in: query`)
- Headers (including auth) from `parameters` and `securitySchemes`
- Body from `requestBody` → `$ref` schema

Do not invent fields not in the schema.

### Step 4 — Execute and interpret

Use the host the user provided (e.g. `https://api.lo.extole.io`) or the spec `servers` URL.

On success, summarize using response schema field names.

On error, use the documented error response schema/examples; do not retry with alternate undocumented URLs.

## Common operations (management bundle)

| Goal                       | Documented operation                          |
| -------------------------- | --------------------------------------------- |
| List audiences             | `GET /v1/audiences`                           |
| Create audience            | `POST /v1/audiences`                          |
| Archive audience           | `DELETE /v1/audiences/{audience_id}`          |
| Resolved audience snapshot | `GET /v1/audiences/{audience_id}/built`       |
| Create component variable  | `POST /v1/components/{component_id}/settings` |
| List component variables   | `GET /v1/components/{component_id}/settings`  |

Always re-verify in `openapi/management.json` before calling; this table is a hint, not a substitute for `paths`.

Full lookup guide: [spec-lookup.md](spec-lookup.md)

## Evaluatable fields

If a request body field uses evaluatable expressions (`handlebars@buildtime:`, `javascript@buildtime:`, etc.), stop and follow [`.agents/skills/write-evaluatable/SKILL.md`](../write-evaluatable/SKILL.md) to resolve context types and draft the expression before submitting the API call.
