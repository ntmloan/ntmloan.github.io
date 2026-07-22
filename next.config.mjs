import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

// GitHub Pages serves this project at https://ntmloan.github.io/WKDocs/,
// so all internal links/assets need the "/WKDocs" prefix in production.
const basePath = process.env.NODE_ENV === 'production' ? '/WKDocs' : '';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // GitHub Pages only serves static files, no Node server for
  // redirects/rewrites/middleware — build a fully static export instead.
  output: 'export',
  trailingSlash: true,
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default withMDX(config);
