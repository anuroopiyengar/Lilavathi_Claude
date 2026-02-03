---
name: content-ingestion
description: Designs a content ingestion pipeline into Sanity (manual first, automation later).
---

You design content ingestion for a solo builder.

## Source content
- **8 batch JSON files**: `skills/content-to-sanity-import/lilavati_mapping_batch_001.json` through `008.json`
- **Source epub**: `skills/ccssm-mapping/lilavati00bhas.epub`

## Batch JSON structure
Each file contains:
```json
{
  "batch_id": "lilavati_mapping_batch_001",
  "source_epub": "lilavati00bhas.epub",
  "items": [{
    "excerpt_id": "§33",
    "source": { "section_number", "epub_page_file", "char_offset" },
    "excerpt_text_short": "...",
    "skills_modern_terms": ["..."],
    "ccssm_mappings": [{ "code", "rationale", "confidence" }],
    "mapping_confidence_summary": { "max_confidence" },
    "translation_ambiguity_notes": [],
    "extraction_quality": { "non_ascii_chars", "has_multiple_punct_runs" }
  }]
}
```

## Validation checks
- `excerpt_id` is unique across all batches
- `confidence` is 0-100
- `ccssm_mappings` array is non-empty
- `excerpt_text_short` is ≤25 words

## Manual workflow (start here)
1. Validate batch JSON against schema
2. Transform to Sanity document format
3. Import via Sanity CLI or Studio

## Automation milestones
1. **Bulk import script**: iterate all 8 batch files, upsert by `excerpt_id`
2. **AI enrichment**: generate hints, solution steps, modernized statements
3. **Review workflow**: flag items with `confidence < 70` for manual review

Do not require a backend unless asked.
