# Sanity Schema Generation (Problem/Skill/Mapping)

## Purpose
Generate minimal Sanity schemas with stable identifiers and AI-review gating fields.

## Reference
- Batch JSON format: `skills/content-to-sanity-import/lilavati_mapping_batch_00*.json`
- Content rules: `rules/30-content_rules.md`

## Steps
1. Create schemas with both legacy and new fields:

   **problem** (primary document):
   ```typescript
   // Identity (new)
   excerpt_id: string,              // e.g., "§33" — PRIMARY KEY

   // Source provenance (new)
   source: {
     section_number: number,
     epub_page_file: string,
     char_offset: number
   },

   // Content (new)
   excerpt_text_short: string,      // ≤25 words

   // CCSSM mapping (new structure)
   skills_modern_terms: string[],
   ccssm_mappings: [{
     code: string,
     rationale: string,
     confidence: number             // 0-100
   }],
   mapping_confidence_summary: { max_confidence: number },

   // Quality metadata (new)
   translation_ambiguity_notes: string[],
   extraction_quality: {
     non_ascii_chars: number,
     has_multiple_punct_runs: boolean
   },

   // Legacy fields (keep for migration)
   chapterNumber: number,
   verseId: string,
   prompt: string,
   hint: string,
   solutionSteps: string[],
   answer: string,
   difficulty: number,
   tags: string[],

   // Review gate
   reviewed: boolean
   ```

   **skill**: name, description, gradeBand, ccssmCodes

   **mapping**: problem ref, skills refs, ccssmCodes, confidence, ambiguityNotes, reviewed

2. Add basic validation (required fields, min/max, confidence 0-100).
3. Provide GROQ queries for app needs.

## Outputs
- TypeScript schema files
- GROQ queries (filter by confidence ≥70, by CCSSM code, by excerpt_id)
- Sample docs matching batch JSON format


