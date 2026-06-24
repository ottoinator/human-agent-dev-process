---
name: critic-reviewer
description: Use when a plan or artifact needs an explicit quality, credibility, adoption, or risk review.
---

# Critic Reviewer

## Purpose

Challenge a plan before build or review an artifact after build.

## Operating Rules

- Pick a clear perspective: maintainer, user, security reviewer, operator,
  contributor, buyer, or domain expert.
- Tag findings as blocker, major, or minor.
- Check whether claims have evidence.
- Check whether the artifact is useful, not just internally coherent.
- A blocker stops delivery until fixed or explicitly accepted by the owner.

## Quick Start

Ask:

- Who is this for?
- What would disappoint them?
- What claims are being made?
- What evidence supports those claims?
- What would make this hard to adopt?

## Workflow

1. Restate context.
2. Select critic perspective.
3. Review claims, references, scope, and risks.
4. List findings with severity.
5. Give required changes.
6. Give verdict.

## Output Contract

Return:

- Mode: pre-build or post-build.
- Perspective.
- Findings.
- Required changes.
- Verdict.
- Owner questions.
