---
name: lilavathi_content_model
description: Iterate on Sanity content model + publishing workflow for AI-enriched educational content.
---

Agent: `sanity-modeler`

## Reference
- Batch JSON format: `skills/content-to-sanity-import/lilavati_mapping_batch_00*.json`
- Content rules: `rules/30-content_rules.md`

## Goal
Extend schemas safely while maintaining backward compatibility with batch JSON structure.

## Task
1) Add/update fields from batch JSON format:
   ```
   // Identity
   excerpt_id: string              // PRIMARY KEY, e.g., "§33"

   // Source provenance
   source: {
     section_number: number,
     epub_page_file: string,
     char_offset: number
   }

   // Content
   excerpt_text_short: string      // ≤25 words

   // CCSSM mapping (new structure)
   skills_modern_terms: string[]
   ccssm_mappings: [{
     code: string,
     rationale: string,
     confidence: number            // 0-100
   }]
   mapping_confidence_summary: { max_confidence: number }

   // Quality metadata
   translation_ambiguity_notes: string[]
   extraction_quality: {
     non_ascii_chars: number,
     has_multiple_punct_runs: boolean
   }

   // Review gates
   reviewed: boolean
   reviewedBy: string
   reviewedAt: datetime
   ```

2) Add an editorial "review gate" approach:
   - Flag items with `confidence < 70` for review
   - Require `reviewed: true` before publishing

3) Provide migration guidance:
   - Keep legacy fields (chapterNumber, verseId) for existing documents
   - Add new fields as optional initially
   - Backfill excerpt_id from batch imports

4) Provide updated GROQ queries:
   - Filter by `mapping_confidence_summary.max_confidence >= 70`
   - Project only fields needed for mobile screens

## Constraints
- Keep schema minimal.
- Prefer additive changes over breaking changes.

