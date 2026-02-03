# Sanity rules

## Content modeling
- Content is **data**. Prefer clear field names and predictable types.
- Core document types: `problem`, `skill`, `mapping`.
- Always include:
  - `createdAt`, `updatedAt` (Sanity provides), plus
  - `source` / `provenance` fields for AI-generated enrichment.

## Schema fields (batch JSON structure)
Keep both legacy and new fields for gradual migration:

**Legacy fields (keep)**:
- `chapterNumber`, `verseId`, `prompt`, `hint`, `solutionSteps`, `answer`
- `difficulty`, `tags`, `reviewed`, `provenance`

**New fields (add from batch JSON)**:
- `excerpt_id` (string) — e.g., "§33"
- `source` (object): `section_number`, `epub_page_file`, `char_offset`
- `excerpt_text_short` (string) — capped at 25 words
- `skills_modern_terms` (array of strings)
- `ccssm_mappings` (array of objects): `code`, `rationale`, `confidence`
- `mapping_confidence_summary` (object): `max_confidence`
- `translation_ambiguity_notes` (array of strings)
- `extraction_quality` (object): `non_ascii_chars`, `has_multiple_punct_runs`

## Publishing
- Use drafts/publish flow.
- For AI-enriched fields, add a boolean like `reviewed` or `editorApproved`.

## Querying (GROQ)
- Prefer small, explicit projections (return only what the app needs).
- Use stable identifiers:
  - `excerpt_id` for new content (preferred)
  - `chapter` + `verseId` for legacy problems
  - `slug` for navigation lists

## Media
- Store images (if any) as Sanity assets; keep alt text.
