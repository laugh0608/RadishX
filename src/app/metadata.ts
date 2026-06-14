import type { AppRoute } from "./routes";

const siteOrigin = "https://radishx.com";
const siteName = "RadishX";
const defaultThemeColor = "#f4efe6";
const socialImagePath = "/images/social/radishx-og-image.png";
const socialImageAlt = "RadishX 项目矩阵与萝小白品牌入口预览图";

function absoluteUrl(path: string) {
  return new URL(path, siteOrigin).toString();
}

function getOrCreateMeta(selector: string, attributes: Record<string, string>) {
  const current = document.head.querySelector<HTMLMetaElement>(selector);

  if (current) {
    return current;
  }

  const meta = document.createElement("meta");

  Object.entries(attributes).forEach(([name, value]) => {
    meta.setAttribute(name, value);
  });

  document.head.append(meta);
  return meta;
}

function setMetaByName(name: string, content: string) {
  const meta = getOrCreateMeta(`meta[name="${name}"]`, { name });
  meta.content = content;
}

function setMetaByProperty(property: string, content: string) {
  const meta = getOrCreateMeta(`meta[property="${property}"]`, { property });
  meta.content = content;
}

function setCanonical(href: string) {
  const current = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (current) {
    current.href = href;
    return;
  }

  const link = document.createElement("link");
  link.rel = "canonical";
  link.href = href;
  document.head.append(link);
}

export function applyRouteMetadata(route: AppRoute) {
  const isNotFound = route.kind === "not-found";
  const canonicalUrl = absoluteUrl(isNotFound ? "/" : route.path);
  const socialImageUrl = absoluteUrl(socialImagePath);
  const robots = isNotFound ? "noindex, nofollow" : "index, follow";

  document.title = route.title;
  setCanonical(canonicalUrl);
  setMetaByName("description", route.description);
  setMetaByName("robots", robots);
  setMetaByName("theme-color", defaultThemeColor);
  setMetaByProperty("og:title", route.title);
  setMetaByProperty("og:description", route.description);
  setMetaByProperty("og:type", "website");
  setMetaByProperty("og:url", canonicalUrl);
  setMetaByProperty("og:site_name", siteName);
  setMetaByProperty("og:image", socialImageUrl);
  setMetaByProperty("og:image:secure_url", socialImageUrl);
  setMetaByProperty("og:image:type", "image/png");
  setMetaByProperty("og:image:width", "1200");
  setMetaByProperty("og:image:height", "630");
  setMetaByProperty("og:image:alt", socialImageAlt);
  setMetaByName("twitter:card", "summary_large_image");
  setMetaByName("twitter:title", route.title);
  setMetaByName("twitter:description", route.description);
  setMetaByName("twitter:image", socialImageUrl);
  setMetaByName("twitter:image:alt", socialImageAlt);
}
