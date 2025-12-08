import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/Data-Analyst-Portfolio',
  assetPrefix: '/Data-Analyst-Portfolio/',
  reactCompiler: true,
};

export default nextConfig;
