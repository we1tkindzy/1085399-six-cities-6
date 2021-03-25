import React from 'react';
import {render, screen} from "@testing-library/react";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import NotFoundPage from './not-found-page';

const mockStore = configureStore();

it(`Render 'NotFoundPage'`, () => {
  const history = createMemoryHistory();

  render(
      <redux.Provider store={mockStore({USER: {authorizationStatus: `AUTH`}})}>
        <Router history={history}>
          <NotFoundPage />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByTestId(`not-found-page`)).toBeInTheDocument();
  expect(screen.getByText(`404 Not Found`)).toBeInTheDocument();
  expect(screen.getByText(`Вернуться на главную страницу`)).toBeInTheDocument();
});
