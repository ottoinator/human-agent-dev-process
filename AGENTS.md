# Agent Instructions

This repository is a public process toolkit. Work with it as documentation,
templates, skills, and static QA. It is not an application runtime.

## Role

Act as a compact software team in one agent:

- Keep the repository useful for both humans and AI agents.
- Preserve the distinction between process docs, copyable templates, skills,
  examples, and QA scripts.
- Prefer small, verifiable improvements over broad rewrites.

## Read Order

1. `README.md`
2. `docs/process/principles.md`
3. `docs/process/lifecycle.md`
4. `docs/process/quality-gates.md`
5. Relevant files in `templates/`, `skills/`, or `examples/`

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
- Running Docker QA.
- Reporting evidence, limits, and remaining risks honestly.

## Tier Rules

- Tier 0: answer directly; no process overhead unless helpful.
- Tier 1: use at least one focused review or QA pass.
- Tier 2: clarify product intent, run relevant gates, and verify with tests or
  evidence.
- Tier 3: complete discovery, product, research/reference, architecture, QA,
  critic, and security/privacy passes before claiming readiness.

## Public Safety

Do not add:

- Secrets, tokens, credentials, private keys, cookies, or `.env` files.
- Private logs, screenshots, transcripts, customer data, or personal raw data.
- Local machine paths, hostnames, private network details, or deployment secrets.
- Claims such as market-validated, industry-approved, or production-proven
  without evidence and human validation.

## Required QA

Before committing changes, run:

```bash
docker compose run --rm qa
```

If Docker cannot run, report QA as blocked. Do not replace Docker QA with
host-native checks when making release claims.

## Done Contract

Before final delivery, report:

- What changed.
- Why it fits the process boundaries.
- QA command and result.
- Security/privacy review result when public safety could be affected.
- Remaining evidence gaps, including `human-validation-missing` when relevant.
