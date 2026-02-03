# Sanity rules

## Content modeling
- Content is **data**. Prefer clear field names and predictable types.
- Start minimal: `problem`, `skill`, `mapping`.
- Always include:
  - `createdAt`, `updatedAt` (Sanity provides), plus
  - `source` / `provenance` fields for AI-generated enrichment.

## Publishing
- Use drafts/publish flow.
- For AI-enriched fields, add a boolean like `reviewed` or `editorApproved`.

## Querying (GROQ)
- Prefer small, explicit projections (return only what the app needs).
- Use stable identifiers:
  - `chapter` + `verseId` for problems
  - `slug` for navigation lists

## Media
- Store images (if any) as Sanity assets; keep alt text.
