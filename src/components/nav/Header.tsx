'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getAssetPath } from '@/lib/image-utils';

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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-gray-700 py-3 shadow-md'
            : 'bg-black/80 backdrop-blur-md py-5 border-b border-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/" className="flex items-center">
              <img
                src={getAssetPath("/images/Logo.png")}
                alt="Portfolio Logo"
                width={32}
                height={32}
                className="rounded-md object-contain"
                style={{ width: '32px', height: '32px' }}
              />
              <span className="ml-2 text-lg font-bold font-mono hidden sm:block text-white">
                Data Analyst
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    className={`px-5 py-3 rounded-lg transition-all duration-300 relative ${
                      isActive
                        ? 'text-white font-medium'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="font-mono">{item.name}</span>
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
                        layoutId="navIndicator"
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-3 rounded-lg bg-gray-800/70 backdrop-blur-sm border border-gray-600 hover:bg-gray-700/90 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <div className="relative">
              {mobileMenuOpen ? (
                <div className="i-lucide-x text-xl flex items-center justify-center" />
              ) : (
                <div className="i-lucide-menu text-xl flex items-center justify-center" />
              )}
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center md:hidden"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button
              className="absolute top-6 right-6 text-white p-3 rounded-full bg-gray-800/70 backdrop-blur-sm border border-gray-600 hover:bg-gray-700/90 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <div className="i-lucide-x text-xl flex items-center justify-center" />
            </button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center space-y-6 mt-16"
            >
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <motion.div
                      className={`text-3xl font-mono py-4 px-8 rounded-xl transition-all ${
                        isActive
                          ? 'text-white bg-gray-800 font-bold border border-gray-600 w-48 text-center'
                          : 'text-gray-200 hover:text-white hover:bg-gray-800/50 w-48 text-center'
                      }`}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: isActive ? 'rgba(55, 65, 81, 1)' : 'rgba(55, 65, 81, 0.5)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;