import { Suspense } from 'react';
import Layout from '@/components/Layout';
import ProjectsClient from './ProjectsClient';
import { Project } from '@/types/project';

async function getProjectsData() {
  // Import dynamically to use Node.js fs module only on the server
  const fs = await import('fs');
  const path = await import('path');

  const projectsDirectory = path.join(process.cwd(), 'src/data');
  const fullPath = path.join(projectsDirectory, 'projects.json');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const allProjects: Project[] = JSON.parse(fileContents);

  // Extract all unique categories from the projects
  const allProjectCategories = allProjects.flatMap((project) =>
    Array.isArray(project.category) ? project.category : [project.category]
  );
  const allCategories = Array.from(new Set(allProjectCategories)) as string[];

  return { allProjects, allCategories };
}

export default async function ProjectsPage() {
  const { allProjects, allCategories } = await getProjectsData();

  return (
    <Layout>
      <Suspense fallback={
        <div className="min-h-screen w-full py-20 flex items-center justify-center">
          <div className="text-center">
            <div className="i-lucide-loader-2 text-4xl text-black animate-spin mx-auto mb-4" />
            <p className="text-gray-600">Loading projects...</p>
          </div>
        </div>
      }>
        <ProjectsClient allProjects={allProjects} allCategories={allCategories} />
      </Suspense>
    </Layout>
  );
}