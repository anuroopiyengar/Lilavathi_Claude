# Testing rules

## Coverage requirement (MANDATORY)
- **Target: 80% line coverage** for all new code
- Check coverage: `flutter test --coverage`
- View report: `genhtml coverage/lcov.info -o coverage/html`

## TDD workflow
1. **Write test first** - describe expected behavior
2. **Run test** - verify it fails (red)
3. **Write minimal code** - make test pass (green)
4. **Refactor** - clean up, tests still pass
5. **Repeat**

## Test types required

| Type | What to test | Location |
|------|--------------|----------|
| Unit | Business logic, services, models | `test/unit/` |
| Widget | UI components, interactions | `test/widget/` |
| Integration | Critical user flows | `integration_test/` |

## What to always test
- Calculations and business logic
- State transitions
- Error handling paths
- User input validation
- Edge cases (empty, null, boundaries)

## What NOT to test
- Generated code (freezed, json_serializable)
- Framework internals
- Simple getters/setters

## Quality gates
- `flutter test` must pass before commit
- `flutter analyze` must have no issues
- New features require corresponding tests

## Agent support
For TDD guidance and test planning, invoke: `agents/tdd-guide.md`
