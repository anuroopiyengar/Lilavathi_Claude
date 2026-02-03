# Flutter rules (solo-builder friendly)

## Quality gates (always)
- Run `flutter analyze` and fix analyzer issues.
- Run `flutter test` for any new logic you add.

## Architecture bias
- Start simple: feature folders + service layer.
- Prefer *composition* over excessive abstractions.
- Keep UI code declarative and dumb; put logic in controllers/services.
- Use 4-tab bottom navigation: Learn, Practice, Progress, Settings.

## Design system constraints
- **8pt spacing grid**: all margins, padding, gaps must be multiples of 8
- **Tap targets**: minimum 44px height for all interactive elements
- **Contrast**: AA minimum (4.5:1 for normal text, 3:1 for large text)
- **Typography**: readable sans for UI; optional serif accent only for verse titles
- **Component states**: every interactive component needs default/pressed/disabled/error/success

## State management
- Default recommendation: choose **one** approach early and stick to it.
  - If undecided, start with `flutter_bloc` OR `riverpod`—but keep wrappers minimal.
- Avoid mixing multiple state systems.

## Data modeling
- Use plain Dart models first.
- Only introduce codegen (`freezed`, `json_serializable`) if/when it clearly reduces bugs.

## Performance
- Cache network reads that back content screens.
- Avoid rebuilding heavy widgets; use const constructors where possible.

## UX
- Always include loading, empty, and error states.
- Keep offline-first in mind for content reading (cache is enough for v1).

## Core components (must implement)
- Buttons (primary/secondary/tertiary)
- Verse card (locked/in-progress/completed)
- Tag chips (selected/unselected/disabled)
- Progress ring + XP bar
- Bottom navigation (4 tabs)
- Input field (normal/error/success)
- Modal sheet, Empty state, Toast/snackbar, Loading skeleton
