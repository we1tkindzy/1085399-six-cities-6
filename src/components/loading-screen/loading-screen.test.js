import React from 'react';
import {render, screen} from '@testing-library/react';
import LoadingScreen from './loading-screen';

it(`Render 'LoadingScreen'`, () => {

  render(
      <LoadingScreen />
  );

  expect(screen.getByTestId(`loading`)).toBeInTheDocument();
});
