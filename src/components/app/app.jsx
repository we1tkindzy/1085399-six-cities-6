import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainScreen from '../main/main';
import FavoriteScreen from '../favorites/favorites';
import LoginScreen from '../login/login';
import RoomScreen from '../room/room';
import NotFoundPageScreen from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import {AppRoute} from '../../const';

const App = () => {
  return (
    <Switch>
      <Route exact path={AppRoute.MAIN}>
        <MainScreen />
      </Route>
      <PrivateRoute exact
        path={AppRoute.FAVORITES}
        render={() => <FavoriteScreen />}
      >
      </PrivateRoute>
      <Route exact path={AppRoute.LOGIN}>
        <LoginScreen />
      </Route>
      <Route exact path={AppRoute.ROOM}>
        <RoomScreen />
      </Route>
      <Route>
        <NotFoundPageScreen />
      </Route>
    </Switch>
  );
};

export default App;
