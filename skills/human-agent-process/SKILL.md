---
name: human-agent-process
description: Use when planning, executing, reviewing, or delivering software work with a human owner and AI agent collaborators.
---

# Human-Agent Process

## Purpose

Apply a lightweight but evidence-driven software development process for humans
and AI agents working together.

## Operating Rules

- Classify task tier by risk and reversibility, not by how many files change.
- Read only as much context as the tier requires.
- Keep human owner decisions separate from agent execution.
- Ask before deciding goals, scope, risk, privacy, safety, cost, release, or
  irreversible changes.
- Scale gates with risk.
- Keep work scoped and evidence-based.
- Do not claim quality beyond available evidence.

## Quick Start

1. Restate goal, why, user, success signal, quality bar, and constraints.
2. Choose Tier 0, 1, 2, or 3.
3. Read to that tier's reading budget.
4. Run only the gates required by tier and risk.
5. Implement the smallest coherent slice.
6. Verify with tests, review, runtime proof, or artifacts.
7. Deliver result, evidence, limits, and next action.

## Workflow

1. Read the local agent instruction file.
2. Classify the tier and expand reading only if the tier demands it.
3. Identify owner decisions and open questions.
4. Choose roles or subagents for independent work.
5. Define acceptance criteria and evidence.
6. Implement.
7. Run QA, or the fallback when the canonical environment is unavailable.
8. Review for product fit, architecture, safety, and claim integrity.
9. Report honestly.

## Output Contract

Return:

- Tier and rationale.
- Owner questions or no-question reason.
- One gate result block per gate that ran, in the format defined by
  `docs/process/quality-gates.md`.
- Result.
- Verification and evidence label.
- Claim status.
- Remaining risks.
