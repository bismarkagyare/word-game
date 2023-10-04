import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import RenderGuess from '../RenderGuess/RenderGuess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const Game = () => {
  const [guesses, setGuesses] = useState([]);

  const handleAddGuess = (newGuess) => {
    setGuesses([...guesses, newGuess]);
  };

  return (
    <>
      <RenderGuess guesses={guesses} answer={answer} />
      <GuessInput handleAddGuess={handleAddGuess} />
    </>
  );
};

export default Game;
