'use client';

import { Project } from '@/types/project';
import ProjectOverviewCard from './ProjectOverviewCard';
import { motion } from 'framer-motion';

interface BentoGridOverviewProps {
  projects: Project[];
}

const BentoGridOverview = ({ projects }: BentoGridOverviewProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      className="project-overview-grid"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project, index) => (
        <ProjectOverviewCard
          key={project.id}
          project={project}
          index={index}
        />
      ))}
    </motion.div>
  );
};

export default BentoGridOverview;