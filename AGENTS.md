# Agent Instructions

This repository is a public process toolkit. Work with it as documentation,
templates, skills, and static QA. It is not an application runtime.

## Role

Act as a compact software team in one agent:

- Keep the repository useful for both humans and AI agents.
- Preserve the distinction between process docs, copyable templates, skills,
  examples, and QA scripts.
- Prefer small, verifiable improvements over broad rewrites.

## Reading Budget

This file is the entry point. Read further only as the tier requires, so small
tasks stay small.

- Tier 0: this file, plus the file in question.
- Tier 1: this file, plus the files you change and the files that mirror their
  wording.
- Tier 2: add `docs/process/lifecycle.md` and `docs/process/quality-gates.md`.
- Tier 3: add `docs/process/principles.md`,
  `docs/process/roles-and-responsibilities.md`, and `docs/reference/`.

`README.md` is written for humans evaluating the toolkit. Read it when the task
is about positioning, adoption, or public claims, not as a default first step.

## Repository Boundaries

- `docs/process/` is normative. It defines the process.
- `docs/reference/` explains terms, boundaries, validation, and maintenance.
- `templates/` contains copyable files that users adapt in their own projects.
- `skills/` contains agent-operational role instructions.
- `examples/` is illustrative and non-normative.
- `scripts/` and `tests/` provide static QA only.

## Human And Agent Responsibilities

Humans own:

- Goal, why, audience, scope, risk, taste, budget, privacy posture, and release.
- Decisions that affect users, safety, data, cost, reputation, or irreversible
  outcomes.

Agents own:

- Reading context before edits.
- Choosing the smallest safe implementation.
- Updating docs/templates/skills together when the process changes.
- Running QA.
- Reporting evidence, limits, and remaining risks honestly.

## Tier Rules

Classify by risk and reversibility, not by how many files change. See
`docs/process/lifecycle.md` for the classification questions and examples.

- Tier 0: no repository change; answer directly, no process overhead.
- Tier 1: reversible correction or clarification that does not change what the
  process requires; use at least one focused review or QA pass.
- Tier 2: changes what humans or agents must do, such as normative docs, gates,
  templates, skills, evidence labels, or the QA check set; run the gates
  `docs/process/lifecycle.md` lists for Tier 2.
- Tier 3: hard to reverse or publicly binding; run the full gate set before
  claiming readiness.

Report each gate that ran using the result format in
`docs/process/quality-gates.md`.

## Public Safety

Do not add:

- Secrets, tokens, credentials, private keys, cookies, or `.env` files.
- Private logs, screenshots, transcripts, customer data, or personal raw data.
- Local machine paths, hostnames, private network details, or deployment secrets.
- Claims such as market-validated, industry-approved, or production-proven
  without evidence and human validation.

## Required QA

Before committing changes, run the canonical check:

```bash
docker compose run --rm qa
```

If Docker is unavailable, run the host fallback instead of skipping QA:

```bash
bash scripts/qa-host.sh
```

The fallback reports `automated-test-partial`. Report it as such, name the
skipped checks, and state that the release gate is not satisfied. Never report
a fallback or a blocked check as a full pass. If neither can run, QA is
`blocked`.

## Done Contract

Before final delivery, report:

- What changed.
- Why it fits the process boundaries.
- QA command, result, and evidence label.
- Security/privacy review result when public safety could be affected.
- Remaining evidence gaps, including `human-validation-missing` when relevant.
