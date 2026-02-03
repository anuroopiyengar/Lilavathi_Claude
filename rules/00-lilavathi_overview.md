# Lilavathi project rules (overview)

This repository builds a K-12 math learning mobile app based on Bhāskarācārya's *Līlāvatī*, mapping ancient Indian mathematical problems to CCSSM standards. The app presents historical math puzzles in a gamified, chapter-based progression with adaptive difficulty.

## Product vision
- **Target**: K-12 students exploring math through historical context
- **Core loop**: Read verse → Attempt problem → Get hints → See solution → Earn XP
- **Content source**: 8 batch JSON files with CCSSM-mapped excerpts from the Līlāvatī

## Non-negotiables
- Prefer **simple, shippable** solutions over "perfect architecture."
- Minimize dependencies unless they clearly reduce long-run maintenance.
- Keep all content **structured** (no unstructured blobs if avoidable).
- Any AI output that becomes user-facing content must be **reviewable** and stored with provenance fields.

## UI design principles
- "Modern academic + warm heritage" aesthetic—clean, contemporary with subtle geometric Indian-inspired motifs
- Avoid parchment/manuscript textures; keep modern and accessible
- 8pt spacing grid, iOS + Android friendly
- AA contrast minimum, tap targets ≥44px height
- Light mode first + dark mode for core screens
- All components must include states: default/pressed/disabled/error/success

## Working stack
- Flutter (mobile) — 4-tab navigation architecture
- Sanity (CMS) — content with CCSSM mappings
- AI: Claude OR local model (later)
- Backend: TBD (later)
