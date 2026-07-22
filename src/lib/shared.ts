export const appName = "Workflow Document";
export const docsRoute = "/docs";
export const docsImageRoute = "/og/docs";
export const docsContentRoute = "/llms.mdx/docs";

// matches `basePath` in next.config.mjs, needed for URLs built outside of
// next/link or next/image (e.g. the static search client's fetch target)
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const gitConfig = {
  user: "ntmloan",
  repo: "WKDocs",
  branch: "master",
};
