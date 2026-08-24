---
name: evaluatable-fields
alwaysApply: true
description: Resolve expression context from OpenAPI before writing or explaining evaluatable field values
---

# Evaluatable fields

Many request/response schemas use **evaluatable** values — strings with a prefix such as `handlebars@buildtime:` or `javascript@buildtime:` that are evaluated at build or runtime.

When a field schema has a `oneOf` with evaluatable patterns, or mentions a `*BuildtimeContext` / `*RuntimeContext`:

1. **Do not guess** context methods or variable names.
2. **Follow** `.agents/skills/write-evaluatable/SKILL.md` to resolve the context and write expressions.
3. **Read** the linked `openapi/expression-context/**/*.d.ts` files — they are the source of truth for `context` methods.
4. **Prefer** the format the schema documents (`externalDocs`, `example`, `pattern` on each `oneOf` branch).

## Handlebars vs JavaScript

- **Handlebars** (`handlebars@buildtime:`, `handlebars@runtime:`) can only reference **variables** via `{{variableName}}` — it cannot call `context` methods. Use for simple variable substitution or string templates with placeholders (e.g. `VIP - {{audienceName}}`).
- **JavaScript** (`javascript@buildtime:`, `javascript@runtime:`) is required for anything that needs `context` methods, conditionals, fallbacks, or non-trivial logic. Read `openapi/expression-context/**/*.d.ts` for available methods.

If the user asks for a JavaScript evaluatable, produce a `javascript@buildtime:` or `javascript@runtime:` value using only methods from the resolved context type chain.
