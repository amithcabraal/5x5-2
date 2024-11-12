import React from 'react';
import { motion } from 'framer-motion';

interface SolvedWordsProps {
  words: string[];
}

export function SolvedWords({ words }: SolvedWordsProps) {
  return (
    <div className="flex flex-col gap-2">
      {words.map((word, index) => (
        <motion.div
          key={word}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-100 p-3 rounded-lg text-green-800 font-semibold text-center"
        >
          {word}
        </motion.div>
      ))}
    </div>
  );
}