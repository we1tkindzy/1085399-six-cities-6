import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import MainScreen from '../main/main';
import FavoriteScreen from '../favorites/favorites';
import LoginScreen from '../login/login';
import RoomScreen from '../room/room';
import NotFoundPageScreen from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import browserHistory from "../../browser-history";
import {AppRoute} from '../../const';

const App = (props) => {
  const {offers} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainScreen offers={offers}/>
        </Route>
        <PrivateRoute exact
          path={AppRoute.FAVORITES}
          render={() => <FavoriteScreen offers={offers} />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.LOGIN}>
          <LoginScreen />
        </Route>
        <Route exact path={AppRoute.ROOM}>
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
  offers: PropTypes.array.isRequired,
};

export default App;
