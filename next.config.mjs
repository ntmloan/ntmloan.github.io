import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      // keep in sync with `defaultLanguage` in src/lib/i18n.ts
      { source: '/', destination: '/en', permanent: false },
    ];
  },
  async rewrites() {
    return [
      // serve the default language ("en") under the unprefixed /docs URL
      { source: '/docs', destination: '/en/docs' },
      { source: '/docs/:path*', destination: '/en/docs/:path*' },
    ];
  },
};

export default withMDX(config);
