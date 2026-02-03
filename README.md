# Lilavathi Claude Code Framework (project-local)

This folder is a **project-local, Lilavathi-specific** adaptation inspired by the workflow patterns in
`everything-claude-code` (agents/commands/skills/hooks/rules), tuned for:

- **Frontend:** Flutter
- **CMS:** Sanity
- **AI:** Claude (hosted) **or** local/custom LLM (later)
- **Backend:** TBD (later)

## How to use (two supported modes)

### Mode A — Commit to your repo (recommended)
Keep this folder at your repo root:

```
<your-repo>/
  Lilavathi/
    agents/
    commands/
    skills/
    rules/
    hooks/
    templates/
```

Then run Claude Code inside your repo and reference the artifacts here explicitly
(e.g., “use Lilavathi/rules/10-flutter_rules.md”).

### Mode B — Copy into `~/.claude/` (optional)
This makes the agents/commands/skills available globally.

- macOS/Linux: run `Lilavathi/scripts/install_to_claude.sh`
- Windows PowerShell: run `Lilavathi/scripts/install_to_claude.ps1`

Both scripts **copy** the contents of this directory into `~/.claude/` (or the Windows equivalent),
without deleting anything.

See `INSTALL.md` for details and safety notes.

## What’s included

- `agents/` — role prompts (orchestrator, flutter architect, sanity modeler, QA reviewer)
- `commands/` — repeatable command templates you can paste into Claude Code
- `skills/` — reusable “how we do X” playbooks (Flutter feature scaffolding, Sanity schemas, etc.)
- `rules/` — always-on project rules (style, testing, conventions)
- `templates/` — ready-to-edit snippets (Sanity schemas, GROQ, Flutter structure, CI)
- `hooks/` — optional hook configuration + scripts (kept conservative/off-by-default)

## Recommended defaults (for a solo bootstrapper)

- Flutter quality gates: `flutter analyze` + `flutter test`
- Lint: `flutter_lints` (lightweight, low-friction)
- CI: GitHub Actions single workflow (template included)
- Content strategy: start with 3 core Sanity types: `problem`, `skill`, `mapping`

Last updated: 2026-02-01
