import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainScreen from '../main/main';
import FavoriteScreen from '../favorites/favorites';
import LoginScreen from '../login/login';
import RoomScreen from '../room/room';
import NotFoundPageScreen from '../not-found-page/not-found-page';

const App = (props) => {
  const {cardsCount, offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen cardsCount={cardsCount} offers={offers}/>
        </Route>
        <Route exact path="/favorites">
          <FavoriteScreen offers={offers}/>
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/offer/:id">
          <RoomScreen offers={offers}/>
        </Route>
        <Route>
          <NotFoundPageScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cardsCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
};

export default App;
