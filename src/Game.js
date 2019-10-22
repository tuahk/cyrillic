import React, { useState } from 'react';

import alphabets from './alphabets';
import Correct from './Correct';
import CorrectInRow from './CorrectInRow';
import Best from './Best';

const randomLetter = () => {
  return alphabets[Math.floor(Math.random() * alphabets.length)];
};

const Game = () => {
  const [currentLetter, setCurrentLetter] = useState(randomLetter);
  const [guess, setGuess] = useState('');
  const [guessIsCorrect, setGuessIsCorrect] = useState(null);
  const [correctInRow, setCorrectInRow] = useState(0);
  const [best, setBest] = useState(0);

  const handleGuessChange = event => {
    setGuess(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (guess.toUpperCase() === currentLetter.normal.toUpperCase()) {
      setGuessIsCorrect(true);
      correctInRow >= best ? setBest(correctInRow + 1) : null;
      setCorrectInRow(correctInRow + 1);
    } else {
      setGuessIsCorrect(false);
      setCorrectInRow(0);
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
      <CorrectInRow correctInRow={correctInRow} />
      <Correct
        isCorrect={guessIsCorrect}
        correctInRow={correctInRow}
        correctLetter={currentLetter.normal}
      />
      <h2>{currentLetter.cyrillic}</h2>
      <form onSubmit={handleSubmit}>
        <input maxLength='4' value={guess} onChange={handleGuessChange}></input>
      </form>
      <Best best={best} />
      {/* <CorrectInRow correctInRow={correctInRow} /> */}
    </div>
  );
};

export default Game;
