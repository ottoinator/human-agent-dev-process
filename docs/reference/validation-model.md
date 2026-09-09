# Validation Model

This repository uses explicit evidence labels.

## Evidence Types

`automated-test`

: A deterministic or repeatable tool check that ran in full, such as Docker QA,
lint, link check, structure assertion, or secret pattern scan.

`automated-test-partial`

: An automated check set that ran, but not in full or not in the canonical
environment. Use it when tools are missing, checks were skipped, or the run
happened outside the pinned QA image. It never satisfies a release gate on its
own.

`reference-comparison`

: Comparison against external docs, standards, conventions, repository patterns,
or product references.

`ai-review`

: Synthetic review by an AI role, persona, critic, maintainer, domain expert, or
agent.

`synthetic-data`

: Generated or anonymized examples, fixtures, simulations, or replay cases.

`runtime`

: Evidence from a running service or artifact, such as health check, logs,
screenshots, deployment status, or URL.

`human-validation-missing`

: A marker that real user, customer, maintainer, market, or expert validation is
absent.

## Partial Evidence Rules

Partial evidence is still evidence. Reporting it is better than reporting
nothing, as long as the gap is explicit.

When reporting `automated-test-partial`, always state:

- Which checks ran and passed.
- Which checks were skipped, and why.
- That the release gate is not satisfied.

Do not upgrade `automated-test-partial` to `automated-test` by rerunning the
same reduced check set. Only a full run in the canonical environment does that.

## Claim Rules

- Use the weakest honest claim.
- Prefer "Docker-checked" over "production-ready" for this repository.
- Prefer "public feedback ready" over "validated" until external feedback
  exists.
- Keep evidence near the claim when possible.
