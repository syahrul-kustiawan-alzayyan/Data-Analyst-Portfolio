'use client';

import { Project } from '@/types/project';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

interface CompactProjectCardProps {
  project: Project;
  index?: number;
  showButtons?: boolean;
}

const CompactProjectCard = ({ project, index = 0, showButtons = false }: CompactProjectCardProps) => {
  const {
    id,
    title,
    thumbnail,
    tags,
    links
  } = project;

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
        delay: index * 0.05
      }
    },
    hover: {
      y: -5,
      scale: 1.01,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <motion.div
      className="relative rounded-2xl border bg-gray-900/80 backdrop-blur-sm overflow-hidden group border-gray-700 h-full hover:shadow-xl transition-all duration-500 flex flex-col"
      variants={cardVariants}
      whileHover="hover"
      initial="hidden"
      animate="visible"
      whileTap={{ scale: 0.98 }}
    >
      {/* Thumbnail */}
      <div className="relative w-full overflow-hidden" style={{ height: '100px' }}>
        <div className="relative w-full h-full">
          <Image
            src={thumbnail}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 brightness-90 group-hover:brightness-100"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-2.5 sm:p-3.5 md:p-4 z-20 relative flex flex-col flex-grow">
        <h3 className="text-sm font-bold font-mono text-white mb-1 line-clamp-1 group-hover:text-gray-200 transition-colors duration-300">
          {title}
        </h3>

        <div className="flex flex-wrap gap-1 mb-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[0.65rem] sm:text-xs px-1.5 py-0.5 rounded-full bg-gray-800/60 text-gray-300 border border-gray-600 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        {showButtons && (
          <div className="flex flex-col gap-1.5 sm:gap-2 pt-1.5 sm:pt-2 border-t border-gray-800 mt-auto">
            {links.github && (
              <Link
                href={links.github}
                target="_blank"
                className="text-[0.65rem] sm:text-xs flex items-center justify-center gap-0.5 px-2 py-1 sm:px-3 sm:py-1.5 rounded-md sm:rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-medium transition-all duration-300 transform hover:scale-[1.02] group/link shadow-sm hover:shadow-md min-h-[28px] sm:min-h-[32px]"
              >
                <div className="i-lucide-github text-[0.8rem] sm:text-sm group-hover/link:text-white transition-colors" />
                <span className="hidden sm:block">View Project</span>
                <span className="sm:hidden">Code</span>
              </Link>
            )}

            {links.demo && (
              <Link
                href={links.demo}
                target="_blank"
                className="text-[0.65rem] sm:text-xs flex items-center justify-center gap-0.5 px-2 py-1 sm:px-3 sm:py-1.5 rounded-md sm:rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-colors duration-300 group/link min-h-[28px] sm:min-h-[32px]"
              >
                <div className="i-lucide-external-link text-[0.8rem] sm:text-sm group-hover/link:text-white transition-colors" />
                <span className="hidden sm:block">Live Demo</span>
                <span className="sm:hidden">Demo</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CompactProjectCard;