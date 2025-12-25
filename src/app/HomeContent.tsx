'use client';

import { motion } from 'framer-motion';
import CompactGridOverview from '@/components/projects/CompactGridOverview';
import { getAssetPath } from '@/lib/image-utils';

interface HomeContentProps {
  featuredProjects: any[];
}

export default function HomeContent({ featuredProjects }: HomeContentProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-mono mb-4 sm:mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">Syahrul Kustiawan Al Zayyan</span>
              </h1>
              <div className="relative inline-block">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-mono mb-4 mt-2 sm:mt-4 text-white">
                  Data Analyst
                </h2>
                <motion.div
                  className="h-1 bg-linear-to-r from-transparent via-gray-700 to-transparent mt-1"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </div>
            </motion.div>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 font-sans max-w-2xl sm:max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transforming complex datasets into actionable insights and compelling visualizations that drive business decisions
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mb-10 sm:mb-16"
            >
              <div className="inline-flex items-center px-4 py-2.5 sm:px-6 sm:py-3 bg-gray-800 border border-gray-600 rounded-full font-mono text-white shadow-md">
                <span className="flex h-2.5 w-2.5 sm:h-3 sm:w-3 relative mr-2 sm:mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-green-600"></span>
                </span>
                <span className="text-sm sm:text-base">Available for new opportunities</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.a
                href="#projects"
                className="px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-black text-white font-mono rounded-full text-sm sm:text-base inline-block text-center border border-gray-600 hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl min-h-[40px] sm:min-h-[44px] flex items-center justify-center"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="/contact"
                className="px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-black text-white font-mono rounded-full text-sm sm:text-base inline-block text-center border border-gray-600 hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg min-h-[40px] sm:min-h-[44px] flex items-center justify-center"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="i-lucide-chevron-down text-2xl" />
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-10 sm:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-white">
                Featured Projects
              </h2>
            </div>
            <p className="text-gray-400 max-w-xs sm:max-w-2xl mx-auto text-base sm:text-lg">
              Showcasing impactful data analysis and visualization solutions
            </p>
          </motion.div>

          <CompactGridOverview projects={featuredProjects} />

          <motion.div
            className="text-center mt-8 sm:mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a
              href={getAssetPath('/projects')}
              className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-black text-white font-mono rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-600 min-h-[40px] sm:min-h-[44px]"
            >
              View All Projects
              <div className="i-lucide-arrow-right ml-1.5 sm:ml-2 text-base sm:text-lg" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-6">
              <h2 className="text-3xl md:text-4xl font-bold font-mono text-white">
                Core Expertise
              </h2>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Skills that drive impactful data solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {[
              { name: 'Data Visualization', icon: 'bar-chart', description: 'Creating compelling visual representations of complex data' },
              { name: 'Machine Learning', icon: 'bot', description: 'Building predictive models and algorithms for data insights' },
              { name: 'Data Gathering', icon: 'calculator', description: 'Collecting and aggregating data from diverse sources' },
              { name: 'Database Management', icon: 'database', description: 'Designing and managing data storage solutions' }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-gray-900/80 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 border border-gray-700 hover:border-gray-600 transition-all shadow-md hover:shadow-xl group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div className="w-10 h-10 sm:w-12 md:w-16 sm:h-12 md:h-16 rounded-md sm:rounded-lg md:rounded-xl bg-gray-800 flex items-center justify-center mb-2 sm:mb-3 md:mb-6 group-hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5 sm:w-6 md:w-8 sm:h-6 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {skill.icon === 'bar-chart' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    )}
                    {skill.icon === 'bot' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    )}
                    {skill.icon === 'calculator' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    )}
                    {skill.icon === 'database' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    )}
                  </svg>
                </div>
                <h3 className="font-bold text-base sm:text-lg md:text-xl text-white mb-1 sm:mb-2 md:mb-3">{skill.name}</h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12 sm:mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <a
              href={getAssetPath('/skills')}
              className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-black text-white font-mono rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-700 min-h-[40px] sm:min-h-[44px]"
            >
              View Full Skills
              <div className="i-lucide-arrow-right ml-1.5 sm:ml-2 text-base sm:text-lg" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}