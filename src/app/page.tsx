import Layout from '@/components/Layout';
import ProjectsServer from '@/components/projects/ProjectsServer';
import HomeContent from './HomeContent';

async function getFeaturedProjects() {
  const fs = await import('fs');
  const path = await import('path');

  const projectsDirectory = path.join(process.cwd(), 'src/data');
  const fullPath = path.join(projectsDirectory, 'projects.json');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const allProjects = JSON.parse(fileContents);

  return allProjects.filter((project: any) => project.featured);
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