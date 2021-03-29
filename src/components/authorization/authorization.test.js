import React from 'react';
import {render, screen} from "@testing-library/react";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import Authorization from './authorization';

const mockStore = configureStore();

describe(`Should correct render 'isLogined' with different parameters`, () => {
  it(`Render 'Authorization'`, () => {
    const history = createMemoryHistory();

    render(
        <redux.Provider store={mockStore({USER: {authorizationStatus: ``, changeAuthorizationInfo: {email: ``}}})}>
          <Router history={history}>
            <Authorization />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`authorization`)).toBeInTheDocument();
  });

  it(`Render 'Authorization' with no authorization`, () => {
    const history = createMemoryHistory();

    render(
        <redux.Provider store={mockStore({USER: {authorizationStatus: `NO_AUTH`}})}>
          <Router history={history}>
            <Authorization />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`Sign in`)).toBeInTheDocument();
  });

  it(`Render 'Authorization' with authorization`, () => {
    const history = createMemoryHistory();

    render(
        <redux.Provider store={mockStore({USER: {authorizationStatus: `AUTH`, changeAuthorizationInfo: {email: `test@test.com`}}})}>
          <Router history={history}>
            <Authorization />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`test@test.com`)).toBeInTheDocument();
  });
});

