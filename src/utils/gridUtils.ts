export const rearrangeGrid = (
  letters: string[],
  solvedWords: string[],
  currentWord: string
): string[] => {
  const result: string[] = new Array(25).fill('');
  
  // Place the solved words at the top
  const allSolvedWords = [...solvedWords, currentWord];
  let currentIndex = 0;
  
  // First, place all solved words sequentially at the top
  for (const word of allSolvedWords) {
    for (const letter of word) {
      result[currentIndex] = letter;
      currentIndex++;
    }
  }
  
  // Create a copy of the original letters array
  const remainingLetters = [...letters];
  
  // Remove letters that were used in solved words, considering duplicates
  for (const word of allSolvedWords) {
    for (const letter of word) {
      const indexToRemove = remainingLetters.indexOf(letter);
      if (indexToRemove !== -1) {
        remainingLetters.splice(indexToRemove, 1);
      }
    }
  }
  
  // Shuffle remaining letters for randomness
  for (let i = remainingLetters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [remainingLetters[i], remainingLetters[j]] = [remainingLetters[j], remainingLetters[i]];
  }
  
  // Fill the rest of the grid with remaining letters
  for (let i = currentIndex; i < 25; i++) {
    const remainingLetterIndex = i - currentIndex;
    if (remainingLetterIndex < remainingLetters.length) {
      result[i] = remainingLetters[remainingLetterIndex];
    }
  }
  
  return result;
};

export const shuffleUnsolvedLetters = (letters: string[], solvedIndices: number[]): string[] => {
  const result = [...letters];
  const unsolvedIndices = Array.from({ length: letters.length }, (_, i) => i)
    .filter(i => !solvedIndices.includes(i));
  
  // Fisher-Yates shuffle for unsolved indices
  for (let i = unsolvedIndices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const indexA = unsolvedIndices[i];
    const indexB = unsolvedIndices[j];
    [result[indexA], result[indexB]] = [result[indexB], result[indexA]];
  }
  
  return result;
};