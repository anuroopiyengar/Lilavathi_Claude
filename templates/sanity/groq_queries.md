# GROQ query snippets (MVP)

## 1) List problems by chapter
```groq
*[_type == "problem" && chapterNumber == $chapter] | order(verseId asc) {
  chapterNumber,
  verseId,
  prompt,
  difficulty,
  tags
}
```

## 2) Fetch a single problem by chapter + verseId
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

## 3) Fetch problems by CCSSM code (via mapping)
```groq
*[_type == "mapping" && $code in ccssmCodes]{
  confidence,
  problem->{
    chapterNumber, verseId, prompt
  },
  skills[]->{
    name, gradeBand
  }
} | order(confidence desc)
```
