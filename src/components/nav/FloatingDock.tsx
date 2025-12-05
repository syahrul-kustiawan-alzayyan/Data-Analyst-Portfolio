'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/', icon: 'home' },
  { name: 'Projects', href: '/projects', icon: 'folder' },
  { name: 'Skills', href: '/skills', icon: 'pie-chart' },
  { name: 'About', href: '/about', icon: 'user' },
  { name: 'Contact', href: '/contact', icon: 'mail' },
];

const FloatingDock = () => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="flex items-center bg-black/50 backdrop-blur-lg border border-gray-600 rounded-2xl px-6 py-5 shadow-xl">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="mx-2"
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center justify-center w-16 h-16 rounded-xl transition-all duration-300 relative ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <div className={`i-lucide-${item.icon} text-xl`} />
                    <span className="text-xs mt-1 font-mono text-gray-300">{item.name}</span>
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
                        layoutId="navIndicator"
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingDock;