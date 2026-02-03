# Flutter Feature Scaffold

## Purpose
Create a consistent feature folder with UI, state, services, and tests, optimized for a solo builder.

## Steps
1. Create `lib/features/<feature>/` with:
   - `view/` (widgets/screens)
   - `state/` (controller/bloc/provider)
   - `data/` (models + repository)
2. Add routing entry (or navigator integration).
3. Add basic unit tests for model parsing and controller logic.
4. Run `flutter analyze` and `flutter test`.

## Outputs
- A file tree for the feature
- New UI screen(s) with loading/empty/error
- Repository/service to fetch content
- Tests

## Tips
- Keep the first iteration lean; add abstractions only after 2+ features repeat.

