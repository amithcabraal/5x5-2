import React, { useState, useEffect } from 'react';
import { wordSets } from './data/wordSets';
import { Grid } from './components/Grid';
import { ResultScreen } from './components/ResultScreen';
import { BurgerMenu } from './components/BurgerMenu';
import { HowToPlayModal } from './components/HowToPlayModal';
import { Sparkles, Pause, Play, Lightbulb, Wand2, Shuffle } from 'lucide-react';
import { rearrangeGrid, shuffleUnsolvedLetters } from './utils/gridUtils';
import { formatTime } from './utils/timeUtils';

const TIME_LIMIT = 240; // 4 minutes in seconds

function App() {
  const [currentSetIndex, setCurrentSetIndex] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const setId = urlParams.get('set');
    if (setId) {
      const index = wordSets.findIndex(set => set.id === setId);
      return index !== -1 ? index : Math.floor(Math.random() * wordSets.length);
    }
    return Math.floor(Math.random() * wordSets.length);
  });

  const [letters, setLetters] = useState<string[]>([]);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [solvedIndices, setSolvedIndices] = useState<number[]>([]);
  const [solvedWords, setSolvedWords] = useState<string[]>([]);
  const [isError, setIsError] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [gameStartTime] = useState(Date.now());
  const [finalTime, setFinalTime] = useState(0);
  const [hintIndex, setHintIndex] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });
  const [showHowToPlay, setShowHowToPlay] = useState(false);

  const currentSet = wordSets[currentSetIndex];

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  useEffect(() => {
    if (window.location.search) {
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  useEffect(() => {
    if (!showResult && !isPaused) {
      const interval = setInterval(() => {
        setTimer(prev => {
          if (prev >= TIME_LIMIT) {
            clearInterval(interval);
            setShowResult(true);
            setFinalTime(TIME_LIMIT);
            return TIME_LIMIT;
          }
          return prev + 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [showResult, isPaused]);

  useEffect(() => {
    const allLetters = currentSet.words.join('').split('');
    for (let i = allLetters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allLetters[i], allLetters[j]] = [allLetters[j], allLetters[i]];
    }
    setLetters(allLetters);
    setSelectedIndices([]);
    setSolvedIndices([]);
    setSolvedWords([]);
    setShowResult(false);
    setTimer(0);
    setIsPaused(false);
    setHintIndex(null);
  }, [currentSetIndex]);

  const getRemainingWords = () => {
    return currentSet.words.filter(word => !solvedWords.includes(word));
  };

  const handleHint = () => {
    const remainingWords = getRemainingWords();
    if (remainingWords.length > 0) {
      const randomWord = remainingWords[Math.floor(Math.random() * remainingWords.length)];
      const firstLetter = randomWord[0];
      const index = letters.findIndex((letter, idx) => 
        letter === firstLetter && !solvedIndices.includes(idx)
      );
      setHintIndex(index);
      setTimeout(() => setHintIndex(null), 2000);
    }
  };

  const handleSolve = () => {
    const remainingWords = getRemainingWords();
    if (remainingWords.length > 0) {
      const wordToSolve = remainingWords[Math.floor(Math.random() * remainingWords.length)];
      const newLetters = rearrangeGrid(letters, solvedWords, wordToSolve);
      setLetters(newLetters);
      
      const newSolvedIndices = Array.from(
        { length: (solvedWords.length + 1) * 5 },
        (_, i) => i
      );
      
      setSolvedIndices(newSolvedIndices);
      setSolvedWords([...solvedWords, wordToSolve]);
      setSelectedIndices([]);

      if (solvedWords.length + 1 === currentSet.words.length) {
        setFinalTime(timer);
        setTimeout(() => setShowResult(true), 1000);
      }
    }
  };

  const handleShuffle = () => {
    const newLetters = shuffleUnsolvedLetters(letters, solvedIndices);
    setLetters(newLetters);
    setSelectedIndices([]);
  };

  const handleLetterClick = (index: number) => {
    if (solvedIndices.includes(index) || isPaused) return;
    
    setIsError(false);
    setHintIndex(null);
    
    if (selectedIndices.includes(index)) {
      setSelectedIndices(selectedIndices.filter(i => i !== index));
      return;
    }

    if (selectedIndices.length < 5) {
      const newSelected = [...selectedIndices, index];
      setSelectedIndices(newSelected);

      if (newSelected.length === 5) {
        const word = newSelected.map(i => letters[i]).join('');
        if (currentSet.words.includes(word) && !solvedWords.includes(word)) {
          const newLetters = rearrangeGrid(letters, solvedWords, word);
          setLetters(newLetters);
          
          const newSolvedIndices = Array.from(
            { length: (solvedWords.length + 1) * 5 },
            (_, i) => i
          );
          
          setSolvedIndices(newSolvedIndices);
          setSolvedWords([...solvedWords, word]);
          setSelectedIndices([]);

          if (solvedWords.length + 1 === currentSet.words.length) {
            setFinalTime(timer);
            setTimeout(() => setShowResult(true), 1000);
          }
        } else {
          setIsError(true);
          setTimeout(() => {
            setSelectedIndices([]);
            setIsError(false);
          }, 1000);
        }
      }
    }
  };

  const handleShare = () => {
    const url = `${window.location.origin}${window.location.pathname}?set=${currentSet.id}`;
    const message = `I completed "${currentSet.theme}" in ${formatTime(finalTime)} on QuizWordz 5x5!\n\nCan you beat my time? Try it here: ${url}`;
    navigator.clipboard.writeText(message);
    alert('Results copied to clipboard!');
  };

  const handlePlayAgain = () => {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * wordSets.length);
    } while (nextIndex === currentSetIndex);
    setCurrentSetIndex(nextIndex);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const timeLeft = TIME_LIMIT - timer;

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-4 transition-colors duration-300`}>
      <div className="max-w-lg mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
            <Sparkles className="text-yellow-500" />
            QuizWordz 5x5
          </h1>
          <BurgerMenu
            isDarkMode={isDarkMode}
            onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
            onShare={handleShare}
            onShowHowToPlay={() => setShowHowToPlay(true)}
          />
        </div>

        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-4 mt-2">
            <p className={`text-xl font-mono ${timeLeft <= 30 ? 'text-red-600 dark:text-red-400' : 'dark:text-white'}`}>
              {formatTime(timeLeft)}
            </p>
            <button
              onClick={togglePause}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={isPaused ? 'Resume' : 'Pause'}
            >
              {isPaused ? <Play size={20} className="dark:text-white" /> : <Pause size={20} className="dark:text-white" />}
            </button>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Find five 5-letter words about: <b>{currentSet.theme}</b></p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Set {currentSetIndex + 1} of {wordSets.length}</p>
          
          <div className="flex justify-center gap-2 mt-4">
            <button
              onClick={handleHint}
              className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
            >
              <Lightbulb size={20} />
              Hint
            </button>
            <button
              onClick={handleSolve}
              className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
            >
              <Wand2 size={20} />
              Solve
            </button>
            <button
              onClick={handleShuffle}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Shuffle size={20} />
              Shuffle
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
          {!isPaused ? (
            <Grid
              letters={letters}
              selectedIndices={selectedIndices}
              solvedIndices={solvedIndices}
              isError={isError}
              hintIndex={hintIndex}
              onLetterClick={handleLetterClick}
            />
          ) : (
            <div className="h-[360px] flex items-center justify-center">
              <p className="text-xl text-gray-500 dark:text-gray-400 font-medium">Game Paused</p>
            </div>
          )}
        </div>

        {showResult && (
          <ResultScreen
            theme={currentSet.theme}
            solvedWords={solvedWords}
            timeTaken={finalTime}
            onPlayAgain={handlePlayAgain}
            onShare={handleShare}
            timeExpired={timer >= TIME_LIMIT}
            isDarkMode={isDarkMode}
          />
        )}

        <HowToPlayModal
          isOpen={showHowToPlay}
          onClose={() => setShowHowToPlay(false)}
        />
      </div>
    </div>
  );
}

export default App;
