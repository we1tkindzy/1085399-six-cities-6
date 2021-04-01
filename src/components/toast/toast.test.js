import React from 'react';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import Toast from './toast';

const mockStore = configureStore();

it(`Render 'Toast'`, () => {
  render(
      <redux.Provider store={mockStore({USER: {errorMessage: `Connection error.`}})}>
        <Toast />
      </redux.Provider>
  );

  expect(screen.getByTestId(`toast`)).toBeInTheDocument();
  expect(screen.getByText(`Connection error. Please retry later.`)).toBeInTheDocument();

  setTimeout(() => {
    expect(screen.getByText(`Connection error. Please retry later.`)).not.toBeInTheDocument();
  }, 5000);
});
