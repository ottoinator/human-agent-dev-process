# Contributing

Thanks for helping improve the Human-Agent Development Process.

## Good Contributions

- Clearer process docs.
- Better copyable templates.
- Stronger skill contracts.
- More realistic examples.
- QA checks that catch public safety, link, structure, or documentation issues.

## Before You Open A Pull Request

1. Keep the change scoped.
2. Update docs, templates, skills, and examples together when a process concept
   changes across boundaries.
3. Run:

   ```bash
   docker compose run --rm qa
   ```

   If Docker is unavailable, run `bash scripts/qa-host.sh` and say in the pull
   request which checks were skipped.

4. Avoid private examples, private paths, logs, screenshots, credentials, or
   organization-specific assumptions.

## Claim Integrity

Do not add claims such as "production-ready", "market validated", "secure",
"enterprise-ready", or "industry standard" unless the pull request also adds
the evidence that supports the claim.

Use modest labels when evidence is limited:

- AI-only checked
- Docker-checked
- public feedback ready
- prototype
- human validation missing
