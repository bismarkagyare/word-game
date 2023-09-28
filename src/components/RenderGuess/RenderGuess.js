import React from 'react';

const RenderGuess = ({ items }) => {
  return (
    <>
      <div className="guess-results">
        {items.map((item, index) => (
          <p key={index} className="guess">
            {item}
          </p>
        ))}
      </div>
    </>
  );
};

export default RenderGuess;
