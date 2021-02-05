import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main/main';

const App = (props) => {
  const {cardsCount} = props;

  return (
    <MainScreen cardsCount={cardsCount}/>
  );
};

App.propTypes = {
  cardsCount: PropTypes.number.isRequired,
};

export default App;
