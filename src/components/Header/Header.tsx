'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow p-4 relative z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center space-x-2">
        <div className="text-xl font-bold text-gray-900 dark:text-white hover:bg-purple-600 rounded-md p-2">mindvest</div>
        </Link>
        <div className="hidden md:flex space-x-4 text-gray-800 dark:text-gray-200">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="bg-white dark:bg-gray-400 text-gray-900 dark:text-white w-3/4 max-w-xs h-full p-6 shadow-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-semibold">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 text-2xl leading-none"
                >
                  ×
                </button>
              </div>
              <nav className="flex flex-col space-y-4 mb-6">
                <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
                <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
                <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
                <Link href="/careers" onClick={() => setIsOpen(false)}>Careers</Link>
                <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
              </nav>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="w-full px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition"
              >
                Toggle {darkMode ? 'Light' : 'Dark'} Mode
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
