# Project Agent Instructions

Copy this file into a project root and adapt the placeholders.

## Project Context

- Project name: `<name>`
- Project intent: `<business | private | learning | internal tool | public product>`
- Primary users: `<users>`
- Quality bar: `<prototype | internal | polished slice | production | public-scale>`

## Working Rules

- Read local context before editing.
- Classify every task as Tier 0, 1, 2, or 3.
- Ask the owner before deciding goal, scope, user impact, safety, privacy, cost,
  release, or irreversible operations.
- Keep changes scoped.
- Prefer existing project patterns.
- Do not commit secrets, private data, logs, or generated noise.

## Reading Budget

This file is the entry point. Read further only as the tier requires.

- Tier 0: this file, plus the file in question.
- Tier 1: this file, plus the files you change.
- Tier 2: add `<architecture or module docs>`.
- Tier 3: add `<full docs set>`.

## Tier Guide

Classify by risk and reversibility, not by how many files change. A one-line
change to a public contract is Tier 2. A rename touching twenty files that
changes no behaviour is Tier 1.

Ask in order:

1. Does it change what someone else must rely on — public API, schema, config,
   user-visible behaviour, or team process? At least Tier 2.
2. Is it hard to reverse or publicly binding — migration, release, licensing,
   deletion, or a new product? Tier 3.
3. Otherwise a reversible change to existing code or docs? Tier 1.
4. No repository change? Tier 0.

Expected effort:

- Tier 0: direct answer or tiny command.
- Tier 1: define the acceptance check and run focused QA.
- Tier 2: run product, architecture, QA, and critic gates as relevant.
- Tier 3: run full discovery and validation.

## Required Checks

Project QA command:

```bash
<qa-command>
```

Fallback when the canonical command cannot run:

```bash
<fallback-command>
```

Report the fallback as partial evidence, name the checks it skipped, and state
that the release gate is not satisfied. If neither command can run, report QA as
blocked with the reason. Never report a blocked or partial check as a pass.

## Done Contract

Before final delivery, report:

- Result.
- Files changed.
- Verification command, result, and evidence label.
- Security/privacy review when relevant.
- Runtime or artifact proof when relevant.
- Remaining risks and evidence gaps.
