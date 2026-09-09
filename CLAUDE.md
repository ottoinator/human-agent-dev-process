@AGENTS.md

## Claude Code

- `AGENTS.md` is the canonical agent instruction file. This adapter only makes
  it loadable by Claude Code and adds no rules of its own.
- Markdown instructions are advisory context. Hard prohibitions require
  permissions, hooks, or code.
- Run QA through Docker as described in the policy above. If Docker cannot
  run, report QA as blocked rather than substituting host checks.
