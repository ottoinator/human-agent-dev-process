#!/usr/bin/env bash
set -euo pipefail

echo "== repo tree =="
node tests/assert-repo-tree.mjs

echo "== markdownlint =="
markdownlint-cli2

echo "== prettier =="
prettier --check "**/*.{md,yml,yaml,json}" --ignore-path .gitignore

echo "== internal links =="
node tests/check-internal-links.mjs

echo "== secret patterns =="
node tests/check-secret-patterns.mjs

echo "== process consistency =="
node tests/check-process-consistency.mjs

echo "== shellcheck =="
shellcheck scripts/*.sh

echo "QA passed"

