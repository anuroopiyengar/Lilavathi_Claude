# GROQ query snippets (MVP)

## New queries (batch JSON structure)

### 1) List problems by confidence threshold
```groq
*[_type == "problem" && mapping_confidence_summary.max_confidence >= $minConfidence]
| order(mapping_confidence_summary.max_confidence desc) {
  excerpt_id,
  excerpt_text_short,
  skills_modern_terms,
  "max_confidence": mapping_confidence_summary.max_confidence,
  ccssm_mappings[]{code, confidence},
  reviewed
}
```

### 2) Fetch a single problem by excerpt_id
```groq
*[_type == "problem" && excerpt_id == $excerptId][0]{
  excerpt_id,
  excerpt_text_short,
  source,
  skills_modern_terms,
  ccssm_mappings[]{code, rationale, confidence},
  mapping_confidence_summary,
  translation_ambiguity_notes,
  extraction_quality,
  // Include enriched content if available
  prompt,
  hint,
  solutionSteps,
  answer,
  reviewed
}
```

### 3) Fetch problems by CCSSM code
```groq
*[_type == "problem" && $code in ccssm_mappings[].code]{
  excerpt_id,
  excerpt_text_short,
  "matched_mapping": ccssm_mappings[code == $code][0]{
    code, rationale, confidence
  },
  skills_modern_terms,
  reviewed
} | order(matched_mapping.confidence desc)
```

### 4) List problems needing review (confidence < 70)
```groq
*[_type == "problem" && mapping_confidence_summary.max_confidence < 70 && !reviewed]{
  excerpt_id,
  excerpt_text_short,
  "max_confidence": mapping_confidence_summary.max_confidence,
  translation_ambiguity_notes,
  ccssm_mappings[]{code, confidence}
} | order(mapping_confidence_summary.max_confidence asc)
```

### 5) Get all CCSSM codes with problem counts
```groq
{
  "codes": *[_type == "problem"].ccssm_mappings[].code | unique,
  "by_code": *[_type == "problem"]{
    "codes": ccssm_mappings[].code
  }
}
```

---

## Legacy queries (for migration period)

### List problems by chapter (legacy)
```groq
*[_type == "problem" && chapterNumber == $chapter] | order(verseId asc) {
  chapterNumber,
  verseId,
  prompt,
  difficulty,
  tags
}
```

### Fetch a single problem by chapter + verseId (legacy)
```groq
*[_type == "problem" && chapterNumber == $chapter && verseId == $verseId][0]{
  chapterNumber,
  verseId,
  prompt,
  hint,
  solutionSteps,
  answer,
  reviewed
}
```
