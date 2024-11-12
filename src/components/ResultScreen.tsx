import React from 'react';
import { Share2 } from 'lucide-react';
import { formatTime } from '../utils/timeUtils';

interface ResultScreenProps {
  theme: string;
  solvedWords: string[];
  timeTaken: number;
  onPlayAgain: () => void;
  onShare: () => void;
  timeExpired: boolean;
  isDarkMode: boolean;
}

export function ResultScreen({ theme, solvedWords, timeTaken, onPlayAgain, onShare, timeExpired, isDarkMode }: ResultScreenProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          {timeExpired ? 'Time\'s Up! ⏰' : 'Congratulations! 🎉'}
        </h2>
        <p className="text-center mb-2 text-gray-700 dark:text-gray-300">
          {timeExpired 
            ? `You found ${solvedWords.length} out of 5 words in the "${theme}" category!`
            : `You found all words in the "${theme}" category!`}
        </p>
        <p className="text-center mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
          Time: {formatTime(timeTaken)}
        </p>
        
        <div className="space-y-2 mb-6">
          {solvedWords.map((word) => (
            <div key={word} className="bg-green-100 dark:bg-green-900 p-2 rounded text-center font-medium text-green-800 dark:text-green-200">
              {word}
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <button
            onClick={onPlayAgain}
            className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Play Again
          </button>
          <button
            onClick={onShare}
            className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            <Share2 size={20} />
            Share
          </button>
        </div>
      </div>
    </div>
  );
}