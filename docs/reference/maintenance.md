# Maintenance

## Change Process

1. Identify which boundary changes: docs, templates, skills, examples, or QA.
2. Update related files together.
3. Run Docker QA.
4. Review public safety.
5. Keep claims aligned with evidence.

## Drift Checks

When a process concept changes, check:

- `README.md`
- `AGENTS.md`
- `docs/process/`
- `templates/`
- `skills/`
- `examples/`

The same idea should not mean different things in different locations.

## Release Notes

Use [CHANGELOG.md](../../CHANGELOG.md) for notable public changes.
