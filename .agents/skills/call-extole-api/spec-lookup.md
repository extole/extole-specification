# OpenAPI spec lookup guide

How to find the right endpoint, schema, and request shape without probing the live API.

## 1. Pick the bundle first

| User intent                                                         | File                                          | Tags / domains                                                 |
| ------------------------------------------------------------------- | --------------------------------------------- | -------------------------------------------------------------- |
| Admin UI config: audiences, components, campaigns, reports, users   | `openapi/management.json`                     | Audiences, Components, Campaigns, …                            |
| Expert config: controller triggers/actions, flow steps, prehandlers | `openapi/management-expert.json`              | Campaign Controllers Triggers, Campaign Controllers Actions, … |
| Your backend calling Extole (events, persons, rewards, tokens)      | `openapi/integration-server-to-extole.json`   | Events, Persons, Rewards, Authentication, …                    |
| Browser / consumer SDK (profiles, zones, consumer events)           | `openapi/integration-consumer-to-extole.json` | Profiles, Content, Authentication, …                           |

If the resource is not in `management.json` `paths`, check `management-expert.json` before concluding it is missing.

## 2. Search strategies (in order)

1. **`paths` key substring** — search for the resource noun (`audience`, `component`, `campaign`, `person`).
2. **`tags`** — operations are grouped by tag (e.g. `Audiences`, `Components`). Browse all operations sharing a tag.
3. **`operationId`** — camelCase verb+noun (`listAudiences`, `createAudience`, `archiveAudience`). Search the JSON for the action you need.
4. **`summary` / `description`** — full-text search for user-facing verbs ("archive", "publish", "built").
5. **Schema name** — request bodies reference `*CreateRequest`, `*UpdateRequest`; responses use `*Response`. Search `components.schemas` then find which operation `$ref`s them.

Do **not** use Postman collections or `x-codeSamples` as the source of truth — they follow `paths`, not the other way around.

## 3. Path naming patterns

| Pattern                         | Meaning                                                                                                             |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `/v1/...`                       | Most management resources                                                                                           |
| `/v2/...`                       | Campaigns and some summaries/settings                                                                               |
| `.../built`                     | **Resolved** snapshot (evaluated config) — use when you need runtime-ready values                                   |
| Path without `/built`           | **Editable** definition — may contain unevaluated expressions                                                       |
| `{resource_id}`                 | Path parameter — use exact name from spec (`audience_id`, not `audienceId`) unless the template says `{campaignId}` |
| `{component_id}{version}`       | Optional version suffix on component paths — check parameter docs for how to omit version                           |
| `DELETE /resource/{id}`         | Often **soft archive** (reversible)                                                                                 |
| `POST /resource/{id}/delete`    | Often **hard delete** (check `summary` — do not assume)                                                             |
| `POST /resource/{id}/unarchive` | Restore archived resource                                                                                           |

Always read the operation `summary` and `description` — HTTP method alone is not enough (e.g. audience archive is `DELETE`, hard delete is `POST .../delete`).

## 4. Terminology traps

| Informal term          | Spec path / schema                                                                   |
| ---------------------- | ------------------------------------------------------------------------------------ |
| Component **variable** | `/v1/components/{component_id}/settings`                                             |
| Create variable        | `POST .../settings` with `CampaignComponentSettingRequest` (discriminated by `type`) |
| Update variable        | `PUT .../settings/{setting_name}`                                                    |
| Evaluatable expression | Field `oneOf` in request schema + `openapi/expression-context/` types                |

A URL mentioned only in a schema **`description`** (not under `paths`) is **not** a documented endpoint.

## 5. Read the full operation definition

For the chosen `paths` entry, collect:

```
method, path, operationId, summary
parameters (in: path | query | header)
requestBody → schema $ref
responses → schema $ref + examples
security (if operation-level override)
```

### Auth (`components.securitySchemes`)

| Scheme   | Usage                           |
| -------- | ------------------------------- |
| `HEADER` | `Authorization: Bearer <token>` |
| `QUERY`  | `?access_token=<token>`         |
| `COOKIE` | `extole_token` cookie           |

Global `security` lists all three; an operation may require one.

### Pagination

Many list operations accept `limit` and `offset` query params — check the operation's `parameters` rather than assuming defaults.

### Errors

Error bodies typically use `RestExceptionResponse`. Operations often include `examples` under `responses.4xx` with specific `code` values (`audience_not_found`, `access_denied`, …).

## 6. Request body schemas

- Follow `$ref` into `components.schemas`.
- Watch for **`oneOf` / discriminator** — body shape depends on a `type` field (common on component settings/variables).
- **`required`** array lists mandatory fields only — do not send undocumented fields.
- For evaluatable fields, switch to `.agents/skills/write-evaluatable/SKILL.md`.

## 7. Host / environment

- Spec `servers[0].url` is typically `https://api.extole.io` (production).
- LO/dev hosts (e.g. `api.lo.extole.io`) are valid when the user provides them — **path and method must still match `paths`**.

## 8. Before calling — cite the operation

State this explicitly:

```
Bundle: openapi/management.json
Operation: listAudiences
Method: GET
Path: /v1/audiences
Auth: HEADER (Bearer)
```

If any field cannot be filled from `paths`, stop — the operation is not documented.

## 9. Quick reference — audience operations

| Goal                | operationId          | Method + path                                |
| ------------------- | -------------------- | -------------------------------------------- |
| List definitions    | `listAudiences`      | `GET /v1/audiences`                          |
| List built/resolved | `listBuiltAudiences` | `GET /v1/audiences/built`                    |
| Create              | `createAudience`     | `POST /v1/audiences`                         |
| Get definition      | `getAudience`        | `GET /v1/audiences/{audience_id}`            |
| Get built           | `getBuiltAudience`   | `GET /v1/audiences/{audience_id}/built`      |
| Update              | `updateAudience`     | `PUT /v1/audiences/{audience_id}`            |
| Archive (soft)      | `archiveAudience`    | `DELETE /v1/audiences/{audience_id}`         |
| Hard delete         | `deleteAudience`     | `POST /v1/audiences/{audience_id}/delete`    |
| Unarchive           | `unarchiveAudience`  | `POST /v1/audiences/{audience_id}/unarchive` |

Re-verify in `paths` — this table is a navigation aid only.
