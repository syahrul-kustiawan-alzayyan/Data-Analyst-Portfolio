'use client';

import { Project } from '@/types/project';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
  index?: number;
  showButtons?: boolean;
}

const ProjectCard = ({ project, index = 0, showButtons = true }: ProjectCardProps) => {
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
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <motion.div
      className={`relative rounded-xl border bg-gray-900 overflow-hidden group ${grid_config.replace(/col-span-(\d+)/g, 'bento-item-col-span-$1').replace(/row-span-(\d+)/g, 'bento-item-row-span-$1')} border-gray-700 border-opacity-30`}
      style={{
        borderColor: '#444444',
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
              className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 brightness-90 group-hover:brightness-100"
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
              className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500 brightness-90 group-hover:brightness-100"
              style={{ objectFit: 'contain' }}
            />
          </div>
        )}

        {/* Gradient overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-t-xl"
          style={{
            background: `linear-gradient(180deg, transparent 0%, #ffffff 100%)`
          }}
        />
      </div>

      <div className="p-2.5 sm:p-3.5 md:p-4 z-20 relative flex flex-col min-h-[140px] sm:min-h-[160px]">
        <div className="flex flex-wrap gap-1 mb-1 sm:mb-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[0.65rem] sm:text-xs px-1.5 py-0.5 rounded-full bg-gray-800 text-gray-300 border border-gray-600 font-mono"
              style={{
                borderColor: '#ffffff' + '40',
                color: '#ffffff',
                backgroundColor: '#000000' + '80'
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-sm font-bold font-mono text-white mb-1 group-hover:text-gray-200 transition-colors duration-300 flex-shrink-0">
          {title}
        </h3>

        <p className="text-[0.7rem] sm:text-xs md:text-sm text-gray-400 mb-2 sm:mb-3 flex-grow line-clamp-3">
          {summary}
        </p>

        {showButtons && (
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-700/50 mt-auto">
            {links.github && (
              <Link
                href={links.github}
                target="_blank"
                className="flex items-center justify-center gap-1 px-2 py-1 rounded-md bg-gray-800 hover:bg-gray-700 text-white transition-colors text-xs min-h-[24px]"
              >
                <div className="i-lucide-github text-xs" />
                <span>Code</span>
              </Link>
            )}

            {links.demo && (
              <Link
                href={links.demo}
                target="_blank"
                className="flex items-center justify-center gap-1 px-2 py-1 rounded-md bg-gray-800 hover:bg-gray-700 text-white transition-colors text-xs min-h-[24px]"
              >
                <div className="i-lucide-external-link text-xs" />
                <span>Demo</span>
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"
        style={{
          boxShadow: `0 0 20px 5px #ffffff40`,
          pointerEvents: 'none'
        }}
      />
    </motion.div>
  );
};

export default ProjectCard;