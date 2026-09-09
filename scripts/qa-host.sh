#!/usr/bin/env bash
# Fallback QA for environments where Docker is unavailable.
# Runs every check whose tool is present and reports the result as
# automated-test-partial. It never satisfies a release gate.
set -uo pipefail

cd "$(dirname "$0")/.." || exit 1

ran=()
skipped=()
failed=()

have() {
  command -v "$1" >/dev/null 2>&1
}

run_check() {
  local name="$1"
  local tool="$2"
  shift 2

  if ! have "$tool"; then
    skipped+=("${name} (missing tool: ${tool})")
    return 0
  fi

  echo "== ${name} =="
  if "$@"; then
    ran+=("${name}")
  else
    failed+=("${name}")
  fi
}

print_list() {
  local label="$1"
  shift
  if [ "$#" -eq 0 ]; then
    return 0
  fi
  echo "${label}"
  local item
  for item in "$@"; do
    echo "  - ${item}"
  done
}

run_check "repo tree" node node tests/assert-repo-tree.mjs
run_check "markdownlint" markdownlint-cli2 markdownlint-cli2
run_check "prettier" prettier prettier --check "**/*.{md,yml,yaml,json}" --ignore-path .gitignore
run_check "internal links" node node tests/check-internal-links.mjs
run_check "secret patterns" node node tests/check-secret-patterns.mjs
run_check "process consistency" node node tests/check-process-consistency.mjs
run_check "shellcheck" shellcheck shellcheck scripts/qa.sh scripts/qa-host.sh

echo
echo "== host QA summary =="
print_list "passed:" "${ran[@]}"
print_list "skipped:" "${skipped[@]}"
print_list "failed:" "${failed[@]}"

if [ "${#skipped[@]}" -gt 0 ]; then
  echo "Install the missing tools to widen the fallback check set."
fi
echo

if [ "${#failed[@]}" -gt 0 ]; then
  echo "RESULT: fail"
  echo "EVIDENCE: automated-test-partial"
  echo "RELEASE GATE: not satisfied"
  exit 1
fi

echo "RESULT: pass (available checks only)"
echo "EVIDENCE: automated-test-partial"
echo "RELEASE GATE: not satisfied"
echo "Run 'docker compose run --rm qa' for automated-test evidence."
