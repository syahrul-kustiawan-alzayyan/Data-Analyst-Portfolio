import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  reactCompiler: true,
};

// Only add basePath and assetPrefix when building for GitHub Pages
if (process.env.DEPLOY_ENV === 'github-pages') {
  nextConfig.basePath = '/data_analyst_portfolio';
  nextConfig.assetPrefix = '/data_analyst_portfolio/';
}

// Ensure trailing slash for GitHub Pages compatibility
nextConfig.trailingSlash = true;

export default nextConfig;
