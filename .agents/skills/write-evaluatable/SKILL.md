---
name: write-evaluatable
description: Resolve buildtime/runtime expression context from OpenAPI schemas and expression-context types; explain available context methods; help write handlebars or javascript evaluatable field values. Use when a schema field is evaluatable, uses oneOf with @buildtime or @runtime prefixes, references a BuildtimeContext or RuntimeContext, or the user asks how to write an expression for a platform field.
---

# Write evaluatable field values

## When to use

Apply when an OpenAPI field schema includes:

- `oneOf` branches with `pattern` like `^handlebars@buildtime:.*` or `^javascript@runtime:.*`
- `externalDocs` pointing to `*BuildtimeContext.d.ts` or `*RuntimeContext.d.ts`
- Descriptions mentioning "buildtime evaluatable" or "runtime evaluatable"

## Workflow

```
- [ ] Step 1: Read the field schema (oneOf branches + expected type)
- [ ] Step 2: Choose evaluatable kind (static / handlebars / javascript) — see Handlebars vs JavaScript below
- [ ] Step 3: Resolve context type from externalDocs
- [ ] Step 4: Walk context .d.ts inheritance — list available methods
- [ ] Step 5: Identify variable names (component settings / schema examples)
- [ ] Step 6: Draft expression and show resolved vs stored form
```

### Step 1 — Read the field schema

In the relevant OpenAPI bundle, open the property schema (e.g. `NameInAudienceCreateRequest`, `EnabledInCampaignComponentVariableRequest`).

Each `oneOf` branch defines an allowed shape:

| Branch title           | Prefix / form                             | When to use                                                            |
| ---------------------- | ----------------------------------------- | ---------------------------------------------------------------------- |
| Static Value           | plain string/boolean/number               | Fixed literal                                                          |
| `provided@buildtime:`  | explicit literal at buildtime             | Documented in some field descriptions                                  |
| Buildtime - Handlebars | `handlebars@buildtime:...`                | Simple `{{variable}}` substitution or templates with placeholders only |
| Buildtime - Javascript | `javascript@buildtime:function() { ... }` | Any logic needing `context` methods, conditionals, or fallbacks        |
| Runtime - Handlebars   | `handlebars@runtime:...`                  | Simple runtime variable templates only                                 |
| Runtime - Javascript   | `javascript@runtime:function() { ... }`   | Complex per-request/person logic                                       |

Use only formats present in the schema's `oneOf` for that field.

### Handlebars vs JavaScript

**Handlebars cannot access `context` methods** — only variables via `{{}}` syntax.

| Capability                    | Handlebars               | JavaScript                                         |
| ----------------------------- | ------------------------ | -------------------------------------------------- |
| Reference a variable          | `{{audienceName}}`       | `context.getVariableContext().get('audienceName')` |
| Template with placeholders    | `VIP - {{audienceName}}` | string concatenation in function body              |
| Call `context.getComponent()` | ❌                       | ✅                                                 |
| Conditionals / fallbacks      | ❌                       | ✅                                                 |
| Use `getGlobalServices()`     | ❌                       | ✅                                                 |

**Prefer Handlebars** when the value is a single variable or a fixed template interpolating one or more variables.

**Prefer JavaScript** when the expression needs context methods, branching, null checks, computed values, or anything beyond variable substitution.

Note the **expected resolved type** from the field description (string, boolean, etc.) and constraints (e.g. max 255 characters).

### Step 2 — Resolve context type

From the evaluatable branch's `externalDocs.url` or description, extract the context name (e.g. `AudienceBuildtimeContext`).

Map to the local file:

```
openapi/expression-context/com/extole/api/<path>/<ContextName>.d.ts
```

GitHub URLs in the spec use `.../blob/main/openapi/expression-context/...` — read the same path in this repo.

### Step 3 — Walk the context type chain (JavaScript only)

Open the context `.d.ts` and follow `extends` / imports. Collect **every method** available on `context` — this applies to **JavaScript evaluatables only**. Handlebars does not use these methods; it only sees variable names in `{{}}`.

1. Methods declared on the context interface itself
2. Methods from each parent interface (`extends`)
3. Return types of getters — follow those `.d.ts` files when the user needs nested APIs

Present methods grouped by source interface. Example for `AudienceBuildtimeContext`:

```
AudienceBuildtimeContext
  └── ComponentBuildtimeContext
        ├── getAsset(name)
        ├── getComponent()
        ├── getComponentService()
        ├── getVariableContext([defaultKey])
        ├── GlobalContext → getClientContext(), getGlobalServices()
        └── LoggerContext → log(message)
```

See [context-resolution.md](context-resolution.md) for common context hierarchies.

### Step 4 — Variables for Handlebars

Handlebars `{{variableName}}` resolves **variable names only** — not `context` method calls. Each placeholder must match a component variable / setting name in scope at buildtime (or runtime, for `@runtime`).

Valid Handlebars patterns:

```
handlebars@buildtime:{{audienceName}}
handlebars@buildtime:VIP - {{audienceName}}
handlebars@buildtime:{{companyName}} - {{audienceName}}
```

Invalid — use JavaScript instead:

```
handlebars@buildtime:{{context.getVariableContext().get('name')}}   ❌
handlebars@buildtime:{{getClientContext().getClientShortName()}}    ❌
```

To find valid variable names:

1. Check `example` on the schema branch (e.g. `{{name}}` means a variable literally named `name`)
2. If the user has a component, use documented `GET /v1/components/{component_id}/settings` to list setting names
3. Do not assume variables exist — expressions fail at build if the variable is missing from context

### Step 5 — Write JavaScript evaluatables

Format (from schema examples):

```
javascript@buildtime:function() { return <expression>; }
```

Rules:

- The function body runs with `context` typed as the resolved `*BuildtimeContext` (or runtime equivalent)
- Use only methods confirmed in the `.d.ts` chain
- Return a value matching the field's resolved type (string, boolean, etc.)
- Prefer `context.getVariableContext().get('varName')` for component variables
- Prefer `context.getComponent().getVariableValue('varName')` when working from the current component
- Use `context.getClientContext()` for client id, short name, timezone
- Use `context.getGlobalServices()` for utility services (dates, strings, JSON, etc.) — read `GlobalServices.d.ts` for the full list

**Template:**

```javascript
javascript@buildtime:function() {
  var value = context.getVariableContext().get('myVariable');
  return value != null ? value : 'fallback';
}
```

For `@runtime` fields, the context type differs (often includes `PersonContext`, `RuntimeVariableContext`) — always resolve from that field's `externalDocs`, not from buildtime types.

### Step 6 — Explain stored vs built values

Tell the user:

| Endpoint                                        | Shows                                     |
| ----------------------------------------------- | ----------------------------------------- |
| Editable definition (e.g. `GET /v1/audiences`)  | Unevaluated expression string             |
| Built snapshot (e.g. `GET /v1/audiences/built`) | Resolved value after buildtime evaluation |

Expressions often require the resource to be **wired to a component** (via `component_references` or component settings) so variable context is populated.

## Output format

When helping the user, include:

1. **Context type** — name + link to `.d.ts` file
2. **Available methods** — grouped table or list from the type chain
3. **Relevant variables** — names and how they are sourced
4. **Recommended expression** — prefer Handlebars for simple variable refs; use JavaScript when context methods or logic are needed
5. **Caveats** — build vs runtime, component wiring, type/length constraints

## Related files

- Context type index: `openapi/expression-context/com/extole/api/`
- Common hierarchies: [context-resolution.md](context-resolution.md)
- API calls (OpenAPI-only): `.agents/skills/call-extole-api/SKILL.md`
