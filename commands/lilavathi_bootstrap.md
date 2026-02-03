---
name: lilavathi_bootstrap
description: Bootstrap the Lilavathi project workflow (Flutter + Sanity) with minimal defaults.
---

Run as: call the `lilavathi-orchestrator` agent.

## Reference
- PRD: `templates/flutter/Bhaskaracharya Lilavathi - Mobile PRD.md`
- UI specs: `templates/flutter/UI_design.md`, `UI_screens_nav.md`, `UI_Screen_mockups.md`
- Content: 8 batch JSON files in `skills/content-to-sanity-import/`

## Context
- Frontend: Flutter (4-tab navigation: Learn, Practice, Library, Profile)
- CMS: Sanity (with batch JSON content)
- AI: Claude or local model (later)
- Backend: TBD

## Task
1) Propose repo structure for Flutter app:
   - 4-tab navigation architecture
   - 16 screens per UI_Screen_mockups.md
   - Shared components from design system

2) Propose Sanity schema set:
   - `problem`: with batch JSON fields (excerpt_id, ccssm_mappings, etc.)
   - `skill`: modern terms mapping
   - `mapping`: CCSSM code references

3) Provide GROQ queries for MVP:
   - List problems by confidence (≥70)
   - Get problem by excerpt_id
   - Filter by CCSSM code

4) Provide minimal CI workflow (`flutter analyze` + `flutter test`).

## Deliverables
- [ ] Flutter repo structure (feature folders + 16 screens)
- [ ] Sanity schemas (TypeScript)
- [ ] GROQ queries (3 minimum)
- [ ] CI workflow (GitHub Actions)
- [ ] Import script for 8 batch JSON files

## Constraints
- Keep dependencies minimal.
- Assume solo builder; optimize for speed and maintainability.
- Design system: 8pt grid, 44px tap targets, AA contrast.

Deliverables must be concrete file trees and copy/pasteable snippets.

