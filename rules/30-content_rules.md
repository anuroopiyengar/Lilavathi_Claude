# Content rules (Līlāvatī + CCSSM mapping)

## Structure
Problems should be addressable by:
- **New format (preferred)**: `excerpt_id` (string, e.g., "§33")
- **Legacy format**: `chapterNumber` (int) + `verseId` (string)

Content fields:
- `excerpt_text_short` — capped at 25 words, from source epub
- `source` — provenance object with `section_number`, `epub_page_file`, `char_offset`
- Keep translation text separate from: modernized statement, hint(s), solution steps, final answer

## CCSSM mapping (batch JSON format)
Store mappings as:
- `skills_modern_terms[]` — array of skill descriptions in modern terminology
- `ccssm_mappings[]` — array of objects, each containing:
  - `code` (string) — CCSSM standard code (e.g., "7.NS.A", "HSN-Q★")
  - `rationale` (string) — explanation of why this standard applies
  - `confidence` (int, 0–100) — mapping confidence score
- `mapping_confidence_summary` — object with `max_confidence` across all mappings

## Quality metadata
- `translation_ambiguity_notes[]` — array of strings noting OCR/translation issues
- `extraction_quality` — object with:
  - `non_ascii_chars` (int)
  - `has_multiple_punct_runs` (bool)

## Content source
- 8 batch JSON files: `lilavati_mapping_batch_001.json` through `lilavati_mapping_batch_008.json`
- Source epub: `lilavati00bhas.epub`

## AI involvement
- AI may propose skills/mappings/hints, but any user-visible educational content must have a `reviewed` flag.
