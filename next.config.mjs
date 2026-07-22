import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // GitHub Pages only serves static files, no Node server for
  // redirects/rewrites/middleware — build a fully static export instead.
  // This is a user site repo (ntmloan.github.io), served at the domain
  // root, so no basePath prefix is needed.
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default withMDX(config);
