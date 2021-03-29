import React from 'react';
import {render, screen} from "@testing-library/react";
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import CitiesList from './cities-list';
import {CityName} from '../../const';

const mockStore = configureStore();

describe(`Test 'CitiesList'`, () => {
  it(`Render 'CitiesList'`, () => {
    render(
        <redux.Provider store={mockStore({OFFERS: {city: `Paris`}})}>
          <CitiesList />
        </redux.Provider>
    );

    for (const item of CityName) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
  });

  it(`Should call dispatch when user click on city`, () => {
    const fakeDispatch = jest.spyOn(redux, `useDispatch`);

    render(
        <redux.Provider store={mockStore({OFFERS: {city: ``}})}>
          <CitiesList />
        </redux.Provider>
    );

    for (const item of CityName) {
      userEvent.click(screen.getByText(item));
      expect(fakeDispatch).toBeCalled();
    }
  });
});
