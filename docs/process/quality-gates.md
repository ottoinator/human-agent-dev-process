# Quality Gates

Quality gates are decision points. They keep the work honest and proportional to
risk.

## Discovery Gate

Use before Tier 1+ implementation, and always before Tier 3 work.

Capture:

- Tier and trigger reason.
- Project intent.
- Goal, why, user, success signal, quality bar.
- Scope and non-goals.
- Disappointment risk.
- Data, privacy, outbound, cost, deployment, and maintenance risks.
- Required roles or subagents.
- Owner questions.
- `allow_build`.

## Product Gate

Use for work that affects users, workflows, rollout, data, risk, or acceptance.

Capture:

- User value.
- Scope and non-goals.
- Acceptance criteria.
- Risks.
- AI-only validation plan.
- Owner questions.

## Research And Reference Gate

Use for Tier 2/3 decisions, public claims, domain work, or new products.

Cover:

- Problem understanding.
- Alternatives or market conventions.
- Implementation patterns.
- Design, documentation, or workflow references.
- Non-copy boundaries.

## Architecture Gate

Use when structure, state, data flow, dependencies, or runtime topology matters.

Capture:

- Decision.
- Alternatives.
- Boundaries.
- Contracts.
- Verification.
- Risks.

## QA Gate

Use for every implementation claim.

Capture:

- Commands.
- Coverage.
- Artifacts.
- Result: pass, fail, or blocked.
- Release gate.

For this repository, QA is Docker-only:

```bash
docker compose run --rm qa
```

## Security Privacy Gate

Use when public safety, secrets, private data, auth, logs, permissions, or
outbound actions matter.

Capture:

- Sensitive surfaces.
- Risks.
- Required fixes.
- Guardrails.
- Residual risk.

## Critic Gate

Use for Tier 2/3 work where credibility, usefulness, adoption, audience fit, or
quality matters.

Pre-build verdicts:

- `go`
- `revise-plan`
- `ask-owner`
- `block-build`

Post-build verdicts:

- `release-ready`
- `needs-pass`
- `prototype-only`
- `ai-ready`
- `ai-needs-pass`

## Claim Integrity Gate

For every major quality claim, define:

- Claim.
- Meaning in this project.
- Evidence.
- Evidence type.
- Non-acceptable substitutes.
- Reviewer perspective.

If evidence is missing, weaken the claim or mark it as missing.
