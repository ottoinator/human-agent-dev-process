import fs from "node:fs";
import path from "node:path";

const required = [
  "README.md",
  "AGENTS.md",
  "PROJECT_START.md",
  "LICENSE",
  "LICENSE-DOCS.md",
  "CONTRIBUTING.md",
  "CODE_OF_CONDUCT.md",
  "SECURITY.md",
  "SUPPORT.md",
  "GOVERNANCE.md",
  "CHANGELOG.md",
  "docs/process/principles.md",
  "docs/process/lifecycle.md",
  "docs/process/quality-gates.md",
  "docs/reference/public-safety.md",
  "templates/project/AGENTS.md",
  "templates/project/PROJECT_START.md",
  "templates/project/RELEASE_CHECKLIST.md",
  "templates/agent/TASK_BRIEF.md",
  "skills/human-agent-process/SKILL.md",
  "skills/qa-engineer/SKILL.md",
  "skills/critic-reviewer/SKILL.md",
  "examples/minimal-adoption/README.md",
  "docker-compose.yml",
  "qa/Dockerfile",
  "scripts/qa.sh",
  "templates/github/qa-workflow.yml",
];

const forbidden = [
  ".env",
  "node_modules",
  ".DS_Store",
];

let failed = false;

for (const file of required) {
  if (!fs.existsSync(file)) {
    console.error(`missing required path: ${file}`);
    failed = true;
  }
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    const rel = path.relative(process.cwd(), full);
    if (rel.startsWith(".git")) continue;
    if (forbidden.some((item) => rel === item || rel.startsWith(`${item}/`))) {
      console.error(`forbidden path present: ${rel}`);
      failed = true;
    }
    if (entry.isDirectory()) walk(full);
  }
}

walk(process.cwd());

if (failed) process.exit(1);
