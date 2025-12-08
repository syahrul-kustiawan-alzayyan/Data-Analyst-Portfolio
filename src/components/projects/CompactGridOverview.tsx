'use client';

import { Project } from '@/types/project';
import CompactProjectCard from './CompactProjectCard';
import { motion } from 'framer-motion';

interface CompactGridOverviewProps {
  projects: Project[];
}

const CompactGridOverview = ({ projects }: CompactGridOverviewProps) => {
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
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project, index) => (
        <CompactProjectCard
          key={project.id}
          project={project}
          index={index}
          showButtons={false}
        />
      ))}
    </motion.div>
  );
};

export default CompactGridOverview;