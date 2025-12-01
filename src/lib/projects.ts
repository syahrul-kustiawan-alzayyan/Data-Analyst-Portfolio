// This file is intended to be used only on the server side
import { Project } from '@/types/project';

export async function getSortedProjectsData(): Promise<Project[]> {
  // Dynamically import fs to ensure it's only used on the server
  const fs = await import('fs');
  const path = await import('path');

  const projectsDirectory = path.join(process.cwd(), 'src/data');
  const fullPath = path.join(projectsDirectory, 'projects.json');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const allProjects: Project[] = JSON.parse(fileContents);

  return allProjects;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const allProjects = await getSortedProjectsData();
  return allProjects.filter((project) => project.featured);
}

export async function getAllCategories(): Promise<string[]> {
  const allProjects = await getSortedProjectsData();
  const categories = new Set(allProjects.map((project) => project.category));
  return Array.from(categories);
}

export async function getProjectsByCategory(category: string): Promise<Project[]> {
  const allProjects = await getSortedProjectsData();
  return allProjects.filter((project) => project.category === category);
}

export async function getProjectById(id: string): Promise<Project | undefined> {
  const allProjects = await getSortedProjectsData();
  return allProjects.find((project) => project.id === id);
}