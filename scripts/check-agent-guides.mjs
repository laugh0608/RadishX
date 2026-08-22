import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const guidePaths = ["AGENTS.md", "CLAUDE.md"];
const checkedPaths = [...guidePaths, "docs/development/agent-collaboration.md"];
const errors = [];

async function readGuide(relativePath) {
  const content = await readFile(path.join(rootDir, relativePath), "utf8");

  if (content.charCodeAt(0) === 0xfeff) {
    errors.push(`${relativePath} contains a UTF-8 BOM`);
  }
  if (content.includes("\r")) {
    errors.push(`${relativePath} must use LF line endings`);
  }
  if (!content.endsWith("\n")) {
    errors.push(`${relativePath} is missing a final newline`);
  }

  return content;
}

function sharedBody(content) {
  return content.split("\n").slice(3).join("\n");
}

async function checkLocalLinks(relativePath, content) {
  const markdownLinkPattern = /!?\[[^\]]*\]\(([^)]+)\)/g;

  for (const match of content.matchAll(markdownLinkPattern)) {
    const rawTarget = match[1].trim().replace(/^<|>$/g, "");
    const target = rawTarget.split(/\s+["']/)[0];

    if (
      target.length === 0 ||
      target.startsWith("#") ||
      /^[a-z][a-z\d+.-]*:/i.test(target)
    ) {
      continue;
    }

    const fileTarget = decodeURIComponent(target.split("#")[0]);
    const absoluteTarget = path.resolve(rootDir, path.dirname(relativePath), fileTarget);

    try {
      await access(absoluteTarget);
    } catch {
      errors.push(`${relativePath} has a missing local link target: ${target}`);
    }
  }
}

const checkedContents = new Map(
  await Promise.all(
    checkedPaths.map(async (relativePath) => [relativePath, await readGuide(relativePath)]),
  ),
);
const agentsGuide = checkedContents.get("AGENTS.md");
const claudeGuide = checkedContents.get("CLAUDE.md");

if (sharedBody(agentsGuide) !== sharedBody(claudeGuide)) {
  errors.push("AGENTS.md and CLAUDE.md must match exactly from line 4 onward");
}

await Promise.all(
  [...checkedContents].map(([relativePath, content]) =>
    checkLocalLinks(relativePath, content),
  ),
);

if (errors.length > 0) {
  console.error("Agent guide check failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exitCode = 1;
} else {
  console.log("Agent guide check passed.");
  console.log("Agent guides share the same body and have valid local links.");
}
