import React from 'react';
import {render, screen} from "@testing-library/react";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import Login from './login';

const mockStore = configureStore();

it(`Render 'Login' when user navigate to '/login' url`, () => {
  const history = createMemoryHistory();
  history.push(`/login`);

  render(
      <redux.Provider store={mockStore({USER: {authorizationStatus: `NO_AUTH`}})}>
        <Router history={history}>
          <Login />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByTestId(`login-title`)).toBeInTheDocument();
  expect(screen.getByTestId(`login-submit`)).toBeInTheDocument();
  expect(screen.getByLabelText(`E-mail`)).toBeInTheDocument();
  expect(screen.getByLabelText(`Password`)).toBeInTheDocument();

  userEvent.type(screen.getByTestId(`email`), `test@test.ru`);
  userEvent.type(screen.getByTestId(`password`), `123456`);

  expect(screen.getByDisplayValue(`test@test.ru`)).toBeInTheDocument();
  expect(screen.getByDisplayValue(`123456`)).toBeInTheDocument();
});
