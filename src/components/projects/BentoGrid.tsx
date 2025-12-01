'use client';

import { Project } from '@/types/project';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

interface BentoGridProps {
  projects: Project[];
}

const BentoGrid = ({ projects }: BentoGridProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <motion.div
      className="bento-grid gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
        />
      ))}
    </motion.div>
  );
};

export default BentoGrid;