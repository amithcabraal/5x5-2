import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface HowToPlayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HowToPlayModal({ isOpen, onClose }: HowToPlayModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <X size={20} className="text-gray-500 dark:text-gray-400" />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">How to Play</h2>
        
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>Find five 5-letter words related to the given theme:</p>
          
          <ul className="list-disc pl-5 space-y-2">
            <li>Click letters to form words</li>
            <li>Words can only be used once</li>
            <li>Use hints if you're stuck</li>
            <li>Complete the puzzle within 4 minutes</li>
          </ul>

          <div className="mt-4">
            <h3 className="font-semibold mb-2">Tools:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Hint: Highlights the first letter of a word</li>
              <li>Solve: Automatically solves one word</li>
              <li>Shuffle: Rearranges unsolved letters</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}