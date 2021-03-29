import React from 'react';
import {render, screen} from "@testing-library/react";
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import Sort from './sort';
import {SortType} from '../../const';

const mockStore = configureStore();

describe(`Test 'Sort'`, () => {
  it(`Render 'Sort'`, () => {
    render(
        <redux.Provider store={mockStore({OFFERS: {activeSort: `Popular`}})}>
          <Sort />
        </redux.Provider>
    );

    expect(screen.getByText(`Sort by`)).toBeInTheDocument();
    expect(screen.getByTestId(`sort-type`)).toBeInTheDocument();

    for (const item of Object.values(SortType)) {
      expect(screen.getByTestId(item)).toBeInTheDocument();
    }

    expect(screen.getByTestId(`Popular`)).toHaveClass(`places__option--active`);
    expect(screen.getByTestId(`Price: low to high`)).not.toHaveClass(`places__option--active`);
  });

  it(`Should call dispatch when user click on sort`, () => {
    const fakeDispatch = jest.spyOn(redux, `useDispatch`);

    render(
        <redux.Provider store={mockStore({OFFERS: {activeSort: ``}})}>
          <Sort />
        </redux.Provider>
    );

    userEvent.click(screen.getByTestId(`sort-type`));
    expect(screen.getByTestId(`sort-list`)).toHaveClass(`places__options--opened`);

    userEvent.click(screen.getByTestId(`Popular`));
    expect(fakeDispatch).toBeCalled();
    expect(screen.getByTestId(`sort-list`)).not.toHaveClass(`places__options--opened`);
  });
});
