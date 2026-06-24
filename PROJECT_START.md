# Project Start

## Classification

- Tier: 3
- Project intent: public product / learning infrastructure
- Repository: `ottoinator/human-agent-dev-process`
- Visibility: public
- Runtime: not applicable; docs-first repository
- QA: Docker-only static checks

## Goal

Create a public GitHub repository that provides an adaptable software
development process for humans and AI agents, including documentation, skills,
templates, examples, and reproducible QA.

## Why Now

AI-assisted development benefits from clearer owner decisions, stronger done
criteria, and evidence-based reporting. This repository turns a working private
process into a public-safe toolkit that others can inspect and adapt.

## Users

- Developers using AI coding agents.
- Small teams trying to coordinate humans and agents.
- Open source maintainers who want agent-readable contribution rules.
- Agent builders looking for reusable skill and gate patterns.

## Success Signal

A first-time reader can understand the purpose, copy the minimal adoption files,
and run the QA harness within five minutes.

## Quality Bar

Polished public V1. It should be clear, useful, copyable, and Docker-checked.
It does not claim human, community, market, or industry validation.

## Scope

- README and repository map.
- Normative process documentation.
- Public-safe `AGENTS.md`.
- Copyable project, agent, and GitHub templates.
- Skill contracts for process, QA, and critic roles.
- Example flows.
- Docker-only QA harness and CI.
- MIT license for code/templates and CC BY 4.0 for docs.

## Non-Goals

- No application runtime.
- No docs site.
- No private process backup.
- No private paths, logs, secrets, or runtime runbooks.
- No claim that the process is universally optimal.

## Research Gate

- Problem: humans and agents need shared intent, stop conditions, and evidence.
- Market/alternatives: GitHub community files, PR templates, AGENTS.md patterns,
  and AI coding workflow documents provide useful conventions.
- GitHub/Open Source: public repos should expose README, license, security,
  contributing, issue templates, PR template, CI, and clear boundaries.
- Design/reference UX: docs-first repository, no visual UI. First viewport is
  the README quickstart.

## Subagent Plan

Completed before build:

- Research/reference pass: local/private source boundary and public references.
- Product pass: user value, scope, claims, AI-only validation.
- Architecture pass: docs-first toolkit, no runtime service.
- QA/Critic pass: Docker QA, public credibility risks, V1 acceptance criteria.

## Critic Response

- Target audience clarified in README.
- Docker-only QA added.
- Templates, skills, and examples included.
- Human-vs-agent responsibility documented.
- Public safety and privacy boundaries documented.
- Active GitHub Actions workflow deferred because the available GitHub token did
  not have workflow write scope; workflow is provided as a template.

## Evidence Plan

- `automated-test`: `docker compose run --rm qa`
- `reference-comparison`: GitHub community files and AGENTS.md conventions
- `ai-review`: synthetic product, architecture, QA, critic, and research passes
- `human-validation-missing`: no external public user validation yet

## Allow Build

`allow_build: true`
