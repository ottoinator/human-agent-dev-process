# Quality Gates

Quality gates are decision points. They keep the work honest and proportional to
risk.

[docs/process/lifecycle.md](lifecycle.md) decides which gates a tier requires.

## Gate Result Format

Every gate that runs reports one result block. The format is stable so results
stay greppable, reviewable, and cheap to hand to the next agent or session.

```yaml
gate: qa
tier: 2
result: pass
evidence_type: automated-test
evidence: docker compose run --rm qa
owner_questions: []
residual_risk: none
```

Required fields:

- `gate`: `discovery`, `product`, `research-and-reference`, `architecture`,
  `qa`, `security-privacy`, `critic`, or `claim-integrity`.
- `tier`: `0`, `1`, `2`, or `3`.
- `result`: `pass`, `fail`, or `blocked`.
- `evidence_type`: a label from
  [docs/reference/validation-model.md](../reference/validation-model.md).
- `evidence`: the command, artifact, file, or review that supports the result.

Optional fields:

- `verdict`: the gate's own verdict vocabulary, such as the critic verdicts.
- `owner_questions`: decisions the agent must not make alone.
- `required_changes`: what must happen before the result can become `pass`.
- `residual_risk`: what stays unresolved.

Rules:

- A gate that did not run has no result block. Do not invent one.
- `blocked` is not `pass`. Never report a skipped or unavailable check as
  passing.
- `evidence_type` must match what actually ran. A reduced check set is
  `automated-test-partial`, not `automated-test`.

Use [templates/agent/GATE_RESULT.md](../../templates/agent/GATE_RESULT.md) as
the copyable form.

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

For this repository, canonical QA is Docker:

```bash
docker compose run --rm qa
```

A full run in that image is `automated-test` evidence and can satisfy the
release gate.

### When Docker Is Unavailable

Docker is missing in many agent runtimes. Reporting nothing is worse than
reporting a bounded result, so run the host fallback instead:

```bash
bash scripts/qa-host.sh
```

The fallback runs every check whose tool is present, names the checks it
skipped, and reports `automated-test-partial`. Rules:

- Report it as `automated-test-partial`, never as `automated-test`.
- State which checks were skipped and why.
- The release gate stays unsatisfied until Docker QA runs.

If neither Docker nor the fallback can run, the QA gate result is `blocked`.

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

Use whenever the work makes or changes a quality claim.

For every major quality claim, define:

- Claim.
- Meaning in this project.
- Evidence.
- Evidence type.
- Non-acceptable substitutes.
- Reviewer perspective.

If evidence is missing, weaken the claim or mark it as missing.
