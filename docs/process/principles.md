# Principles

This process is built for collaboration between humans and AI agents.

## 1. Intent Before Implementation

Start by clarifying the goal, why it matters, who benefits, what success looks
like, and what would be disappointing even if code runs.

Agents should not replace owner decisions about product semantics, risk, taste,
privacy, cost, or release posture.

## 2. Scale Process With Risk

Tiny tasks should stay tiny. Large or hard-to-reverse work needs stronger
discovery, research, architecture, QA, and review.

The tier model prevents both extremes: process theater for small tasks and
reckless implementation for large tasks.

## 3. Separate Human Decisions From Agent Work

Humans decide direction and acceptable risk. Agents execute, verify, integrate,
document, and report.

When a decision changes user impact, safety, cost, privacy, scope, quality bar,
or irreversible operation, the agent should ask.

## 4. Claims Need Evidence

Do not claim work is robust, secure, polished, production-ready, or validated
unless evidence supports that claim.

Common evidence types:

- `runtime`: live service, health check, logs, screenshots, artifacts.
- `automated-test`: unit, integration, E2E, smoke, lint, static analysis.
- `automated-test-partial`: an automated check set that ran, but not in full
  or not in the canonical environment.
- `synthetic-data`: fixtures, generated cases, simulations, replay data.
- `reference-comparison`: comparison against standards, examples, docs, or
  product references.
- `ai-review`: synthetic reviewer, persona, domain, critic, or agent review.
- `human-validation-missing`: human, market, or expert validation is still
  absent.

## 5. Public Safety By Default

Public process material must avoid private data, secrets, local runtime details,
personal identities, and customer information.

Use abstracted patterns instead of copying private operational rules.

## 6. Done Means Integrated And Verified

Done is not "the code changed." Done means the relevant behavior, docs, tests,
evidence, review, and repository state are coherent.

For docs-only repositories, done means the content is readable, linked,
secret-free, structurally consistent, and useful to both humans and agents.
