import fs from "node:fs";
import path from "node:path";

const patterns = [
  /OPENAI_API_KEY\s*=\s*["']?sk-[A-Za-z0-9_-]{20,}/i,
  /github_pat_[A-Za-z0-9_]{20,}/,
  /gho_[A-Za-z0-9_]{20,}/,
  /-----BEGIN (RSA |OPENSSH |EC |DSA )?PRIVATE KEY-----/,
  /AWS_SECRET_ACCESS_KEY\s*=/i,
  /password\s*=\s*["'][^"']{8,}["']/i,
];

const skippedDirs = new Set([".git", "node_modules"]);
const skippedExt = new Set([".png", ".jpg", ".jpeg", ".gif", ".pdf", ".zip"]);
let failed = false;

function shouldSkip(file) {
  const parts = file.split(path.sep);
  if (parts.some((part) => skippedDirs.has(part))) return true;
  return skippedExt.has(path.extname(file).toLowerCase());
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (shouldSkip(full)) continue;
    if (entry.isDirectory()) {
      walk(full);
    } else if (entry.isFile()) {
      const text = fs.readFileSync(full, "utf8");
      for (const pattern of patterns) {
        if (pattern.test(text)) {
          console.error(`possible secret pattern in ${path.relative(process.cwd(), full)}`);
          failed = true;
        }
      }
    }
  }
}

walk(process.cwd());

if (failed) process.exit(1);

