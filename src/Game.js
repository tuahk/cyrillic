import React, { useState } from 'react';

import alphabets from './alphabets';
import Correct from './Correct';

const randomLetter = () => {
  return alphabets[Math.floor(Math.random() * alphabets.length)];
};

const Game = () => {
  const [currentLetter, setCurrentLetter] = useState(randomLetter);
  const [guess, setGuess] = useState('');
  const [guessIsCorrect, setGuessIsCorrect] = useState(null);

  const handleGuessChange = event => {
    setGuess(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (guess === currentLetter.normal) {
      setGuessIsCorrect(true);
    } else {
      setGuessIsCorrect(false);
    }
    setTimeout(() => {
      const letter = randomLetter();
      setCurrentLetter({
        cyrillic: letter.cyrillic,
        normal: letter.normal
      });
      setGuessIsCorrect(null);
      setGuess('');
    }, 1500);
  };

  return (
    <div className='gameWrapper'>
      <h1> Kyrilliset aakkoset</h1>
      <Correct
        isCorrect={guessIsCorrect}
        correctLetter={currentLetter.normal}
      />
      <h2>{currentLetter.cyrillic}</h2>
      <form onSubmit={handleSubmit}>
        <input maxLength='4' value={guess} onChange={handleGuessChange}></input>
      </form>
    </div>
  );
};

export default Game;
