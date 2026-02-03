# CCSSM Mapping Playbook

## Purpose
Generate modern skills + CCSSM mappings with confidence and ambiguity notes.

## Reference
- Existing mappings: `skills/content-to-sanity-import/lilavati_mapping_batch_00*.json`
- Source text: `skills/ccssm-mapping/lilavati00bhas.epub`

## Mapping structure (from batch JSON)
```json
{
  "skills_modern_terms": [
    "Multiply/divide fractions (rational numbers)",
    "Represent rational quantities in computations"
  ],
  "ccssm_mappings": [
    {
      "code": "7.NS.A",
      "rationale": "Rational number operations; fraction multiplication/division is central here.",
      "confidence": 90
    }
  ],
  "mapping_confidence_summary": {
    "max_confidence": 90
  },
  "translation_ambiguity_notes": [
    "Possible OCR noise in symbols (e.g., slashes/backslashes/exponents)."
  ]
}
```

## Steps
1. **Extract skills**: List mathematical skill(s) in `skills_modern_terms[]` using modern terminology.
2. **Map to CCSSM**: For each skill, add to `ccssm_mappings[]`:
   - `code`: CCSSM standard (e.g., "7.NS.A", "HSN-Q★")
   - `rationale`: Why this standard applies
   - `confidence`: 0-100 score
3. **Summarize confidence**: Set `mapping_confidence_summary.max_confidence` to highest confidence.
4. **Note ambiguities**: Add OCR/translation issues to `translation_ambiguity_notes[]`.
5. **Review gate**: Set `reviewed=false` until human review.

## Confidence guidelines
| Score | Meaning |
|-------|---------|
| 90-100 | Clear, direct match to CCSSM standard |
| 70-89 | Strong match with minor interpretation |
| 50-69 | Moderate match, requires context |
| <50 | Weak match, flag for review |

## Outputs
- Mapping records matching batch JSON structure
- Items with `confidence < 70` flagged for manual review


