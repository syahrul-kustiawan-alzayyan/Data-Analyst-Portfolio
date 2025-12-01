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
    <div className="min-h-screen w-full py-20">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-gray-800 mb-4">
            Skills & Expertise
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            An overview of my technical capabilities and professional competencies
          </p>
        </motion.div>


        {/* Skills Visualization Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 bg-gray-100 rounded-xl border border-gray-300">
              <button
                className={`px-6 py-3 rounded-lg transition-all ${
                  activeTab === 'radar'
                    ? 'bg-gradient-to-r from-black to-gray-800 text-white font-mono shadow-lg shadow-gray-300/20'
                    : 'text-gray-500 hover:text-black'
                }`}
                onClick={() => setActiveTab('radar')}
              >
                Radar Chart
              </button>
              <button
                className={`px-6 py-3 rounded-lg transition-all ${
                  activeTab === 'bar'
                    ? 'bg-gradient-to-r from-gray-600 to-black text-white font-mono shadow-lg shadow-gray-300/20'
                    : 'text-gray-500 hover:text-black'
                }`}
                onClick={() => setActiveTab('bar')}
              >
                Bar Chart
              </button>
            </div>
          </div>

          <div className="h-96 bg-gray-100 rounded-xl p-4 border border-gray-300">
            {activeTab === 'radar' ? (
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillsData}>
                  <PolarGrid stroke="rgba(0, 0, 0, 0.3)" radialLines={true} />
                  <PolarAngleAxis
                    dataKey="name"
                    tick={{ fill: '#000000', fontSize: 13, fontWeight: 500 }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <PolarRadiusAxis
                    angle={90}
                    domain={[0, 100]}
                    tick={{ fill: '#666666', fontSize: 11 }}
                    orientation="middle"
                    stroke="rgba(0, 0, 0, 0.3)"
                    tickCount={6}
                  />
                  <Radar
                    name="Skill Level"
                    dataKey="level"
                    stroke="#000000"
                    fill="#000000"
                    fillOpacity={0.2}
                    strokeWidth={3}
                    animationDuration={1500}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#ffffff',
                      borderColor: '#000000',
                      borderRadius: '0.5rem',
                      color: 'black',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.1)'
                    }}
                    itemStyle={{ color: '#000000', fontWeight: 'bold' }}
                    labelStyle={{ color: '#888888', marginBottom: '5px' }}
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
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 0, 0, 0.1)" />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: '#000000', fontSize: 12, fontWeight: 500 }}
                    angle={-45}
                    textAnchor="end"
                    height={70}
                    tickMargin={10}
                  />
                  <YAxis
                    domain={[0, 100]}
                    tick={{ fill: '#666666', fontSize: 11 }}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#ffffff',
                      borderColor: '#000000',
                      borderRadius: '0.5rem',
                      color: 'black',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.1)'
                    }}
                    formatter={(value) => [`${value}%`, 'Level']}
                    labelStyle={{ color: '#888888', marginBottom: '5px' }}
                    itemStyle={{ color: '#000000', fontWeight: 'bold' }}
                  />
                  <Bar
                    dataKey="level"
                    fill="url(#colorGradient)"
                    animationDuration={1500}
                    radius={[4, 4, 0, 0]}
                  />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#000000" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#888888" stopOpacity={0.8}/>
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </motion.div>

        {/* Skills Breakdown */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold font-mono text-center text-black mb-12">Technical Skills Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Data Processing', items: ['Python', 'Pandas', 'NumPy', 'SQL'], icon: 'database' },
              { name: 'Visualization', items: ['Tableau', 'Matplotlib', 'PowerBI'], icon: 'bar-chart-4' },
              { name: 'Machine Learning', items: ['Scikit-learn', 'TensorFlow', 'Keras', 'XGBoost'], icon: 'brain' },
              { name: 'Database Management', items: ['MySQL', 'MongoDB'], icon: 'server' },
              { name: 'Statistical Analysis', items: ['Excel', 'Spreadsheet'], icon: 'trending-up' },
              { name: 'Communication', items: ['Presentations', 'Reporting', 'Documentation'], icon: 'message-circle' },
            ].map((skillGroup, index) => (
              <motion.div
                key={skillGroup.name}
                className="p-6 bg-gray-100 rounded-xl border border-gray-300 hover:border-black/30 transition-all duration-300 hover:shadow-lg hover:shadow-black/10"
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-black mr-3">
                    <div className={`i-lucide-${skillGroup.icon} text-2xl`} />
                  </div>
                  <h3 className="font-bold text-lg text-black">{skillGroup.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1.5 rounded-lg bg-gray-200 text-gray-800 border border-gray-400/20 transition-colors hover:border-gray-400/50"
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