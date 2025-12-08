import type { NextConfig } from "next";

// Determine if we're building for GitHub Pages
const isGitHubPages = process.env.DEPLOY_ENV === 'github-pages' ||
                     (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production') ||
                     process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  reactCompiler: true,
  trailingSlash: true,
};

// Add basePath and assetPrefix for GitHub Pages deployment
if (isGitHubPages) {
  nextConfig.basePath = '/Data-Analyst-Portfolio';
  nextConfig.assetPrefix = '/Data-Analyst-Portfolio/';
}

export default nextConfig;
