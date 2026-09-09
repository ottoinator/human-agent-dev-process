# Docs Toolkit QA

Recommended checks:

- Repository tree assertions.
- Markdown lint.
- Internal link and anchor check.
- Secret pattern scan.
- Process consistency check: gate routing, skill contracts, tier coverage, and
  evidence label agreement.
- Shell script syntax.
- GitHub workflow YAML sanity.
- Example smoke review.

External links can be checked on a scheduled job to avoid flaky pull requests.

Keep a host fallback for the checks that need no container, so agents running
without Docker can still produce partial evidence instead of nothing.
