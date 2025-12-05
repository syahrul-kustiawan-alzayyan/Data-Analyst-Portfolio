'use client';

import { motion } from 'framer-motion';
import Layout from '@/components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <div className="min-h-screen w-full py-20 bg-black">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-6">
              <h1 className="text-4xl md:text-5xl font-bold font-mono text-white">
                About Me
              </h1>
            </div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Data analyst with expertise in transforming complex datasets into actionable insights
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Profile Image/Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-sm h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-gray-800 to-gray-600 mb-6 overflow-hidden border-2 border-gray-600">
                    <div className="bg-gray-700 border-2 border-dashed rounded-full w-full h-full flex items-center justify-center">
                      <div className="i-lucide-user text-4xl text-gray-300" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold font-mono text-white mb-2">Syahrul Kustiawan Al Zayyan</h2>
                  <p className="text-gray-400 mb-6">Data Analyst</p>

                  <div className="w-full mb-6">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Experience Level</span>
                      <span className="text-white font-mono">Advanced</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-white to-gray-400 rounded-full"
                        style={{ width: '90%' }}
                      ></div>
                    </div>
                    <p className="text-right text-xs text-gray-500 mt-1">90% Proficient</p>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {['Python', 'SQL', 'Excel', 'Power BI', 'Tableau'].map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 rounded-full bg-gray-800 text-gray-300 border border-gray-600 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bio Section */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-sm h-full">
                <h2 className="text-2xl font-bold font-mono text-white mb-6">About Me</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    I'm a passionate data analyst with expertise in transforming complex datasets into
                    actionable insights that drive business decisions. My experience spans across data
                    processing, statistical analysis, machine learning, and visualization.
                  </p>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    I specialize in using various data analysis tools and programming languages to
                    extract meaningful patterns from data and present them in a clear, understandable
                    format to stakeholders. My approach is centered on clear communication and delivering
                    results that can be easily understood and acted upon.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    When I'm not analyzing data, you can find me exploring new datasets, learning
                    new analytical techniques, or contributing to open-source data projects.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Career Journey Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-20"
          >
            <div className="inline-block mb-16">
              <h2 className="text-3xl font-bold font-mono text-white">
                Career Journey
              </h2>
            </div>

            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-gray-600 to-gray-700 top-0 bottom-0"></div>

              <div className="space-y-12">
                {[
                  { year: 'February 2024', title: 'Introduction to Data Analyst', description: 'Started my journey in data analysis, learning fundamental concepts and tools.' },
                  { year: 'December 2024', title: 'Training & Certification Data Analyst Specialist', description: 'Completed specialized training and obtained certification as a Data Analyst Specialist.' },
                  { year: 'October 2025', title: 'Big Data Analyst Internship', description: 'Gained practical experience in analyzing large datasets and implementing data solutions.' },
                ].map((event, index) => (
                  <motion.div
                    key={index}
                    className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    {/* Left/Right card */}
                    <div className="md:w-5/12 p-4">
                      <div className="bg-gray-800 rounded-2xl p-6 border border-gray-600 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-sm text-gray-400 font-mono">{event.year}</span>
                            <h3 className="text-xl font-bold font-mono mt-1 mb-2 text-white">{event.title}</h3>
                            <p className="text-gray-400">{event.description}</p>
                          </div>

                          {/* Timeline dot */}
                          <div className="hidden md:block ml-4">
                            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-white to-gray-400 border-2 border-gray-900 relative z-10"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Spacer for alignment */}
                    <div className="hidden md:block md:w-2/12"></div>
                    <div className="md:w-5/12"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CV Download Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-12 bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700 shadow-sm">
              <h2 className="text-2xl font-bold font-mono text-white mb-4">Download My CV</h2>
              <p className="text-gray-400 mb-8 max-w-lg">
                Interested in my experience and qualifications? Download my CV for more detailed information.
              </p>
              <a
                href="/documents/CV-Syahrul Kustiawan Al Zayyan.pdf"
                download="CV-Syahrul_Kustiawan_Al_Zayyan.pdf"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-white to-gray-400 text-black font-mono rounded-full hover:shadow-md transition-all duration-300 transform hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download CV (PDF)
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;