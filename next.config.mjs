// @ts-check

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  reactStrictMode: false,
  reactCompiler: true,
  experimental: {
    prefetchInlining: true,
    taint: true,
    turbopackFileSystemCacheForDev: true,
  },
};

export default withNextIntl(nextConfig);
