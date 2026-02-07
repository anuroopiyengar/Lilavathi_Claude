# Git workflow rules

## Commit message format
Use conventional commits:
```
<type>(<scope>): <description>

[optional body]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `refactor`: Code change (no new feature or fix)
- `test`: Adding or updating tests
- `docs`: Documentation only
- `chore`: Maintenance (deps, config)

**Examples:**
```
feat(auth): add login screen with email validation
fix(verse): handle empty verse list gracefully
test(xp): add unit tests for XP calculation
```

## PR workflow
1. Create feature branch from `main`: `git checkout -b feat/feature-name`
2. Make small, focused commits
3. Run quality gates before pushing:
   ```bash
   flutter analyze
   flutter test
   ```
4. Push and create PR with clear description
5. Address review feedback
6. Squash merge to main

## Feature implementation workflow
1. **Plan**: Understand requirements, identify files to change
2. **Branch**: Create feature branch
3. **Test first**: Write failing tests (TDD)
4. **Implement**: Write minimal code to pass tests
5. **Refactor**: Clean up while tests pass
6. **Review**: Self-review, run analyzers
7. **PR**: Create pull request
8. **Merge**: Squash and merge after approval

## Branch naming
- Features: `feat/short-description`
- Fixes: `fix/issue-description`
- Refactors: `refactor/what-changed`

## Don'ts
- Don't commit directly to `main`
- Don't commit secrets or `.env` files
- Don't force push to shared branches
- Don't skip tests or analyzer
