# Agent instructions for extole-specification

Portable agent guidance for any LLM runtime (Cursor, Claude Code, Codex, Copilot, etc.).
Not tied to a specific IDE.

## Layout

```
.agents/
├── README.md          # this file
├── rules/             # mandatory policies — always follow
│   └── *.md
└── skills/            # task workflows — use when the task matches
    └── <skill-name>/
        └── SKILL.md
```

## How agents should use this

1. **On every session** — read all files in `.agents/rules/` before making API calls or claiming an endpoint exists.
2. **When a task matches a skill description** — read and follow the matching `.agents/skills/*/SKILL.md`.
3. **OpenAPI is the contract** — `openapi/*.json` `paths` is the only authoritative list of endpoints. Schema text, examples, and Postman collections are supporting material, not substitutes for `paths`.
4. **Evaluatable fields** — when a schema field uses `@buildtime` / `@runtime` expressions, follow `.agents/skills/write-evaluatable/SKILL.md` and read `openapi/expression-context/` types before writing JavaScript or Handlebars values.
5. **Endpoint lookup** — follow `.agents/skills/call-extole-api/spec-lookup.md` for bundle selection, search order, and path naming patterns.

## Adding content

| Type                | Location                         | Format                                                  |
| ------------------- | -------------------------------- | ------------------------------------------------------- |
| Policy / constraint | `.agents/rules/<name>.md`        | Markdown with optional YAML frontmatter                 |
| Workflow / how-to   | `.agents/skills/<name>/SKILL.md` | YAML frontmatter (`name`, `description`) + instructions |

Keep rules short and actionable. One concern per rule file.
