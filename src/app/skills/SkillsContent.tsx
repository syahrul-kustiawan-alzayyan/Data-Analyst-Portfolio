'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { Counter } from '@/components/skills/Counter';

const skillsData = [
  { name: 'Data Preparation', level: 90 },
  { name: 'Visualization', level: 85 },
  { name: 'Modeling', level: 88 },
  { name: 'Database Mgmt', level: 78 },
  { name: 'Communication', level: 80 },
];



const SkillsContent = () => {
  const [activeTab, setActiveTab] = useState('radar');

  return (
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
              Skills & Expertise
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            An overview of my technical capabilities and professional competencies
          </p>
        </motion.div>


        {/* Skills Visualization Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-600">
              <button
                className={`px-6 py-3 rounded-full transition-all ${
                  activeTab === 'radar'
                    ? 'bg-black text-white font-mono shadow-lg shadow-white/30'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
                onClick={() => setActiveTab('radar')}
              >
                Radar Chart
              </button>
              <button
                className={`px-6 py-3 rounded-full transition-all ${
                  activeTab === 'bar'
                    ? 'bg-black text-white font-mono shadow-lg shadow-white/30'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
                onClick={() => setActiveTab('bar')}
              >
                Bar Chart
              </button>
            </div>
          </div>

          <div className="h-96 bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 shadow-sm">
            {activeTab === 'radar' ? (
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillsData}>
                  <PolarGrid stroke="rgba(255, 255, 255, 0.1)" radialLines={true} />
                  <PolarAngleAxis
                    dataKey="name"
                    tick={{ fill: '#D1D5DB', fontSize: 13, fontWeight: 500 }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <PolarRadiusAxis
                    angle={90}
                    domain={[0, 100]}
                    tick={{ fill: '#9CA3AF', fontSize: 11 }}
                    orientation="middle"
                    stroke="rgba(255, 255, 255, 0.1)"
                    tickCount={6}
                  />
                  <Radar
                    name="Skill Level"
                    dataKey="level"
                    stroke="#FFFFFF"
                    fill="#FFFFFF"
                    fillOpacity={0.1}
                    strokeWidth={2}
                    animationDuration={1500}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      borderColor: '#374151',
                      borderRadius: '0.5rem',
                      color: '#F9FAFB',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.05)'
                    }}
                    itemStyle={{ color: '#F9FAFB', fontWeight: 'bold' }}
                    labelStyle={{ color: '#9CA3AF', marginBottom: '5px' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={skillsData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 60,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.05)" />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: '#D1D5DB', fontSize: 12, fontWeight: 500 }}
                    angle={-45}
                    textAnchor="end"
                    height={70}
                    tickMargin={10}
                  />
                  <YAxis
                    domain={[0, 100]}
                    tick={{ fill: '#9CA3AF', fontSize: 11 }}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      borderColor: '#374151',
                      borderRadius: '0.5rem',
                      color: '#F9FAFB',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.05)'
                    }}
                    formatter={(value) => [`${value}%`, 'Level']}
                    labelStyle={{ color: '#9CA3AF', marginBottom: '5px' }}
                    itemStyle={{ color: '#F9FAFB', fontWeight: 'bold' }}
                  />
                  <Bar
                    dataKey="level"
                    fill="url(#colorGradient)"
                    animationDuration={1500}
                    radius={[4, 4, 0, 0]}
                  />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#D1D5DB" stopOpacity={0.8}/>
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </motion.div>

        {/* Skills Breakdown */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="inline-block mb-12">
            <h2 className="text-2xl font-bold font-mono text-white">
              Technical Skills Breakdown
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Data Processing', items: ['Python', 'Pandas', 'NumPy', 'SQL'], icon: 'code' },
              { name: 'Visualization', items: ['Tableau', 'Matplotlib', 'PowerBI'], icon: 'bar-chart-4' },
              { name: 'Machine Learning', items: ['Scikit-learn', 'TensorFlow', 'Keras', 'XGBoost'], icon: 'bot' },
              { name: 'Database Management', items: ['MySQL', 'MongoDB'], icon: 'hard-drive' },
              { name: 'Statistical Analysis', items: ['Excel', 'Spreadsheet'], icon: 'calculator' },
              { name: 'Communication', items: ['Presentations', 'Reporting', 'Documentation'], icon: 'presentation' },
            ].map((skillGroup, index) => (
              <motion.div
                key={skillGroup.name}
                className="p-8 bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl group"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center mr-5 group-hover:from-gray-700 group-hover:to-gray-600 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      {skillGroup.icon === 'code' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      )}
                      {skillGroup.icon === 'bar-chart-4' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      )}
                      {skillGroup.icon === 'bot' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      )}
                      {skillGroup.icon === 'hard-drive' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      )}
                      {skillGroup.icon === 'calculator' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      )}
                      {skillGroup.icon === 'presentation' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      )}
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-white">{skillGroup.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1.5 rounded-full bg-gray-800 text-gray-300 border border-gray-600 transition-colors hover:bg-gray-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default SkillsContent;