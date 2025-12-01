import { getFeaturedProjects } from '@/lib/projects';
import BentoGrid from '@/components/projects/BentoGrid';

export default async function ProjectsServer() {
  const featuredProjects = await getFeaturedProjects();

  return <BentoGrid projects={featuredProjects} />;
}