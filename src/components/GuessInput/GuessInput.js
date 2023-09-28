import React from 'react';
import { useState } from 'react';

const GuessInput = ({ handleAddGuess }) => {
  const [guess, setGuess] = useState('');

  const handleSubmit = (e) => {
    console.log({ guess });
    e.preventDefault();
    handleAddGuess(guess);
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
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          minLength={5}
          maxLength={5}
          required
        />
      </form>
    </div>
  );
};

export default GuessInput;
