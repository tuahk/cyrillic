import React from 'react';
import ReactDOM from 'react-dom';

import Game from './Game';

const App = () => {
  return (
    <div className='appWrapper'>
      <Game />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
