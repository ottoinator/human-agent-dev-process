# Human-Agent Development Process

> **Superseded.** This repository covered the software flow only. Its
> successor, [ottoinator/human-agent-process](https://github.com/ottoinator/human-agent-process),
> carries the software **and** knowledge-work flows, the blast-radius rule for
> the critic gate, a memory layer, and an installable Claude Code setup. Use
> that one; this repo stays online for reference and is no longer maintained.

A practical software development process for humans and AI agents working
together.

This repository is a public, adaptable toolkit for teams and solo builders who
want AI-assisted development to be clearer, safer, and easier to verify. It
turns vague prompts into structured work: intent, tiers, gates, roles, QA,
reviews, evidence, and a done contract.

## Who It Is For

- Solo developers using AI coding agents.
- Small teams that want a shared process without heavyweight project management.
- Open source maintainers who want agent-friendly contribution rules.
- Agent builders who need reusable role, gate, and review patterns.

## Quick Start

For an existing repository:

1. Copy [templates/project/AGENTS.md](templates/project/AGENTS.md) into your
   project root.
2. Copy [templates/project/PROJECT_START.md](templates/project/PROJECT_START.md)
   when starting a new product, major feature, or large refactor.
3. Choose the task tier from
   [docs/process/lifecycle.md](docs/process/lifecycle.md).
4. Run the relevant gates from
   [docs/process/quality-gates.md](docs/process/quality-gates.md).
5. Use [templates/project/RELEASE_CHECKLIST.md](templates/project/RELEASE_CHECKLIST.md)
   before claiming the work is done.

For an agent:

1. Read [AGENTS.md](AGENTS.md) first.
2. Use the skill contracts in [skills/](skills/).
3. Produce evidence, not just summaries.
4. Stop for owner decisions where the process says humans own the decision.

## Repository Map

```text
docs/process/      Normative process model: principles, lifecycle, roles, gates.
docs/reference/    Supporting references: terms, boundaries, validation, upkeep.
templates/         Copyable project, agent, and GitHub templates.
skills/            Agent-operational skill contracts.
examples/          Non-normative examples for adoption and end-to-end flow.
scripts/           Thin QA wrappers. Process logic stays in docs.
tests/             Static repository assertions and safety checks.
qa/                Docker image for reproducible QA.
.github/           Community files, issue templates, and CI.
```

## Core Ideas

- Humans own goals, risk, scope, taste, ethics, cost, and release decisions.
- Agents own implementation, verification, integration, and honest reporting.
- Process should scale with task complexity, not make every task heavy.
- Claims require evidence: tests, runtime proof, screenshots, reviews, or logs.
- AI-only validation is useful, but it is not the same as human or market
  validation.
- Public repositories must be safe by default: no secrets, private logs,
  private runtime details, or accidental personal data.

## Task Tiers

- Tier 0: direct answer or tiny command.
- Tier 1: small local change or narrow bug fix.
- Tier 2: feature, workflow, user-facing, data, runtime, or multi-file change.
- Tier 3: new product, new public repository, major redesign, or hard-to-reverse
  decision.

See [docs/process/lifecycle.md](docs/process/lifecycle.md) for the full model.

## What Done Means

Work is done only when the relevant slice has:

- Clear owner intent or explicit assumptions.
- The right tier and gates for the risk.
- Scoped implementation.
- Tests or other evidence that match the claims.
- Security and privacy review where sensitive data or side effects exist.
- Documentation updated when behavior or operation changes.
- A final review that states remaining limits honestly.

## Validation Status

This repository is an initial, Docker-checked public V1. It is intended to be
useful and adaptable, not a universal standard.

Evidence labels used here:

- `automated-test`: Docker QA for markdown, links, structure, scripts, and
  secret patterns.
- `reference-comparison`: GitHub community file conventions and AGENTS.md
  patterns informed the structure.
- `ai-review`: synthetic product, architecture, QA, critic, and research passes.
- `human-validation-missing`: external user, maintainer, or market validation
  has not happened yet.

## QA

Run the same check locally and in CI:

```bash
docker compose run --rm qa
```

The QA harness checks repository structure, Markdown formatting, internal links,
basic secret patterns, and shell script syntax.

If your GitHub token has permission to write workflows, you can copy
[templates/github/qa-workflow.yml](templates/github/qa-workflow.yml) to
`.github/workflows/qa.yml`.

## Licensing

- Code, scripts, and copyable templates are licensed under the MIT License. See
  [LICENSE](LICENSE).
- Documentation and process text are licensed under Creative Commons Attribution
  4.0 International. See [LICENSE-DOCS.md](LICENSE-DOCS.md).

## Status

This is public feedback material. It is ready to inspect, fork, adapt, and
improve. It does not claim to be market-validated, industry-approved, or
production-proven for every team.
