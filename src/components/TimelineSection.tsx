'use client';

import { motion } from 'framer-motion';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineSectionProps {
  items: TimelineItem[];
}

const TimelineSection = ({ items }: TimelineSectionProps) => {
  return (
    <div className="relative">
      {/* Main vertical timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-gray-600 to-gray-700 top-0 bottom-0"></div>

      <div className="space-y-12">
        {items.map((item, index) => (
          <div key={index} className="relative">
            {index % 2 === 0 ? (
              <div className="flex items-center">
                {/* Left card */}
                <div className="md:w-5/12 p-4 pr-8">
                  <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-600 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center">
                      <div className="mr-auto">
                        <span className="text-sm text-gray-400 font-mono block">{item.year}</span>
                        <h3 className="text-xl font-bold font-mono mt-1 mb-2 text-white">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>

                      {/* Timeline dot only */}
                      <div className="hidden md:block flex-shrink-0 z-20">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-white to-gray-400 border-2 border-gray-900"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center connector with dot only */}
                <div className="hidden md:block md:w-2/12 relative">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-white to-gray-400 border-2 border-gray-900 transform -translate-x-1/2 -translate-y-1/2 z-30"></div>
                </div>

                <div className="md:w-5/12"></div>
              </div>
            ) : (
              <div className="flex items-center">
                <div className="md:w-5/12"></div>

                {/* Center connector with dot and line */}
                <div className="hidden md:block md:w-2/12 relative">
                  {/* Horizontal connector line from left card to center */}
                  <div className="absolute left-0 top-1/2 w-16 h-0.5 bg-gradient-to-r from-gray-600 to-gray-700 transform -translate-y-1/2 z-10"></div>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-white to-gray-400 border-2 border-gray-900 transform -translate-x-1/2 -translate-y-1/2 z-30"></div>
                </div>

                {/* Right card */}
                <div className="md:w-5/12 p-4 pl-8">
                  <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-600 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center">
                      {/* Timeline dot */}
                      <div className="hidden md:block flex-shrink-0 z-20 mr-4">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-white to-gray-400 border-2 border-gray-900"></div>
                      </div>

                      <div className="ml-auto text-right">
                        <span className="text-sm text-gray-400 font-mono block">{item.year}</span>
                        <h3 className="text-xl font-bold font-mono mt-1 mb-2 text-white">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineSection;