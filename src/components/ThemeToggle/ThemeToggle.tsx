'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { HiSun, HiMoon, HiDesktopComputer } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const themes = [
  { name: 'light', icon: HiSun, label: 'Light' },
  { name: 'dark', icon: HiMoon, label: 'Dark' },
  { name: 'system', icon: HiDesktopComputer, label: 'System' }
] as const;

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState<'bottom' | 'top'>('bottom');
  const buttonRef = useRef<HTMLButtonElement>(null);

  const currentTheme = themes.find(t => t.name === theme);
  const CurrentIcon = currentTheme?.icon || HiSun;

  const handleThemeChange = (newTheme: typeof theme) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  const handleToggleOpen = () => {
    if (!isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      const dropdownHeight = 200; // Approximate height of dropdown
      
      // If there's not enough space below but enough above, show dropdown above
      if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
        setDropdownPosition('top');
      } else {
        setDropdownPosition('bottom');
      }
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <motion.button
        ref={buttonRef}
        onClick={handleToggleOpen}
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle theme"
      >
        <CurrentIcon className="w-5 h-5" />
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu */}
            <motion.div
              initial={{ 
                opacity: 0, 
                scale: 0.95, 
                y: dropdownPosition === 'top' ? 10 : -10 
              }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ 
                opacity: 0, 
                scale: 0.95, 
                y: dropdownPosition === 'top' ? 10 : -10 
              }}
              transition={{ duration: 0.15 }}
              className={`absolute right-0 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-20 ${
                dropdownPosition === 'top' 
                  ? 'bottom-full mb-2' 
                  : 'top-full mt-2'
              }`}
            >
              {themes.map((themeOption) => {
                const Icon = themeOption.icon;
                const isActive = theme === themeOption.name;
                
                return (
                  <button
                    key={themeOption.name}
                    onClick={() => handleThemeChange(themeOption.name)}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-left text-sm transition-colors duration-150 ${
                      isActive
                        ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="flex-1">{themeOption.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTheme"
                        className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
              
              {/* Current resolved theme indicator */}
              <div className="border-t border-gray-200 dark:border-gray-700 mt-1 pt-1">
                <div className="px-4 py-2 text-xs text-gray-500 dark:text-gray-400">
                  Currently: {resolvedTheme === 'dark' ? 'Dark' : 'Light'} mode
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
