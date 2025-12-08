'use client';

import { Project } from '@/types/project';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

interface ProjectOverviewCardProps {
  project: Project;
  index?: number;
  showButtons?: boolean;
}

const ProjectOverviewCard = ({ project, index = 0, showButtons = true }: ProjectOverviewCardProps) => {
  const {
    id,
    title,
    summary,
    thumbnail,
    tags,
    theme_color,
    links,
    video_preview
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
      className="relative rounded-2xl border bg-gray-900 overflow-hidden group border-gray-700 h-full hover:shadow-xl transition-all duration-500 flex flex-col"
      variants={cardVariants}
      whileHover="hover"
      initial="hidden"
      animate="visible"
      whileTap={{ scale: 0.98 }}
    >
      {/* Thumbnail with optional video preview */}
      <div className="relative w-full overflow-hidden" style={{ height: '160px' }}>
        {video_preview ? (
          <div className="relative w-full h-full">
            <video
              src={video_preview}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 brightness-90 group-hover:brightness-100"
            />
          </div>
        ) : (
          <div className="relative w-full h-full">
            <Image
              src={thumbnail}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 brightness-90 group-hover:brightness-100"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-5 z-20 relative flex flex-col flex-grow">
        <h3 className="text-base font-bold font-mono text-white mb-2 line-clamp-1 group-hover:text-gray-200 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-sm text-gray-400 mb-4 line-clamp-3 flex-grow">
          {summary}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-600 font-mono"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span
              className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-600 font-mono"
            >
              +{tags.length - 3}
            </span>
          )}
        </div>

        {showButtons && (
          <div className="flex gap-3 pt-3 border-t border-gray-800 mt-auto">
            {links.github && (
              <Link
                href={links.github}
                target="_blank"
                className="text-xs flex items-center gap-1 px-4 py-2.5 rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-medium transition-all duration-300 transform hover:scale-105 group/link shadow-md hover:shadow-lg"
              >
                <div className="i-lucide-github text-sm group-hover/link:text-white transition-colors" /> View Project
              </Link>
            )}

            {links.demo && (
              <Link
                href={links.demo}
                target="_blank"
                className="text-xs flex items-center gap-1 px-4 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-colors duration-300 group/link"
              >
                <div className="i-lucide-external-link text-sm group-hover/link:text-white transition-colors" /> Live Demo
              </Link>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectOverviewCard;