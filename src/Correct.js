import React from 'react';

const CorrectElement = ({ text, result }) => {
  return <p className={`correct ${result}`}>{text}</p>;
};

const Correct = ({ isCorrect, correctLetter }) => {
  if (isCorrect) {
    return <CorrectElement text='Vastaus oikein!' result='success' />;
  } else if (isCorrect === false) {
    return (
      <CorrectElement
        text={`Pahus! Oikea vastaus on ${correctLetter}`}
        result='fail'
      />
    );
  } else return null;
};

export default Correct;
