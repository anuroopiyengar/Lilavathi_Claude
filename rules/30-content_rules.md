# Content rules (Līlāvatī + CCSSM mapping)

## Structure
- Problems should be addressable by:
  - `chapterNumber` (int)
  - `verseId` (string; keep original numbering format)
- Keep translation text separate from:
  - modernized statement
  - hint(s)
  - solution steps
  - final answer format

## CCSSM mapping
- Store mappings as:
  - `skills[]` (refs)
  - `ccssmCodes[]` (strings)
  - `confidence` (0–100)
  - `ambiguityNotes` (string)

## AI involvement
- AI may propose skills/mappings/hints, but any user-visible educational content must have a review flag.
