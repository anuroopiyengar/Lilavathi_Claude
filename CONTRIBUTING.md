# Contributing to Lilavathi Claude

Guidelines for contributing agents, skills, commands, and rules to the Lilavathi Claude framework.

## What We're Looking For

### Agents
Specialized personas that handle specific tasks:
- Security review, code review, planning
- Domain-specific expertise (Flutter, Sanity, etc.)
- Workflow automation

### Skills
Reusable capabilities that can be invoked:
- File generation, code transformation
- Analysis and reporting
- Integration with external tools

### Rules
Project-wide guidelines enforced across all work:
- Coding standards, testing requirements
- Security policies, workflow rules
- Tech stack constraints

## How to Contribute

1. **Fork** the repository
2. **Create a branch**: `feat/add-new-agent-name`
3. **Add your file** following the conventions below
4. **Test** that your contribution works as expected
5. **Submit a PR** with a clear description

## File Naming Conventions

### Agents (`agents/`)
```
<purpose>-<role>.md
```
Examples: `security-reviewer.md`, `flutter-architect.md`, `tdd-guide.md`

### Rules (`rules/`)
```
<number>-<topic>_rules.md
```
- Numbers: 00-99 (use next available in tens: 00, 10, 20...)
- Examples: `50-security_rules.md`, `60-testing_rules.md`

### Skills (`skills/`)
```
<action>-<target>.md
```
Examples: `generate-model.md`, `review-pr.md`

## Format Specifications

### Agent Files
```yaml
---
name: <kebab-case-name>
description: <One line describing what this agent does>
---

You are a [role description].

## Reference specs
- [Links to relevant docs]

## [Main sections with checklists, workflows, or guidelines]

## Output
[Expected output format]
```

### Rule Files
```markdown
# <Topic> rules

## <Section> (mark MANDATORY if required)
- [ ] Checklist items
- Bullet points for guidelines

## Agent support
For [task], invoke: `agents/<relevant-agent>.md`
```

## Do's and Don'ts

### Do
- Keep content focused and actionable
- Reference existing lilavathi docs when relevant
- Include examples and templates
- Use checklists for verification
- Match the solo-builder philosophy (simple, practical)

### Don't
- Over-engineer or add unnecessary complexity
- Duplicate content from existing files
- Add features not explicitly needed
- Use jargon without explanation
- Create dependencies on external tools not in the stack

## Quality Checklist

Before submitting:
- [ ] YAML frontmatter is valid (for agents)
- [ ] File follows naming convention
- [ ] Content references existing docs where relevant
- [ ] Examples use Flutter/Dart/Sanity (our stack)
- [ ] Tone matches existing documentation
- [ ] No broken internal links

## Questions?

Open an issue if you're unsure about:
- Where a contribution should go
- Whether something is needed
- How to integrate with existing content
