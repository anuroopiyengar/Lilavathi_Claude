# Sanity Schema Generation (Problem/Skill/Mapping)

## Purpose
Generate minimal Sanity schemas with stable identifiers and AI-review gating fields.

## Steps
1. Create schemas:
   - `problem`: chapterNumber, verseId, prompt, modernStatement, hint, solutionSteps, answer, difficulty, tags, reviewed
   - `skill`: name, description, gradeBand, ccssmCodes
   - `mapping`: problem ref, skills refs, ccssmCodes, confidence, ambiguityNotes, reviewed
2. Add basic validation (required fields, min/max).
3. Provide 3 GROQ queries for app needs.

## Outputs
- TypeScript schema files
- GROQ queries
- Sample docs


