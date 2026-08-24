# Expression context resolution

TypeScript definitions under `openapi/expression-context/` define what `context` provides in **JavaScript** evaluatables. **Handlebars** does not use `context` — it only interpolates **variable names** via `{{variableName}}`.

| Evaluatable kind                                | What it can access                                                      |
| ----------------------------------------------- | ----------------------------------------------------------------------- |
| `handlebars@buildtime:` / `handlebars@runtime:` | Variables in scope (`{{name}}`, `VIP - {{name}}`)                       |
| `javascript@buildtime:` / `javascript@runtime:` | Full `context` object — methods from the resolved `*Context.d.ts` chain |

For complex expressions (conditionals, fallbacks, service calls), use JavaScript — not Handlebars.

## How to resolve any context

1. Get context name from the field schema's `externalDocs.description` or URL
2. Open `openapi/expression-context/com/extole/api/**/<ContextName>.d.ts`
3. For each `extends ParentContext`, open and merge parent methods
4. For return types (`getComponent(): CampaignComponent`), open that `.d.ts` when nested APIs are needed

## Common buildtime contexts

### AudienceBuildtimeContext

File: `openapi/expression-context/com/extole/api/audience/AudienceBuildtimeContext.d.ts`

Extends `ComponentBuildtimeContext` only (no extra methods).

Use for: audience `name`, `enabled`, and other audience definition fields linked to `AudienceBuildtimeContext` in the schema.

### ComponentBuildtimeContext

File: `openapi/expression-context/com/extole/api/campaign/ComponentBuildtimeContext.d.ts`

| Method                           | Returns                  | Purpose                         |
| -------------------------------- | ------------------------ | ------------------------------- |
| `getAsset(assetName)`            | `CampaignComponentAsset` | Asset URL, filename, name       |
| `getComponent()`                 | `CampaignComponent`      | Current component in build tree |
| `getComponentService()`          | `ComponentService`       | Lookup components in campaign   |
| `getVariableContext()`           | `VariableContext`        | All variables in scope          |
| `getVariableContext(defaultKey)` | `VariableContext`        | Variables scoped to a key       |

Also inherits `GlobalContext` + `LoggerContext`.

### CampaignBuildtimeContext

File: `openapi/expression-context/com/extole/api/campaign/CampaignBuildtimeContext.d.ts`

Extends `ComponentBuildtimeContext`. Adds:

| Method                         | Purpose        |
| ------------------------------ | -------------- |
| `getCampaignId()`              | Campaign id    |
| `getCampaignName()`            | Campaign name  |
| `getCampaignType()`            | Campaign type  |
| `getProgramLabel()`            | Program label  |
| `isCampaignVersionPublished()` | Published flag |

Use when schema links to `CampaignBuildtimeContext` or `ControllerBuildtimeContext`.

### ControllerBuildtimeContext

File: `openapi/expression-context/com/extole/api/campaign/ControllerBuildtimeContext.d.ts`

Extends `CampaignBuildtimeContext`. Adds `getControllerName()`.

### GlobalContext (mixed into most contexts)

File: `openapi/expression-context/com/extole/api/GlobalContext.d.ts`

| Method                | Returns                                                                       |
| --------------------- | ----------------------------------------------------------------------------- |
| `getClientContext()`  | `ClientContext` — `getClientId()`, `getClientShortName()`, `getTimezone()`    |
| `getGlobalServices()` | `GlobalServices` — date, string, JSON, person, audience, JWT, URL, … services |

See `openapi/expression-context/com/extole/api/service/GlobalServices.d.ts` for all service getters.

### VariableContext

File: `openapi/expression-context/com/extole/api/campaign/VariableContext.d.ts`

| Method              | Purpose                 |
| ------------------- | ----------------------- |
| `get(name)`         | Variable value by name  |
| `get(name, key)`    | Nested lookup           |
| `get(name, keys[])` | Multi-key nested lookup |

Also extends `GlobalContext`.

### CampaignComponent (via getComponent())

File: `openapi/expression-context/com/extole/api/campaign/CampaignComponent.d.ts`

| Method                                                  | Purpose                    |
| ------------------------------------------------------- | -------------------------- |
| `getId()`, `getName()`, `getDisplayName()`, `getPath()` | Identity                   |
| `getParent()`, `getChildren()`                          | Component tree             |
| `getVariableValue(name)`                                | Variable on this component |
| `hasVariable(name)`, `isOfType(type)`                   | Checks                     |

## Runtime contexts (different from buildtime)

Runtime fields use `@runtime` prefixes. Context types include person/request data — e.g.:

- `RuntimeVariableContext` — `getVariable(name)`, `getComponent()`
- `PersonContext`, `StepContext`, `WebhookRuntimeContext`, etc.

Always resolve from the **specific field's** `externalDocs` — do not reuse buildtime context for runtime fields.

## Documented evaluatable prefixes (OpenAPI schemas)

| Prefix                  | Phase              |
| ----------------------- | ------------------ |
| `provided@buildtime:`   | Buildtime literal  |
| `handlebars@buildtime:` | Buildtime template |
| `javascript@buildtime:` | Buildtime script   |
| `handlebars@runtime:`   | Runtime template   |
| `javascript@runtime:`   | Runtime script     |

Only use prefixes that appear in the target field's schema `oneOf` / `pattern`.
