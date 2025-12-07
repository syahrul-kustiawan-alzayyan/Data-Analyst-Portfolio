'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiDownload } from 'react-icons/fi';
import { FaCalendarAlt, FaCertificate } from 'react-icons/fa';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  fileName: string;
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      id: '1',
      title: 'Belajar Dasar Visualisasi Data',
      issuer: 'Platform Name',
      date: 'Date on Certificate',
      fileName: 'Belajar Dasar Visualisasi Data.pdf'
    },
    {
      id: '2',
      title: 'Belajar Machine Learning untuk Pemula',
      issuer: 'Platform Name',
      date: 'Date on Certificate',
      fileName: 'Belajar Machine Learning untuk Pemula.pdf'
    },
    {
      id: '3',
      title: 'Data Analytics',
      issuer: 'Platform Name',
      date: 'Date on Certificate',
      fileName: 'Data Analytics.pdf'
    },
    {
      id: '4',
      title: 'Introduction to Data Analysis using Microsoft',
      issuer: 'Platform Name',
      date: 'Date on Certificate',
      fileName: 'Introduction to Data Analysis using Microsoft.pdf'
    },
    {
      id: '5',
      title: 'The Proficiency Test of English to Speakers of Other Languages (PTESOL)',
      issuer: 'Testing Authority',
      date: 'Date on Certificate',
      fileName: 'The Proficiency Test of English to Speakers of Other Languages (PTESOL).pdf'
    }
  ];

  return (
    <section className="mb-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="inline-block mb-16"
      >
        <h2 className="text-3xl font-bold font-mono text-white">
          Certifications
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold font-mono text-white">{cert.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{cert.issuer}</p>
              </div>
              <div className="bg-gradient-to-r from-white to-gray-400 p-1.5 rounded-lg text-black flex items-center justify-center">
                <FaCertificate className="text-xl" />
              </div>
            </div>

            <div className="flex items-center text-gray-500 text-sm mb-4">
              <FaCalendarAlt className="mr-2" />
              <span>{cert.date}</span>
            </div>

            <div className="flex gap-3">
              <a
                href={`/documents/${cert.fileName}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm transition-colors duration-300 flex-1 justify-center"
              >
                <FiExternalLink className="mr-2" />
                View
              </a>
              <a
                href={`/documents/${cert.fileName}`}
                download={cert.fileName}
                className="flex items-center px-4 py-2 bg-gradient-to-r from-white to-gray-400 text-black rounded-lg text-sm transition-all duration-300 flex-1 justify-center hover:shadow-md"
              >
                <FiDownload className="mr-2" />
                Download
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;