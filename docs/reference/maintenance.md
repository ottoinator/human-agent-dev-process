# Maintenance

## Change Process

1. Identify which boundary changes: docs, templates, skills, examples, or QA.
2. Update related files together.
3. Run Docker QA, or the host fallback when Docker is unavailable.
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

`tests/check-process-consistency.mjs` enforces the drift checks that can be
automated: gate routing, skill contracts, tier coverage, and evidence label
agreement. The rest still needs a reading pass.

## Release Notes

Use [CHANGELOG.md](../../CHANGELOG.md) for notable public changes.
