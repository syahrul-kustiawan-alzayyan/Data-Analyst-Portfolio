/**
 * Utility function to get the correct image path for GitHub Pages deployment
 * @param imagePath The relative image path from the public directory
 * @returns The correct image path with base path prefix for GitHub Pages deployment
 */
export function getAssetPath(imagePath: string): string {
  // Check if we're in a browser environment or server environment
  const isBrowser = typeof window !== 'undefined';

  // During GitHub Pages deployment, add the repository path prefix
  // This needs to be consistent for both server and client rendering
  if (process.env.DEPLOY_ENV === 'github-pages' ||
      process.env.GITHUB_ACTIONS === 'true' ||
      (isBrowser && window.location.hostname.includes('github.io'))) {
    // Ensure the path starts with the base path for GitHub Pages
    if (imagePath.startsWith('/')) {
      return `/Data-Analyst-Portfolio${imagePath}`;
    } else {
      return `/Data-Analyst-Portfolio/${imagePath}`;
    }
  }

  // In all other cases (development, Vercel, etc.), return the original path
  return imagePath;
}