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
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="flex items-center bg-gray-100/80 backdrop-blur-md border border-black/20 rounded-2xl px-4 py-3 shadow-xl shadow-black/10">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="mx-2"
                >
                  <motion.div
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center justify-center w-14 h-14 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-black/20 text-black border border-black/50'
                        : 'text-gray-600 hover:text-black hover:bg-gray-200/50'
                    }`}
                    style={{
                      boxShadow: isActive
                        ? '0 0 15px rgba(0, 0, 0, 0.3)'
                        : 'none'
                    }}
                  >
                    <div className={`i-lucide-${item.icon} text-xl`} />
                    <span className="text-xs mt-1 font-mono">{item.name}</span>
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