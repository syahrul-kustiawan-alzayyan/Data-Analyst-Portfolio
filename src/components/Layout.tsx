'use client';

import { ReactNode } from 'react';
import Header from './nav/Header';
import FloatingDock from './nav/FloatingDock';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Header />
      <main className="pt-16 pb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>
      <FloatingDock />
    </div>
  );
};

export default Layout;