'use client';

import { Project } from '@/types/project';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProjectOverviewCardProps {
  project: Project;
  index?: number;
}

const ProjectOverviewCard = ({ project, index = 0 }: ProjectOverviewCardProps) => {
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

  const cardVariants = {
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
        ease: "easeOut",
        delay: index * 0.05
      }
    },
    hover: {
      y: -5,
      scale: 1.01,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className="relative rounded-lg border bg-white overflow-hidden group border-gray-300 border-opacity-30 h-full hover:shadow-md transition-all duration-300"
      style={{
        borderColor: '#000000',
        opacity: 1,
      }}
      variants={cardVariants}
      whileHover="hover"
      initial="hidden"
      animate="visible"
      whileTap={{ scale: 0.98 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 z-10" />

      {/* Thumbnail with optional video preview */}
      <div className="relative w-full overflow-hidden" style={{ height: '120px' }}>
        {video_preview ? (
          <div className="relative w-full h-full">
            <video
              src={video_preview}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        ) : (
          <div className="relative w-full h-full">
            <Image
              src={thumbnail}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        )}
      </div>

      <div className="p-4 z-20 relative">
        <h3 className="text-sm font-bold font-mono text-gray-900 mb-2 line-clamp-1 group-hover:text-black transition-colors duration-300">
          {title}
        </h3>

        <p className="text-xs text-gray-700 mb-3 line-clamp-2">
          {summary}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-0.5 rounded-full bg-gray-200 text-gray-800 border border-gray-400 font-mono"
              style={{
                borderColor: '#000000' + '40',
                color: '#000000',
                backgroundColor: '#000000' + '10'
              }}
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span
              className="text-xs px-2 py-0.5 rounded-full bg-gray-200 text-gray-800 border border-gray-400 font-mono"
              style={{
                borderColor: '#000000' + '40',
                color: '#000000',
                backgroundColor: '#000000' + '10'
              }}
            >
              +{tags.length - 3}
            </span>
          )}
        </div>

        <div className="flex gap-2 pt-2 border-t border-gray-300/50">
          {links.github && (
            <Link
              href={links.github}
              target="_blank"
              className="text-xs flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              <div className="i-lucide-github text-sm" /> GitHub
            </Link>
          )}

          {links.demo && (
            <Link
              href={links.demo}
              target="_blank"
              className="text-xs flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              <div className="i-lucide-external-link text-sm" /> Demo
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectOverviewCard;