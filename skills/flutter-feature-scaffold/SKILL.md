# Flutter Feature Scaffold

## Purpose
Create a consistent feature folder with UI, state, services, and tests, optimized for a solo builder.

## Reference
- Design system: `templates/flutter/UI_design.md`
- Screen mockups: `templates/flutter/UI_Screen_mockups.md`

## Steps
1. Create `lib/features/<feature>/` with:
   - `view/` (widgets/screens)
   - `state/` (controller/bloc/provider)
   - `data/` (models + repository)
2. Add routing entry (or navigator integration).
3. Add basic unit tests for model parsing and controller logic.
4. Run `flutter analyze` and `flutter test`.

## Design system components
Use these shared components from `lib/shared/components/`:

| Component | Variants | Usage |
|-----------|----------|-------|
| `PrimaryButton` | primary/secondary/tertiary | CTAs, form submits |
| `VerseCard` | locked/in-progress/completed | Chapter/verse lists |
| `TagChip` | selected/unselected/disabled | CCSSM tags, filters |
| `ProgressRing` | with percentage | Mastery display |
| `XPBar` | animated | XP progress |
| `InputField` | normal/error/success | Solve screen answers |
| `ModalSheet` | standard | Hints, confirmations |
| `EmptyState` | with icon + CTA | Empty lists |
| `Toast` | info/success/error | Feedback messages |
| `SkeletonLoader` | card/list/text | Loading states |

## Design constraints
- 8pt spacing grid (margins, padding, gaps)
- Tap targets ≥44px height
- AA contrast minimum
- All components need states: default/pressed/disabled/error/success

## Outputs
- A file tree for the feature
- New UI screen(s) with loading/empty/error
- Repository/service to fetch content
- Tests

## Tips
- Keep the first iteration lean; add abstractions only after 2+ features repeat.

