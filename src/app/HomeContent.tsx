'use client';

import { motion } from 'framer-motion';
import BentoGridOverview from '@/components/projects/BentoGridOverview';

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
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono mb-6 tracking-tight">
                <span className="text-white">Syahrul Kustiawan Al Zayyan</span>
              </h1>
              <div className="relative inline-block">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-mono mb-6 mt-4 text-white">
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
              className="text-lg md:text-xl text-gray-300 mb-10 font-sans max-w-3xl mx-auto leading-relaxed"
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
              className="mb-16"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gray-800 border border-gray-600 rounded-full font-mono text-white shadow-md">
                <span className="flex h-3 w-3 relative mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
                </span>
                Available for new opportunities
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.a
                href="#projects"
                className="px-8 py-4 bg-white text-black font-mono rounded-full inline-block text-center hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="/contact"
                className="px-8 py-4 bg-black text-white font-mono rounded-full inline-block text-center border border-gray-600 hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
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
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-6">
              <h2 className="text-3xl md:text-4xl font-bold font-mono text-white">
                Featured Projects
              </h2>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Showcasing impactful data analysis and visualization solutions
            </p>
          </motion.div>

          <BentoGridOverview projects={featuredProjects} />

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="/projects"
              className="inline-flex items-center px-8 py-4 bg-white text-black font-mono rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Projects
              <div className="i-lucide-arrow-right ml-2 text-lg" />
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Data Visualization', icon: 'bar-chart', description: 'Creating compelling visual representations of complex data' },
              { name: 'Machine Learning', icon: 'bot', description: 'Building predictive models and algorithms for data insights' },
              { name: 'Statistical Analysis', icon: 'calculator', description: 'Applying statistical methods to interpret data trends' },
              { name: 'Database Management', icon: 'database', description: 'Designing and managing data storage solutions' }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all shadow-md hover:shadow-xl group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 rounded-xl bg-gray-800 flex items-center justify-center mb-6 group-hover:bg-gray-700 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                <h3 className="font-bold text-xl text-white mb-3">{skill.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="/skills"
              className="inline-flex items-center px-8 py-4 bg-white text-black font-mono rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Full Skills
              <div className="i-lucide-arrow-right ml-2 text-lg" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}