# Bulk Import Līlāvatī Content into Sanity

## Purpose
Define a safe bulk import format and a repeatable process.

## Steps
1. Choose import format: NDJSON or JSON array.
2. Define required fields per document type.
3. Build a validation checklist:
   - unique (chapterNumber, verseId)
   - required text fields present
   - mapping confidence in 0–100
4. Run a dry-run import into a sandbox dataset.
5. Spot-check 10 random records in Studio.

## Outputs
- Import file(s)
- Validation checklist
- Rollback plan


