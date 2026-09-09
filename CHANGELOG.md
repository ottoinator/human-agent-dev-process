# Changelog

## Unreleased

- Added `automated-test-partial` evidence label and `scripts/qa-host.sh`, so
  agents without Docker report bounded evidence instead of a blocked gate.
- Made the agent reading budget tier-conditional in `AGENTS.md` instead of a
  fixed four-file read order.
- Added a machine-readable gate result format and
  `templates/agent/GATE_RESULT.md`.
- Added `tests/check-process-consistency.mjs`, which enforces gate routing,
  skill contracts, tier coverage, and evidence label agreement.
- Routed the Claim Integrity Gate from the lifecycle; it was defined but
  unreachable.
- Reclassified the Tier 1/Tier 2 boundary by risk and reversibility instead of
  file count.
- Initial public V1 with docs, templates, skills, examples, and Docker QA.
