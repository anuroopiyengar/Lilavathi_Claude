# Lilavathi project rules (overview)

This repository builds a K-12 learning app based on Bhāskarācārya’s *Līlāvatī* problems, mapped to CCSSM.

Non-negotiables:
- Prefer **simple, shippable** solutions over “perfect architecture.”
- Minimize dependencies unless they clearly reduce long-run maintenance.
- Keep all content **structured** (no unstructured blobs if avoidable).
- Any AI output that becomes user-facing content must be **reviewable** and stored with provenance fields.

Working stack:
- Flutter (mobile)
- Sanity (CMS)
- AI: Claude OR local model (later)
- Backend: TBD (later)
