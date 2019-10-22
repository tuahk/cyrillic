import React from 'react';

const CorrectInRow = ({ correctInRow }) => {
  if (correctInRow > 0) {
    return (
      <p className='correctInRow'>
        Sinulla on jo <span className='text-bold'>{correctInRow}</span>{' '}
        peräkkäin oikein!
      </p>
    );
  } else {
    return (
      <p className='correctInRow'>
        Yritä saada mahdollisimman monta oikein peräkkäin.
      </p>
    );
  }
};

export default CorrectInRow;
