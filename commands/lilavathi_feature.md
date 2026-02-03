---
name: lilavathi_feature
description: Build a new Flutter feature end-to-end (UI + data client + caching + tests).
---

Agent: `flutter-implementer` with support from `flutter-architect`.

## Reference
- Screen mockups: `templates/flutter/UI_Screen_mockups.md`
- Design system: `templates/flutter/UI_design.md`

## Inputs (fill in)
- Feature name:
- User story:
- Screens (choose from 16 below):
- Data needed from Sanity (GROQ):
- Offline behavior (none / cache-read / full offline):

## Available screens (from UI_Screen_mockups.md)
| # | Screen | Tab | Key components |
|---|--------|-----|----------------|
| 1 | Splash | — | Logo, loading |
| 2-4 | Onboarding (3) | — | Carousel, progress dots |
| 5 | Sign in | — | Input fields, buttons |
| 6 | Choose Level + Daily Goal | — | Selection chips |
| 7 | Home (Today) | Learn | Progress ring, XP bar, verse cards |
| 8 | Learn Path | Learn | Chapter milestones |
| 9 | Chapter list (Library) | Library | Verse cards, filters |
| 10 | Verse Detail | — | Verse card, tag chips, actions |
| 11 | Solve Step-by-step | — | Input field, hint, check |
| 12 | Practice drill | Practice | Questions, timer, progress |
| 13 | Results + Mastery | — | XP earned, level update |
| 14 | Achievements | Profile | Achievement cards |
| 15 | Profile (student) | Profile | Stats, settings link |
| 16 | Parent Dashboard | Profile | Child progress, controls |
| 17 | Search + Filters | Library | Search bar, tag chips |
| 18 | Settings | Profile | Toggles, links |

## Task
1) Propose file tree under `lib/features/<feature>/...`
2) Implement UI with:
   - Design system components (8pt grid, 44px tap targets)
   - States: loading/empty/error + success
3) Implement Sanity client call + simple caching
4) Add unit tests for parsing + any business logic
5) Provide run steps and verification checklist

## Design system components to use
- `VerseCard` (locked/in-progress/completed)
- `TagChip` (selected/unselected/disabled)
- `ProgressRing`, `XPBar`
- `InputField` (normal/error/success)
- `ModalSheet`, `Toast`, `EmptyState`, `SkeletonLoader`

