# Lilavathi Claude Code Framework (project-local)

A **project-local, Lilavathi-specific** Claude Code framework for building a K-12 math learning mobile app based on Bhāskarācārya's *Līlāvatī*, mapping ancient Indian mathematical problems to CCSSM standards.

## Product overview

- **Target**: K-12 students exploring math through historical context
- **Core loop**: Read verse → Attempt problem → Get hints → See solution → Earn XP
- **Navigation**: 4-tab architecture (Learn, Practice, Library, Profile)
- **Content**: 8 batch JSON files with CCSSM-mapped excerpts

## Stack

- **Frontend**: Flutter (4-tab navigation, 16+ screens)
- **CMS**: Sanity (with batch JSON content structure)
- **AI**: Claude (hosted) **or** local/custom LLM (later)
- **Backend**: TBD (later)

## Reference specs

| File | Description |
|------|-------------|
| `templates/flutter/Bhaskaracharya Lilavathi - Mobile PRD.md` | Full product requirements |
| `templates/flutter/UI_design.md` | Design system (8pt grid, 44px taps, AA contrast) |
| `templates/flutter/UI_screens_nav.md` | 4-tab navigation architecture |
| `templates/flutter/UI_Screen_mockups.md` | 16 screen specifications |
| `skills/content-to-sanity-import/lilavati_mapping_batch_00*.json` | 8 CCSSM-mapped content files |

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
(e.g., "use rules/10-flutter_rules.md").

### Mode B — Copy into `~/.claude/` (optional)
This makes the agents/commands/skills available globally.

- macOS/Linux: run `scripts/install_to_claude.sh`
- Windows PowerShell: run `scripts/install_to_claude.ps1`

Both scripts **copy** the contents of this directory into `~/.claude/` (or the Windows equivalent),
without deleting anything.

See `INSTALL.md` for details and safety notes.

## What's included

| Directory | Contents |
|-----------|----------|
| `agents/` | Role prompts: orchestrator, flutter-architect, flutter-implementer, sanity-modeler, qa-reviewer, content-ingestion |
| `commands/` | Repeatable workflows: bootstrap, content_model, feature |
| `skills/` | Playbooks: flutter-feature-scaffold, sanity-schema-gen, content-to-sanity-import, ccssm-mapping, tdd-flutter |
| `rules/` | Project rules: overview, flutter, sanity, content |
| `templates/` | Ready-to-use: Sanity schemas, GROQ queries, Flutter structure, CI |
| `hooks/` | Optional hook configuration (conservative/off-by-default) |

## Design system constraints

- **8pt spacing grid**: all margins, padding, gaps
- **Tap targets**: minimum 44px height
- **Contrast**: AA minimum (4.5:1 normal text, 3:1 large text)
- **Component states**: default/pressed/disabled/error/success

## Content schema (batch JSON format)

```
excerpt_id          — Primary key (e.g., "§33")
excerpt_text_short  — ≤25 words from source
skills_modern_terms — Array of modern skill descriptions
ccssm_mappings      — Array of {code, rationale, confidence}
```

## Recommended defaults (for a solo bootstrapper)

- Flutter quality gates: `flutter analyze` + `flutter test`
- Lint: `flutter_lints` (lightweight, low-friction)
- CI: GitHub Actions single workflow (template included)
- Content: 3 core Sanity types (`problem`, `skill`, `mapping`) with batch JSON fields

Last updated: 2026-02-03 | Version: 0.2.0
