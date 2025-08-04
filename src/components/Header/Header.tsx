'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiSun, HiMoon, HiArrowRight } from 'react-icons/hi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check for saved dark mode preference on component mount
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode));
    } else {
      // Check system preference if no saved preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(systemPrefersDark);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode to document using Tailwind's class-based approach
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container-fluid">
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg font-extrabold text-xl tracking-tight">
                mindvest
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  href={item.href}
                  className="relative text-gray-400 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-bold transition-colors duration-200 group px-3 py-2 rounded-lg hover:bg-gray-100"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <HiSun className="w-5 h-5 text-yellow-500" />
              ) : (
                <HiMoon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            aria-label="Open menu"
          >
            <HiMenu className="w-6 h-6 text-gray-700" />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-gray-700">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1.5 rounded-lg font-bold text-lg">
                    mindvest
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                    aria-label="Close menu"
                  >
                    <HiX className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 px-6 py-8">
                  <div className="space-y-6">
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
                          className="block text-lg font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* Mobile Actions */}
                <div className="p-6 border-t border-gray-100 dark:border-gray-700 space-y-4">
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="w-full flex items-center justify-center space-x-2 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    {darkMode ? (
                      <HiSun className="w-5 h-5 text-yellow-500" />
                    ) : (
                      <HiMoon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    )}
                    <span className="text-gray-900 dark:text-white font-bold">
                      {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </span>
                  </button>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl w-full justify-center"
                  >
                    Get Started
                    <HiArrowRight className="w-4 h-4 arrow" />
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
