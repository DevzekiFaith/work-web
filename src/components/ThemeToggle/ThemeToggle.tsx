'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { HiSun, HiMoon } from 'react-icons/hi';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-lg glass-button text-gray-700 dark:text-gray-300 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 180, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? (
          <HiMoon className="w-5 h-5" />
        ) : (
          <HiSun className="w-5 h-5" />
        )}
      </motion.div>
    </motion.button>
  );
}
