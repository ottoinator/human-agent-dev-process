import fs from "node:fs";
import path from "node:path";

let failed = false;

function fail(message) {
  console.error(message);
  failed = true;
}

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function normalize(text) {
  return text.toLowerCase().replace(/[^a-z0-9]/g, "");
}

// 1. Every gate defined in quality-gates.md must be routed by lifecycle.md.
const gatesText = read("docs/process/quality-gates.md");
const lifecycleText = read("docs/process/lifecycle.md");
const normalizedLifecycle = normalize(lifecycleText);
const definedGates = [];

for (const line of gatesText.split(/\r?\n/)) {
  const match = line.match(/^##\s+(.*Gate)\s*$/);
  if (match) definedGates.push(match[1]);
}

if (definedGates.length === 0) {
  fail("no gates found in docs/process/quality-gates.md");
}

for (const gate of definedGates) {
  if (!normalizedLifecycle.includes(normalize(gate))) {
    fail(`gate defined but not routed by docs/process/lifecycle.md: ${gate}`);
  }
}

// 2. Every skill must expose the operational contract agents rely on.
const requiredSkillSections = [
  "## Purpose",
  "## Operating Rules",
  "## Workflow",
  "## Output Contract",
];

const skillsDir = "skills";
for (const entry of fs.readdirSync(skillsDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const skillFile = path.join(skillsDir, entry.name, "SKILL.md");

  if (!fs.existsSync(skillFile)) {
    fail(`missing skill file: ${skillFile}`);
    continue;
  }

  const text = read(skillFile);
  const frontmatter = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);

  if (!frontmatter) {
    fail(`${skillFile} has no frontmatter block`);
  } else {
    const nameMatch = frontmatter[1].match(/^name:\s*(.+)$/m);
    const descriptionMatch = frontmatter[1].match(/^description:\s*(.+)$/m);

    if (!nameMatch) {
      fail(`${skillFile} frontmatter has no name`);
    } else if (nameMatch[1].trim() !== entry.name) {
      fail(`${skillFile} frontmatter name "${nameMatch[1].trim()}" does not match directory "${entry.name}"`);
    }

    if (!descriptionMatch) fail(`${skillFile} frontmatter has no description`);
  }

  for (const section of requiredSkillSections) {
    if (!text.includes(`${section}\n`)) {
      fail(`${skillFile} is missing section: ${section}`);
    }
  }
}

// 3. Files that publish the tier model must publish all four tiers.
const tierFiles = [
  "README.md",
  "AGENTS.md",
  "docs/process/lifecycle.md",
  "templates/project/AGENTS.md",
];

const canonicalTiers = ["0", "1", "2", "3"];

for (const file of tierFiles) {
  const text = read(file);
  const present = new Set();
  for (const match of text.matchAll(/Tier (\d+)/g)) present.add(match[1]);

  for (const tier of canonicalTiers) {
    if (!present.has(tier)) {
      fail(`${file} publishes the tier model but does not mention Tier ${tier}`);
    }
  }

  for (const tier of present) {
    if (!canonicalTiers.includes(tier)) {
      fail(`${file} mentions Tier ${tier}, which is not part of the tier model`);
    }
  }
}

// 4. The evidence label sets in principles.md and validation-model.md must match.
const principlesText = read("docs/process/principles.md");
const validationText = read("docs/reference/validation-model.md");

const principlesLabels = new Set();
const evidenceBlock = principlesText.split("Common evidence types:")[1] ?? "";
for (const line of evidenceBlock.split(/\r?\n/)) {
  if (line.startsWith("## ")) break;
  const match = line.match(/^-\s+`([a-z0-9-]+)`:/);
  if (match) principlesLabels.add(match[1]);
}

const validationLabels = new Set();
for (const line of validationText.split(/\r?\n/)) {
  const match = line.match(/^`([a-z0-9-]+)`\s*$/);
  if (match) validationLabels.add(match[1]);
}

if (principlesLabels.size === 0) fail("no evidence labels found in docs/process/principles.md");
if (validationLabels.size === 0) fail("no evidence labels found in docs/reference/validation-model.md");

for (const label of principlesLabels) {
  if (!validationLabels.has(label)) {
    fail(`evidence label \`${label}\` in principles.md is not defined in validation-model.md`);
  }
}

for (const label of validationLabels) {
  if (!principlesLabels.has(label)) {
    fail(`evidence label \`${label}\` in validation-model.md is not listed in principles.md`);
  }
}

if (failed) process.exit(1);
