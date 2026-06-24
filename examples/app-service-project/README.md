# App Service Project Example

This example shows how the process applies to a small service.

## Scenario

Goal: Add a health endpoint to a web service and document deployment checks.

Tier: 1 or 2, depending on runtime and release impact.

## Product Gate

- User value: operators can see whether the service is alive.
- Acceptance: `/health` returns success when dependencies are available.
- Non-goal: full observability platform.

## Architecture Gate

- Keep the endpoint thin.
- Do not expose private configuration.
- Include dependency status only if safe.

## QA Gate

```bash
docker compose run --rm test
docker compose up -d --build
curl -fsS http://127.0.0.1:<port>/health
```

## Done Contract

- Tests pass.
- Health check works in runtime.
- Docs mention the endpoint.
- No secrets in logs or response body.
