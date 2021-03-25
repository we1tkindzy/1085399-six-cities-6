import React from 'react';
import {render, screen} from "@testing-library/react";
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import FormSubmit from './form-submit';

const mockStore = configureStore();

it(`Render 'FormSubmit'`, () => {

  render(
      <redux.Provider store={mockStore({DATA: {openedOffer: {id: 1}}})}>
        <FormSubmit />
      </redux.Provider>
  );

  expect(screen.getByTestId(`reviews-form`)).toBeInTheDocument();
  expect(screen.getByTestId(`reviews-form-rating`)).toBeInTheDocument();
  expect(screen.getByTestId(`reviews-form-input`)).toBeInTheDocument();
  expect(screen.getByTestId(`reviews-form-submit`)).toBeInTheDocument();

  expect(screen.getByText(`Your review`)).toBeInTheDocument();
  expect(screen.getByText(`Submit`)).toBeInTheDocument();

  userEvent.type(screen.getByTestId(`reviews-form-input`), `The house is very good, very happy, hygienic and simple living conditions around it are also very good.`);
  expect(screen.getByDisplayValue(`The house is very good, very happy, hygienic and simple living conditions around it are also very good.`)).toBeInTheDocument();
});

