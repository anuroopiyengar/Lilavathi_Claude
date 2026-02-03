---
name: lilavathi_bootstrap
description: Bootstrap the Lilavathi project workflow (Flutter + Sanity) with minimal defaults.
---

Run as: call the `lilavathi-orchestrator` agent.

Context:
- Frontend: Flutter
- CMS: Sanity
- AI: Claude or local model (later)
- Backend: TBD

Task:
1) Propose repo structure for Flutter app (feature folders).
2) Propose Sanity schema set for `problem`, `skill`, `mapping`.
3) Provide 3 GROQ queries needed for MVP content screens.
4) Provide a minimal CI workflow to run `flutter analyze` and `flutter test`.

Constraints:
- Keep dependencies minimal.
- Assume solo builder; optimize for speed and maintainability.
Deliverables must be concrete file trees and copy/pasteable snippets.

