import React from 'react';

const Best = ({ best }) => {
  if (best > 0) {
    return <p className='best'>Ennätyksesi: {best} oikein</p>;
  } else {
    return <p className='best'></p>;
  }
};

export default Best;
