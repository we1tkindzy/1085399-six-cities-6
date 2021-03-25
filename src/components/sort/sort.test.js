import React from 'react';
import {render, screen} from "@testing-library/react";
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import Sort from './sort';

const mockStore = configureStore();

it(`Render 'Sort'`, () => {
  render(
      <redux.Provider store={mockStore({OFFERS: {activeSort: `Popular`}})}>
        <Sort />
      </redux.Provider>
  );

  expect(screen.getByText(`Sort by`)).toBeInTheDocument();
  expect(screen.getByTestId(`sort-type`)).toBeInTheDocument();
  expect(screen.getByText(`Popular`)).toBeInTheDocument();
});
