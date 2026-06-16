import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(rootDir, "dist");
const publicDir = path.join(rootDir, "public");

const errors = [];

async function readText(relativePath) {
  return readFile(path.join(rootDir, relativePath), "utf8");
}

async function assertFile(relativePath) {
  try {
    const fileStat = await stat(path.join(rootDir, relativePath));
    if (!fileStat.isFile()) {
      errors.push(`${relativePath} is not a file`);
      return 0;
    }
    if (fileStat.size === 0) {
      errors.push(`${relativePath} is empty`);
    }
    return fileStat.size;
  } catch {
    errors.push(`${relativePath} is missing`);
    return 0;
  }
}

async function listFiles(directory, base = directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listFiles(absolutePath, base)));
    } else if (entry.isFile()) {
      files.push(path.relative(base, absolutePath).split(path.sep).join("/"));
    }
  }

  return files.sort();
}

for (const requiredFile of [
  "dist/index.html",
  "dist/favicon.ico",
  "dist/robots.txt",
  "dist/sitemap.xml",
]) {
  await assertFile(requiredFile);
}

let assetFiles = [];
try {
  assetFiles = await listFiles(path.join(distDir, "assets"));
} catch {
  errors.push("dist/assets is missing");
}

if (!assetFiles.some((file) => file.endsWith(".css"))) {
  errors.push("dist/assets has no CSS bundle");
}

if (!assetFiles.some((file) => file.endsWith(".js"))) {
  errors.push("dist/assets has no JS bundle");
}

const publicImageDir = path.join(publicDir, "images");
let publicImages = [];
try {
  publicImages = await listFiles(publicImageDir);
} catch {
  errors.push("public/images is missing");
}

for (const image of publicImages) {
  await assertFile(`dist/images/${image}`);
}

const sitemap = await readText("dist/sitemap.xml").catch(() => "");
for (const url of [
  "https://radishx.com/",
  "https://radishx.com/radish",
  "https://radishx.com/catalyst",
  "https://radishx.com/flow",
  "https://radishx.com/mind",
  "https://radishx.com/mascot",
  "https://radishx.com/about",
]) {
  if (!sitemap.includes(`<loc>${url}</loc>`)) {
    errors.push(`dist/sitemap.xml is missing ${url}`);
  }
}

const robots = await readText("dist/robots.txt").catch(() => "");
if (!robots.includes("User-agent: *")) {
  errors.push("dist/robots.txt is missing User-agent");
}
if (!robots.includes("Allow: /")) {
  errors.push("dist/robots.txt is missing Allow");
}
if (!robots.includes("Sitemap: https://radishx.com/sitemap.xml")) {
  errors.push("dist/robots.txt is missing canonical sitemap URL");
}

const indexHtml = await readText("dist/index.html").catch(() => "");
if (!indexHtml.includes("<div id=\"root\"></div>")) {
  errors.push("dist/index.html is missing React root");
}
if (!indexHtml.includes("type=\"module\"")) {
  errors.push("dist/index.html is missing module script");
}

if (errors.length > 0) {
  console.error("Local release check failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exitCode = 1;
} else {
  console.log("Local release check passed.");
  console.log(`Checked ${publicImages.length} public image files.`);
  console.log(`Checked ${assetFiles.length} Vite asset files.`);
}
