import React from 'react';
import { useState } from 'react';

const GuessInput = () => {
  const [guess, setGuess] = useState('');

  const handleSubmit = (e) => {
    console.log({ guess });
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

export default GuessInput;
