import React from 'react';
import { Menu, Moon, Sun, Share2, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BurgerMenuProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onShare: () => void;
  onShowHowToPlay: () => void;
}

export function BurgerMenu({ isDarkMode, onToggleDarkMode, onShare, onShowHowToPlay }: BurgerMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Menu"
      >
        <Menu size={24} className="text-gray-700 dark:text-gray-300" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute right-0 top-12 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50"
            >
              <button
                onClick={onToggleDarkMode}
                className="w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {isDarkMode ? (
                  <>
                    <Sun size={18} className="text-gray-700 dark:text-gray-300" />
                    <span className="text-gray-700 dark:text-gray-300">Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon size={18} className="text-gray-700 dark:text-gray-300" />
                    <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
                  </>
                )}
              </button>
              <button
                onClick={() => {
                  onShowHowToPlay();
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <HelpCircle size={18} className="text-gray-700 dark:text-gray-300" />
                <span className="text-gray-700 dark:text-gray-300">How to Play</span>
              </button>
              <button
                onClick={() => {
                  onShare();
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Share2 size={18} className="text-gray-700 dark:text-gray-300" />
                <span className="text-gray-700 dark:text-gray-300">Share</span>
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}