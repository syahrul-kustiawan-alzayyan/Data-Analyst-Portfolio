import Layout from '@/components/Layout';
import ProjectsServer from '@/components/projects/ProjectsServer';
import HomeContent from './HomeContent';
import { Project } from '@/types/project';

async function getFeaturedProjects() {
  const fs = await import('fs');
  const path = await import('path');

  const projectsDirectory = path.join(process.cwd(), 'src/data');
  const fullPath = path.join(projectsDirectory, 'projects.json');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  let allProjects: Project[] = JSON.parse(fileContents);

  // Add base path prefix for GitHub Pages deployment
  if (process.env.DEPLOY_ENV === 'github-pages' || process.env.GITHUB_ACTIONS === 'true') {
    allProjects = allProjects.map(project => ({
      ...project,
      thumbnail: `/Data-Analyst-Portfolio${project.thumbnail}`
    }));
  }

  return allProjects.filter((project) => project.featured).reverse();
}

export default async function Home() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <Layout>
      <div className="min-h-screen w-full">
        <HomeContent featuredProjects={featuredProjects} />
      </div>
    </Layout>
  );
}