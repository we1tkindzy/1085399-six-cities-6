import React from 'react';
import REactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  CARDS_COUNT: 5
};

REactDOM.render(
    <App
      cardsCount={Setting.CARDS_COUNT}
    />,
    document.querySelector(`#root`)
);
