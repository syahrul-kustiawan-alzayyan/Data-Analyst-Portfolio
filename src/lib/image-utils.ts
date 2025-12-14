/**
 * Utility function to get the correct image path for GitHub Pages deployment
 * @param imagePath The relative image path from the public directory
 * @returns The correct image path with base path prefix for GitHub Pages deployment
 */
export function getAssetPath(imagePath: string): string {
  // During GitHub Pages build (DEPLOY_ENV=github-pages), add the repository path prefix
  if (typeof process !== 'undefined' &&
      (process.env.DEPLOY_ENV === 'github-pages' || process.env.GITHUB_ACTIONS === 'true')) {
    return `/Data-Analyst-Portfolio${imagePath}`;
  }

  // In all other cases (development, Vercel, etc.), return the original path
  return imagePath;
}