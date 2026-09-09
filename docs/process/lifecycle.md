# Lifecycle

The lifecycle keeps work proportional to risk.

## How To Classify A Tier

Classify by risk and reversibility, not by how many files change.

Ask in order:

1. Does the change alter what someone else must do — normative process docs,
   copyable templates, skills, gates, or the QA check set? If yes, it is at
   least Tier 2.
2. Is the change hard to reverse or publicly binding — repository structure,
   licensing, release, a new public claim, or a new product? If yes, it is
   Tier 3.
3. Otherwise, is it a reversible change to existing content? Tier 1.
4. No repository change at all? Tier 0.

File count is not a tier signal. One clarification that touches a doc, a
template, and a skill together is still Tier 1, because updating mirrored
wording is the required way to make a small change without creating drift. A
single-file edit that changes what the process requires is Tier 2.

## Tier 0: Mini Task

Use for direct answers, one-off commands, or edits with no behavioural or
normative effect.

Reading budget: `AGENTS.md` only, plus the file in question.

Expected behavior:

- Answer directly.
- Avoid unnecessary process.
- Mention uncertainty when relevant.

Examples in this repository: answering which file defines the tier model;
running QA and reporting the result; fixing a typo.

## Tier 1: Small Change

Use for reversible changes that clarify or correct existing content without
changing what the process requires.

Reading budget: `AGENTS.md`, plus the files being changed and the files that
mirror their wording.

Expected behavior:

- Read the relevant local context.
- Define the acceptance check.
- Use at least one focused QA, review, security, or domain pass when risk
  warrants it.
- Run the smallest relevant verification.

Examples in this repository: fixing a broken internal link; adding a missing
term to the terminology reference; correcting an example command in the two
places that mirror it.

## Tier 2: Substantial Change

Use for changes that alter what humans or agents must do: normative process
docs, gates, the tier model, copyable templates, skills, evidence labels, or
the QA check set.

Reading budget: `AGENTS.md`, `docs/process/lifecycle.md`,
`docs/process/quality-gates.md`, plus the affected boundary.

Expected gates:

- Product Gate.
- Research And Reference Gate, when the change introduces a new convention or
  a public claim.
- Architecture Gate, when structure, boundaries, or contracts move.
- QA Gate.
- Critic Gate.
- Security Privacy Gate, when data, auth, logs, or side effects exist.
- Claim Integrity Gate, when the change makes or changes a quality claim.

Examples in this repository: adding an evidence label; changing the QA check
set; adding or retiring a gate; changing a template that users copy; adding a
skill.

## Tier 3: New Product Or Hard-To-Reverse Work

Use for new repositories, new products, public releases, major rewrites, large
architecture decisions, licensing changes, and public process claims.

Reading budget: the full `docs/process/` set plus `docs/reference/`.

Expected gates:

- Discovery Gate.
- Project intent context.
- Research And Reference Gate across problem, alternatives, implementation
  patterns, and references.
- Product Gate.
- Architecture Gate.
- QA Gate.
- Critic Gate.
- Security Privacy Gate.
- Claim Integrity Gate.
- Post-build review.
- Honest claim and evidence report.

## Lifecycle Loop

1. Understand goal, why, user, success signal, quality bar, and constraints.
2. Classify the tier.
3. Gather context to the tier's reading budget.
4. Run the gates required by tier and risk.
5. Ask the owner about decisions the agent should not make.
6. Implement the smallest coherent slice.
7. Verify with evidence that matches the claims.
8. Review for regressions, safety, usability, and maintainability.
9. Document changed behavior or operation.
10. Deliver with evidence, limits, and next action if needed.
