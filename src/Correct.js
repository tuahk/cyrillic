import React from 'react';

const CorrectElement = ({ text }) => {
  return <p className='correct'>{text}</p>;
};

const Correct = ({ isCorrect, correctLetter }) => {
  if (isCorrect) {
    return <CorrectElement text='Vastaus oikein!' />;
  } else if (isCorrect === false) {
    return <CorrectElement text={`Pahus! Oikea vastaus on ${correctLetter}`} />;
  } else return null;
};

export default Correct;
