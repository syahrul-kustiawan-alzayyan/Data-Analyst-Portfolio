import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  reactCompiler: true,
  trailingSlash: true,
  // Configure basePath for GitHub Pages deployment
  basePath: process.env.DEPLOY_ENV === 'github-pages' || process.env.GITHUB_ACTIONS === 'true'
    ? '/Data-Analyst-Portfolio'
    : '',
};

export default nextConfig;
