'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BentoGrid from '@/components/projects/BentoGrid';
import { Project, ProjectFilters } from '@/types/project';

interface ProjectsClientProps {
  allProjects: Project[];
  allCategories: string[];
}

const ProjectsClient = ({ allProjects, allCategories }: ProjectsClientProps) => {
  const [projects, setProjects] = useState<Project[]>(allProjects);
  const [filters, setFilters] = useState<ProjectFilters>({});
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Apply filters whenever they change
  useEffect(() => {
    let filtered = allProjects;

    // Apply category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(project => {
        // Check if project.category is an array or a string
        if (Array.isArray(project.category)) {
          return project.category.includes(selectedCategory);
        } else {
          return project.category === selectedCategory;
        }
      });
    }

    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(query) ||
        project.summary.toLowerCase().includes(query) ||
        project.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    setProjects(filtered);
  }, [selectedCategory, searchQuery, allProjects]);

  return (
    <div className="min-h-screen w-full py-20">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-black mb-4">
            Project Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of data analysis projects showcasing technical expertise and business impact
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          className="mb-12 p-6 bg-gray-100 rounded-xl border border-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col gap-4">
            {/* Search Bar */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 i-lucide-search text-gray-500" />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === 'All'
                    ? 'bg-black text-white font-mono'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setSelectedCategory('All')}
              >
                All
              </button>
              {allCategories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedCategory === category
                      ? 'bg-gray-800 text-white font-mono'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          className="mb-8 text-gray-600 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {projects.length} project{projects.length !== 1 ? 's' : ''} found
        </motion.div>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <BentoGrid projects={projects} />
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="i-lucide-folder-open text-6xl text-gray-400 mx-auto mb-6" />
            <h3 className="text-2xl font-mono text-gray-600 mb-2">No projects found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectsClient;