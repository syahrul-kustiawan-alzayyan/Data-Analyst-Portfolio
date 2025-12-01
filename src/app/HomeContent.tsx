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
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-black opacity-5 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-gray-600 opacity-5 animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-gray-800 opacity-5 animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono mb-6">
                <span className="text-gray-900">Syahrul Kustiawan Al Zayyan</span>
              </h1>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-mono mb-6 mt-4">
                <span className="text-gray-800">Data Analyst</span>
              </h2>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-gray-700 mb-10 font-sans max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transforming complex datasets into actionable insights and compelling visualizations
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="inline-block px-6 py-3 bg-gray-100 border border-gray-400/50 rounded-lg font-mono text-gray-900 mb-16">
                <span className="mr-2">●</span> Open to new opportunities
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-700"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="i-lucide-chevron-down text-2xl" />
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16 p-6 rounded-xl bg-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
              Showcasing impactful data analysis and visualization solutions
            </p>
            <div className="w-24 h-0.5 bg-gray-800 mx-auto"></div>
          </motion.div>

          <BentoGridOverview projects={featuredProjects} />
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16 p-6 rounded-xl bg-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-gray-900 mb-4">
              Core Expertise
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Skills that drive impactful data solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Data Visualization', icon: 'bar-chart-4' },
              { name: 'Machine Learning', icon: 'cpu' },
              { name: 'Statistical Analysis', icon: 'trending-up' },
              { name: 'Database Management', icon: 'database' }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-400 hover:border-gray-700 transition-all shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`i-lucide-${skill.icon} text-3xl text-gray-900 mx-auto mb-4`} />
                <h3 className="font-mono text-lg text-gray-900">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}