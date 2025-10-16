'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiArrowRight } from 'react-icons/hi';
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/events', label: 'Events' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-card backdrop-blur-xl border-b border-white/20 dark:border-gray-700/30'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-2">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="relative glass-button px-6 py-3 rounded-2xl font-bold text-xl tracking-tight text-purple-700 dark:text-purple-300 group-hover:text-purple-800 dark:group-hover:text-purple-200 transition-colors duration-300">
                Lifebuild
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  href={item.href}
                  className="relative glass-button px-4 py-2 rounded-xl font-medium transition-all duration-300 group hover:scale-105"
                >
                  <span className="relative z-10 text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {item.label}
                  </span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <ThemeToggle />
            <Link 
              href="/contact" 
              className="group inline-flex items-center gap-2 px-6 py-3 neu-button-primary text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(true)}
            className="lg:hidden glass-button p-3 rounded-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Open menu"
          >
            <HiMenu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </motion.button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-md z-50 lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 glass-card backdrop-blur-xl border-l border-white/20 dark:border-gray-700/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex justify-between items-center p-6 border-b border-white/20 dark:border-gray-700/30">
                  <div className="glass-button px-4 py-2 rounded-xl font-bold text-lg text-purple-700 dark:text-purple-300">
                    Lifebuild
                  </div>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="glass-button p-2 rounded-xl transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Close menu"
                  >
                    <HiX className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </motion.button>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 px-6 py-8">
                  <div className="space-y-4">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block glass-button px-4 py-4 rounded-xl font-semibold text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 group"
                        >
                          <span className="flex items-center justify-between">
                            {item.label}
                            <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* Mobile Actions */}
                <div className="p-6 border-t border-white/20 dark:border-gray-700/30 space-y-4">
                  <div className="flex justify-center">
                    <ThemeToggle />
                  </div>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="group inline-flex items-center gap-2 px-6 py-4 neu-button-primary text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 w-full justify-center"
                  >
                    Get Started
                    <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}