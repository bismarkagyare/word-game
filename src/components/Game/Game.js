import React from 'react';
import { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const Game = () => {
  const [guess, setGuess] = useState('');

  const handleSubmit = (e) => {
    console.log('guess: ', guess);
    e.preventDefault();
    setGuess('');
  };

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
          pattern=".{5}"
          maxLength={5}
        />
      </form>
    </div>
  );
};

export default Game;
