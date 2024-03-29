import React from 'react';
import REactDOM from 'react-dom';
import {configureStore} from "@reduxjs/toolkit";
import {createAPI} from './api';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import App from './components/app/app';
import rootReducer from './store/root-reducer';
import {requiredAuthorization} from './store/action';
import {checkAuth} from "./store/api-actions";
import {AuthorizationStatus} from "./const";
import {redirect} from "./store/middlewares/redirect";
import browserHistory from "./browser-history";

const api = createAPI(
    () => store.dispatch(requiredAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect)
});

store.dispatch(checkAuth()).then(() => {
  REactDOM.render(
      <Provider store={store}>
        <BrowserRouter history={browserHistory}>
          <App />
        </BrowserRouter>
      </Provider>,
      document.querySelector(`#root`)
  );
});
