# Minimal Adoption Example

Use this path when you want the smallest useful version of the process in an
existing repository.

## Files To Copy

```text
templates/project/AGENTS.md -> AGENTS.md
templates/project/PROJECT_START.md -> PROJECT_START.md
templates/project/RELEASE_CHECKLIST.md -> docs/RELEASE_CHECKLIST.md
```

## First Task

Prompt an agent:

```text
Read AGENTS.md and PROJECT_START.md. Classify this task, identify owner
questions, and propose the smallest verifiable implementation plan.
```

## Expected Outcome

The agent should:

- Name the tier.
- Ask only decisions it cannot safely make.
- Define acceptance criteria.
- Run the project QA command before final delivery.
