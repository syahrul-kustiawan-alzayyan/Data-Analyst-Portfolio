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

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-gray-100/80 backdrop-blur-md border-b border-black/10 py-2'
            : 'bg-transparent py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold font-mono"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/" className="text-black">
              DA
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    className={`px-4 py-2 rounded-lg transition-all ${
                      isActive
                        ? 'text-black bg-gray-200'
                        : 'text-gray-700 hover:text-black'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    style={{
                      boxShadow: isActive
                        ? '0 0 10px rgba(0, 0, 0, 0.2)'
                        : 'none'
                    }}
                  >
                    <span className="font-mono">{item.name}</span>
                  </motion.div>
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="i-lucide-menu text-2xl" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed top-0 left-0 right-0 bottom-0 z-30 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-6 right-6 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="i-lucide-x text-2xl" />
            </button>

            <nav className="flex flex-col items-center space-y-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <motion.div
                      className={`text-2xl font-mono py-3 px-6 rounded-full ${
                        isActive
                          ? 'text-black bg-gray-200'
                          : 'text-gray-700'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;