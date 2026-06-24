# Validation Model

This repository uses explicit evidence labels.

## Evidence Types

`automated-test`

: A deterministic or repeatable tool check, such as Docker QA, lint, link check,
structure assertion, or secret pattern scan.

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

## Claim Rules

- Use the weakest honest claim.
- Prefer "Docker-checked" over "production-ready" for this repository.
- Prefer "public feedback ready" over "validated" until external feedback
  exists.
- Keep evidence near the claim when possible.
