# Flutter rules (solo-builder friendly)

## Quality gates (always)
- Run `flutter analyze` and fix analyzer issues.
- Run `flutter test` for any new logic you add.

## Architecture bias
- Start simple: feature folders + service layer.
- Prefer *composition* over excessive abstractions.
- Keep UI code declarative and dumb; put logic in controllers/services.

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
