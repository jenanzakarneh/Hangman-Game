export const getGuessedLetters = (word: string, correctGuesses: string[]) => {
  let guessedString = word;
  for (let i = 0; i < word.length; i++) {
    if (correctGuesses.includes(word.charAt(i))) {
      removeItem(word.charAt(i), correctGuesses);
      continue;
    }
    guessedString = guessedString.replace(word.charAt(i), "_");
  }
  return guessedString;
};

const removeItem = (item: string, arr: string[]) => {
  const index = arr.indexOf(item);
  if (index !== -1) {
    arr.splice(index, 1);
  }
  return arr;
};
