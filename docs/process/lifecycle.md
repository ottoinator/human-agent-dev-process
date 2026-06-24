# Lifecycle

The lifecycle keeps work proportional to risk.

## Tier 0: Mini Task

Use for direct answers, one-off commands, or tiny edits with no meaningful
project impact.

Expected behavior:

- Answer directly.
- Avoid unnecessary process.
- Mention uncertainty when relevant.

## Tier 1: Small Change

Use for narrow bug fixes, small local edits, or low-risk documentation updates.

Expected behavior:

- Read the relevant local context.
- Define the acceptance check.
- Use at least one focused QA, review, security, or domain pass when risk
  warrants it.
- Run the smallest relevant verification.

## Tier 2: Substantial Change

Use for features, multi-file changes, user-facing behavior, data flow, workflows,
runtime behavior, or non-trivial documentation systems.

Expected gates:

- Product intent.
- Research or reference check.
- Architecture or boundary decision.
- QA plan.
- Critic review.
- Security/privacy review where data, auth, logs, or side effects exist.

## Tier 3: New Product Or Hard-To-Reverse Work

Use for new repositories, new products, public releases, major rewrites, large
architecture decisions, and public process claims.

Expected gates:

- Discovery gate.
- Project intent context.
- Research lanes: problem, alternatives, implementation patterns, references.
- Product gate.
- Architecture gate.
- QA gate.
- Critic gate.
- Security/privacy gate.
- Post-build review.
- Honest claim and evidence report.

## Lifecycle Loop

1. Understand goal, why, user, success signal, quality bar, and constraints.
2. Classify the tier.
3. Gather context and references.
4. Run the gates required by tier and risk.
5. Ask the owner about decisions the agent should not make.
6. Implement the smallest coherent slice.
7. Verify with evidence that matches the claims.
8. Review for regressions, safety, usability, and maintainability.
9. Document changed behavior or operation.
10. Deliver with evidence, limits, and next action if needed.
