import { readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicImagesDir = path.join(rootDir, "public", "images");
const routePaths = ["/", "/radish", "/catalyst", "/flow", "/mind", "/mascot", "/about", "/abc-test"];
const canonicalUrls = [
  "https://radishx.com/",
  "https://radishx.com/radish",
  "https://radishx.com/catalyst",
  "https://radishx.com/flow",
  "https://radishx.com/mind",
  "https://radishx.com/mascot",
  "https://radishx.com/about",
];

const errors = [];
const args = parseArgs(process.argv.slice(2));
const baseUrl = normalizeBaseUrl(args.baseUrl ?? process.env.SITE_BASE_URL ?? "http://127.0.0.1:4500");
const wwwUrl = args.wwwUrl ?? process.env.SITE_WWW_URL;
const timeoutMs = Number(args.timeoutMs ?? process.env.SITE_SMOKE_TIMEOUT_MS ?? 10000);

function parseArgs(values) {
  const parsed = {};

  for (let index = 0; index < values.length; index += 1) {
    const value = values[index];

    if (value === "--base-url") {
      parsed.baseUrl = values[index + 1];
      index += 1;
    } else if (value === "--www-url") {
      parsed.wwwUrl = values[index + 1];
      index += 1;
    } else if (value === "--timeout-ms") {
      parsed.timeoutMs = values[index + 1];
      index += 1;
    } else {
      errors.push(`Unknown argument: ${value}`);
    }
  }

  return parsed;
}

function normalizeBaseUrl(value) {
  try {
    const url = new URL(value);
    url.pathname = url.pathname.replace(/\/+$/, "");
    url.search = "";
    url.hash = "";
    return url.toString().replace(/\/$/, "");
  } catch {
    errors.push(`Invalid base URL: ${value}`);
    return "http://127.0.0.1:4500";
  }
}

function targetUrl(relativePath, base = baseUrl) {
  return new URL(relativePath, `${base}/`).toString();
}

async function fetchTarget(url, options = {}) {
  const response = await fetch(url, {
    redirect: options.redirect ?? "follow",
    signal: AbortSignal.timeout(timeoutMs),
    method: options.method ?? "GET",
  });
  return response;
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

async function checkHtmlRoute(routePath) {
  const url = targetUrl(routePath);

  try {
    const response = await fetchTarget(url);
    const contentType = response.headers.get("content-type") ?? "";
    const body = await response.text();

    if (!response.ok) {
      errors.push(`${routePath} returned HTTP ${response.status}`);
    }
    if (!contentType.includes("text/html")) {
      errors.push(`${routePath} returned non-HTML content-type: ${contentType}`);
    }
    if (!body.includes('<div id="root"></div>')) {
      errors.push(`${routePath} response is missing React root`);
    }
    if (!body.includes("module")) {
      errors.push(`${routePath} response is missing module script marker`);
    }
  } catch (error) {
    errors.push(`${routePath} request failed: ${error.message}`);
  }
}

async function checkTextResource(relativePath, expectedType, checks) {
  const url = targetUrl(relativePath);

  try {
    const response = await fetchTarget(url);
    const contentType = response.headers.get("content-type") ?? "";
    const body = await response.text();

    if (!response.ok) {
      errors.push(`${relativePath} returned HTTP ${response.status}`);
    }
    if (!contentType.includes(expectedType)) {
      errors.push(`${relativePath} returned unexpected content-type: ${contentType}`);
    }

    for (const [label, expected] of checks) {
      if (!body.includes(expected)) {
        errors.push(`${relativePath} is missing ${label}`);
      }
    }
  } catch (error) {
    errors.push(`${relativePath} request failed: ${error.message}`);
  }
}

async function checkImageResource(relativePath) {
  const url = targetUrl(`/images/${relativePath}`);

  try {
    let response = await fetchTarget(url, { method: "HEAD" });

    if (!response.ok || !(response.headers.get("content-type") ?? "").startsWith("image/")) {
      response = await fetchTarget(url);
    }

    const contentType = response.headers.get("content-type") ?? "";
    if (!response.ok) {
      errors.push(`/images/${relativePath} returned HTTP ${response.status}`);
    }
    if (!contentType.startsWith("image/")) {
      errors.push(`/images/${relativePath} returned non-image content-type: ${contentType}`);
    }
  } catch (error) {
    errors.push(`/images/${relativePath} request failed: ${error.message}`);
  }
}

async function checkWwwRedirect() {
  if (!wwwUrl) {
    return;
  }

  const normalizedWwwUrl = normalizeBaseUrl(wwwUrl);

  for (const routePath of ["/", "/about", "/mascot"]) {
    try {
      const response = await fetchTarget(targetUrl(routePath, normalizedWwwUrl), { redirect: "manual" });
      const location = response.headers.get("location") ?? "";

      if (response.status < 300 || response.status > 399) {
        errors.push(`${normalizedWwwUrl}${routePath} did not return a redirect`);
        continue;
      }

      const redirectedUrl = new URL(location, normalizedWwwUrl);
      const expectedUrl = new URL(routePath, `${baseUrl}/`);

      if (redirectedUrl.origin !== expectedUrl.origin || redirectedUrl.pathname !== expectedUrl.pathname) {
        errors.push(`${normalizedWwwUrl}${routePath} redirects to ${redirectedUrl.toString()}, expected ${expectedUrl.toString()}`);
      }
    } catch (error) {
      errors.push(`${normalizedWwwUrl}${routePath} redirect check failed: ${error.message}`);
    }
  }
}

for (const routePath of routePaths) {
  await checkHtmlRoute(routePath);
}

await checkTextResource(
  "/robots.txt",
  "text/plain",
  [
    ["User-agent", "User-agent: *"],
    ["Allow", "Allow: /"],
    ["Sitemap", "Sitemap: https://radishx.com/sitemap.xml"],
  ],
);

await checkTextResource(
  "/sitemap.xml",
  "xml",
  canonicalUrls.map((url) => [url, `<loc>${url}</loc>`]),
);

let publicImages = [];
try {
  publicImages = await listFiles(publicImagesDir);
} catch {
  errors.push("public/images is missing");
}

for (const image of publicImages) {
  await checkImageResource(image);
}

await checkWwwRedirect();

if (errors.length > 0) {
  console.error("HTTP smoke check failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exitCode = 1;
} else {
  console.log("HTTP smoke check passed.");
  console.log(`Base URL: ${baseUrl}`);
  console.log(`Checked ${routePaths.length} routes.`);
  console.log(`Checked ${publicImages.length} public image resources.`);
  if (wwwUrl) {
    console.log(`Checked www redirect source: ${wwwUrl}`);
  }
}
