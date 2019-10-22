import React from 'react';
import CorrectInRow from './CorrectInRow';

const CorrectElement = ({ text, classes }) => {
  return <p className={`correct ${classes}`}>{text}</p>;
};

const Correct = ({ isCorrect, correctInRow, correctLetter }) => {
  if (isCorrect) {
    return <CorrectElement text={'Vastaus oikein!'} classes='text-green' />;
  } else if (isCorrect === false) {
    return (
      <CorrectElement
        text={`Pahus! Oikea vastaus on ${correctLetter}`}
        classes='text-red text-bold'
      />
    );
  } else {
    return <CorrectInRow correctInRow={correctInRow} />;
  }
};

export default Correct;
