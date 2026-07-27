import { docs } from "collections/server";
import { loader, update } from "fumadocs-core/source";
import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons";
import { docsContentRoute, docsImageRoute, docsRoute } from "./shared";
import { i18n } from "./i18n";

// Folders under content/docs/ that stay reachable by direct URL but must not
// appear in nav, home cards, search, or llms.txt/llms-full.txt.
const UNLISTED_PATHS = ["platform-administration"];

export function isUnlisted(path: string) {
  return UNLISTED_PATHS.some(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`),
  );
}

const fumadocsSource = docs?.toFumadocsSource?.();
const sharedOptions = {
  baseUrl: docsRoute,
  plugins: [lucideIconsPlugin()],
  i18n,
};

// See https://fumadocs.dev/docs/headless/source-api for more info
// Every page is generated and resolvable — used wherever a specific page is
// being looked up (docs page itself, OG image, raw markdown route).
export const source = loader({ ...sharedOptions, source: fumadocsSource });

// Same content minus unlisted folders — used wherever pages get listed for
// browsing/discovery (sidebar nav, home cards, search, llms.txt dumps).
export const publicSource = loader({
  ...sharedOptions,
  source: update(fumadocsSource)
    .files((files) => files.filter((file) => !isUnlisted(file.path)))
    .build(),
});

export function getPageImage(page: (typeof source)["$inferPage"]) {
  const segments = [...page.slugs, "image.png"];

  return {
    segments,
    url: `${docsImageRoute}/${segments.join("/")}`,
  };
}

export function getPageMarkdownUrl(page: (typeof source)["$inferPage"]) {
  const segments = [...page.slugs, "content.md"];

  return {
    segments,
    url: `${docsContentRoute}/${segments.join("/")}`,
  };
}

export async function getLLMText(page: (typeof source)["$inferPage"]) {
  const processed = await page.data.getText("processed");

  return `# ${page.data.title} (${page.url})

${processed}`;
}
