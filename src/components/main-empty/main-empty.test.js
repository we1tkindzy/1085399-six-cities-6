import React from 'react';
import {render, screen} from "@testing-library/react";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import MainEmpty from './main-empty';

const mockStore = configureStore();

it(`Render 'MainEmpty'`, () => {
  const history = createMemoryHistory();

  render(
      <redux.Provider store={mockStore({OFFERS: {city: `Paris`}})}>
        <Router history={history}>
          <MainEmpty city={`Paris`}/>
        </Router>
      </redux.Provider>
  );

  expect(screen.getByTestId(`main-page-empty`)).toBeInTheDocument();
  expect(screen.getByText(`No places to stay available`)).toBeInTheDocument();
  expect(screen.getByText(`We could not find any property available at the moment in Paris`)).toBeInTheDocument();
});
