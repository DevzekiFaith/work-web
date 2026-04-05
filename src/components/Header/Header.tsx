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
    { href: '/services', label: 'Pillars' },
    { href: '/resources', label: 'Library' },
    { href: '/contact', label: 'Inquiry' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#F5F0E8]/90 dark:bg-[#1C1C1E]/90 backdrop-blur-xl border-b border-[#0D1B2A]/10 dark:border-white/10 shadow-sm'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <nav className={`flex justify-between items-center transition-all duration-700 ${
          scrolled ? 'py-4 md:py-6' : 'py-8 md:py-12 lg:py-14'
        }`}>
          {/* Logo / Personal Mark */}
          <Link href="/" className="group flex items-center space-x-2">
            <motion.div
              className="flex flex-col"
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-display text-2xl md:text-3xl tracking-tight text-[#0D1B2A] dark:text-[#F5F0E8] leading-none">
                Zeki Ubor
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A84C] font-semibold mt-1">
                Human Architecture
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12 xl:gap-16">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
              >
                <Link
                  href={item.href}
                  className="relative group py-2"
                >
                  <span className="text-sm uppercase tracking-widest font-medium text-[#0D1B2A] dark:text-[#F5F0E8]/80 group-hover:text-[#C9A84C] transition-colors duration-300">
                    {item.label}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A84C] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <ThemeToggle />
            <Link 
              href="/audit" 
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#0D1B2A] dark:bg-[#F5F0E8] text-[#F5F0E8] dark:text-[#0D1B2A] text-[10px] uppercase tracking-[0.2em] font-bold rounded-none transition-all duration-500 hover:bg-[#C9A84C] hover:text-[#0D1B2A] dark:hover:bg-[#C9A84C]"
            >
              Architecture Audit
              <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden space-x-4">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsOpen(true)}
              className="p-2 text-[#0D1B2A] dark:text-[#F5F0E8] transition-all duration-300"
              whileTap={{ scale: 0.95 }}
              aria-label="Open menu"
            >
              <HiMenu className="w-8 h-8" />
            </motion.button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#0D1B2A]/40 backdrop-blur-sm z-[60] lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-full max-w-sm bg-[#F5F0E8] dark:bg-[#1C1C1E] z-[70] lg:hidden border-l border-[#0D1B2A]/10 dark:border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex justify-between items-center p-8 border-b border-[#0D1B2A]/5 dark:border-white/5">
                  <div className="flex flex-col">
                    <span className="font-display text-2xl tracking-tight text-[#0D1B2A] dark:text-[#F5F0E8]">
                      Zeki Ubor
                    </span>
                  </div>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-[#0D1B2A] dark:text-[#F5F0E8] transition-all duration-300"
                    whileTap={{ scale: 0.95 }}
                    aria-label="Close menu"
                  >
                    <HiX className="w-8 h-8" />
                  </motion.button>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 px-8 py-12">
                  <div className="space-y-8">
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
                          className="block text-2xl uppercase tracking-widest font-light text-[#0D1B2A] dark:text-[#F5F0E8] hover:text-[#C9A84C] transition-all duration-300 group"
                        >
                          <span className="flex items-center justify-between">
                            {item.label}
                            <HiArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2" />
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* Mobile Actions */}
                <div className="p-8 border-t border-[#0D1B2A]/5 dark:border-white/5">
                  <Link
                    href="/audit"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-4 px-8 py-5 bg-[#0D1B2A] dark:bg-[#F5F0E8] text-[#F5F0E8] dark:text-[#0D1B2A] text-sm uppercase tracking-[0.2em] font-bold transition-all duration-500 hover:bg-[#C9A84C]"
                  >
                    Take the Audit
                    <HiArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}