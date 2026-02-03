# Bulk Import Līlāvatī Content into Sanity

## Purpose
Define a safe bulk import format and a repeatable process for the 8 batch JSON files.

## Source files
Located in `skills/content-to-sanity-import/`:
- `lilavati_mapping_batch_001.json` through `lilavati_mapping_batch_008.json`
- Source epub: `skills/ccssm-mapping/lilavati00bhas.epub`

## Batch JSON structure
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

## Steps
1. **Validate** each batch file:
   - `excerpt_id` is unique across all 8 batches
   - `confidence` values are 0-100
   - `ccssm_mappings` array is non-empty
   - `excerpt_text_short` is ≤25 words
2. **Transform** batch items to Sanity document format (add `_type: 'problem'`).
3. **Import** via Sanity CLI: `sanity documents import <file> --replace`
4. **Dry-run** into sandbox dataset first.
5. **Spot-check** 10 random records per batch in Studio.

## Import script outline
```bash
for i in {001..008}; do
  sanity documents import \
    lilavati_mapping_batch_$i.ndjson \
    --dataset production \
    --replace
done
```

## Outputs
- Transformed NDJSON files (one per batch)
- Validation report (errors per batch)
- Rollback plan (dataset snapshot before import)


