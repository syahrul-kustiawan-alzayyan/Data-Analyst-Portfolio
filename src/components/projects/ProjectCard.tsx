'use client';

import { Project } from '@/types/project';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  const {
    id,
    title,
    summary,
    thumbnail,
    tags,
    theme_color,
    links,
    grid_config,
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
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className={`relative rounded-xl border bg-white overflow-hidden group ${grid_config.replace(/col-span-(\d+)/g, 'bento-item-col-span-$1').replace(/row-span-(\d+)/g, 'bento-item-row-span-$1')} border-gray-300 border-opacity-30`}
      style={{
        borderColor: '#000000',
        opacity: 1,
        transition: 'all 0.3s ease'
      }}
      variants={cardVariants}
      whileHover="hover"
      initial="hidden"
      animate="visible"
      whileTap={{ scale: 0.98 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 z-10" />

      {/* Thumbnail with optional video preview - responsive container with aspect ratio */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
        {video_preview ? (
          <div className="relative w-full h-full">
            <video
              src={video_preview}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
              style={{ objectFit: 'contain' }}
            />
          </div>
        ) : (
          <div className="relative w-full h-full">
            <Image
              src={thumbnail}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
              style={{ objectFit: 'contain' }}
            />
          </div>
        )}

        {/* Gradient overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-t-xl"
          style={{
            background: `linear-gradient(180deg, transparent 0%, #000000 100%)`
          }}
        />
      </div>

      <div className="p-4 z-20 relative flex flex-col min-h-[160px]">
        <div className="flex flex-wrap gap-1.5 mb-2">
          {tags.map((tag, idx) => (
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
        </div>

        <h3 className="text-base font-bold font-mono text-gray-900 mb-1 group-hover:text-black transition-colors duration-300 flex-shrink-0">
          {title}
        </h3>

        <p className="text-xs text-gray-700 mb-3 flex-grow line-clamp-3">
          {summary}
        </p>

        <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-300/50 mt-auto">
          {links.github && (
            <Link
              href={links.github}
              target="_blank"
              className="text-xs flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              <div className="i-lucide-github text-sm" /> GitHub
            </Link>
          )}

          {links.demo && (
            <Link
              href={links.demo}
              target="_blank"
              className="text-xs flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              <div className="i-lucide-external-link text-sm" /> Demo
            </Link>
          )}
        </div>
      </div>

      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"
        style={{
          boxShadow: `0 0 20px 5px #00000040`,
          pointerEvents: 'none'
        }}
      />
    </motion.div>
  );
};

export default ProjectCard;