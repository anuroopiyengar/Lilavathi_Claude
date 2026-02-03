# TDD Workflow for Flutter (Minimal)

## Purpose
Add just enough tests to keep the app stable without slowing a solo builder.

## Reference
- Screen mockups: `templates/flutter/UI_Screen_mockups.md`

## Steps
1. For model parsing: write unit tests first.
2. For controller logic: test state transitions.
3. For key screens: add 1 widget test for rendering success + error.
4. Run `flutter test` locally and in CI.

## Screen-specific test patterns

| Screen | Unit tests | Widget tests |
|--------|------------|--------------|
| Home (Today) | XP calculation, streak logic | Progress ring renders, verse cards display |
| Verse Detail | State transitions (locked→in-progress→completed) | Card states render correctly |
| Solve Step-by-step | Answer validation, hint reveal logic | Input field states, error/success feedback |
| Practice drill | Timer logic, score calculation | Question progression, results display |
| Results | Mastery level calculation, XP earned | Animations trigger, stats display |
| Profile | Achievement unlock logic | Stats render, achievements list |

## Model tests (batch JSON)
```dart
// Test parsing of batch JSON structure
test('Problem.fromJson parses batch format', () {
  final json = {
    'excerpt_id': '§33',
    'ccssm_mappings': [{'code': '7.NS.A', 'confidence': 90}],
    // ...
  };
  final problem = Problem.fromJson(json);
  expect(problem.excerptId, '§33');
  expect(problem.ccssmMappings.first.confidence, 90);
});
```

## Widget test template
```dart
testWidgets('VerseCard shows completed state', (tester) async {
  await tester.pumpWidget(
    MaterialApp(home: VerseCard(state: VerseState.completed)),
  );
  expect(find.byIcon(Icons.check_circle), findsOneWidget);
});
```

## Outputs
- Unit tests for models/services (especially batch JSON parsing)
- Widget tests for key screens (all 3 states: loading/empty/error + success)


