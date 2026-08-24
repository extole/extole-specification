---
name: openapi-only-api-calls
alwaysApply: true
description: Only call Extole API operations documented in this repo's OpenAPI paths
---

# OpenAPI-only API calls

When calling the Extole API or telling a user how to call it:

## Allowed

- Use only HTTP operations defined under `paths` in `openapi/*.json`.
- Before the first call, state: **bundle file**, **path template**, **method**, and **operationId** (if present).
- Use request/response schemas from the same OpenAPI bundle for body shape, query params, and auth.
- Use `servers` from the spec for host selection; environment-specific hosts (e.g. `api.lo.extole.io`) are fine when the user provides them, but paths and methods must still come from `paths`.

## Forbidden

- **Do not probe** the live API to discover endpoints (no guessing `/v2/...`, `/variables` vs `/settings`, etc.).
- **Do not use** URLs that are not listed under `paths`, even if a live request succeeds.
- **Do not treat** paths mentioned only inside schema `description` fields as documented endpoints.
- **Do not treat** Postman collections, README prose, or code samples as authoritative over `paths`.

## When an endpoint is missing

Stop and report the gap. Do not substitute an undocumented URL. Suggest adding the operation to the OpenAPI spec or using the closest documented equivalent (and explain the difference).

## Terminology note

In this spec, component **variables** are often exposed under `/settings` paths (e.g. `POST /v1/components/{component_id}/settings`). Prefer documented path names over informal names.

## Lookup hints

Before searching or calling, read `.agents/skills/call-extole-api/spec-lookup.md` for:

- Which of the four bundles to open
- How to search by `tags`, `operationId`, and path patterns
- `/built` vs editable paths, archive vs delete, pagination, auth schemes
- Schema `$ref` / `oneOf` / terminology traps

## Example

| Verdict      | Endpoint                                                                                |
| ------------ | --------------------------------------------------------------------------------------- |
| ✅ Allowed   | `POST /v1/components/{component_id}/settings` — in `openapi/management.json` `paths`    |
| ✅ Allowed   | `GET /v1/audiences` — in `openapi/management.json` `paths`                              |
| ❌ Forbidden | `POST /v2/campaigns/{campaign_id}/components/{component_id}/variables` — not in `paths` |
