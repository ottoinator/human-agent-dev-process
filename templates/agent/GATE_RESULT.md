# Gate Result

Copy one block per gate that actually ran. A gate that did not run has no block.

```yaml
gate: qa
tier: 2
result: pass
evidence_type: automated-test
evidence: docker compose run --rm qa
owner_questions: []
residual_risk: none
```

## Fields

Required:

- `gate`: `discovery`, `product`, `research-and-reference`, `architecture`,
  `qa`, `security-privacy`, `critic`, or `claim-integrity`.
- `tier`: `0`, `1`, `2`, or `3`.
- `result`: `pass`, `fail`, or `blocked`.
- `evidence_type`: the evidence label that matches what actually ran.
- `evidence`: the command, artifact, file, or review behind the result.

Optional:

- `verdict`: the gate's own verdict vocabulary.
- `owner_questions`: decisions the agent must not make alone.
- `required_changes`: what must happen before `result` can become `pass`.
- `residual_risk`: what stays unresolved.

## Examples

Partial QA in an environment without Docker:

```yaml
gate: qa
tier: 2
result: pass
evidence_type: automated-test-partial
evidence: bash scripts/qa-host.sh
required_changes: run docker compose run --rm qa before the release gate
residual_risk: markdownlint and shellcheck were skipped, tools unavailable
```

A gate that could not run:

```yaml
gate: security-privacy
tier: 3
result: blocked
evidence_type: human-validation-missing
evidence: no reviewer available
owner_questions:
  - who signs off on the public data boundary?
```

A critic gate using its own verdict vocabulary:

```yaml
gate: critic
tier: 3
result: fail
verdict: needs-pass
evidence_type: ai-review
evidence: post-build critic pass, maintainer perspective
required_changes: weaken the validation claim in README.md
```
