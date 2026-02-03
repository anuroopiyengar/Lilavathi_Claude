# TDD Workflow for Flutter (Minimal)

## Purpose
Add just enough tests to keep the app stable without slowing a solo builder.

## Steps
1. For model parsing: write unit tests first.
2. For controller logic: test state transitions.
3. For key screens: add 1 widget test for rendering success + error.
4. Run `flutter test` locally and in CI.

## Outputs
- Unit tests for models/services
- Widget tests for key screens


