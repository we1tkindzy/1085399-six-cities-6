import React from 'react';
import {render, screen} from "@testing-library/react";
import FavoriteEmpty from './favorites-empty';

it(`Render 'FavoriteEmpty'`, () => {
  render(
      <FavoriteEmpty />
  );

  expect(screen.getByTestId(`favorite-empty-page`)).toBeInTheDocument();
  expect(screen.getByText(`Nothing yet saved.`)).toBeInTheDocument();
  expect(screen.getByText(`Save properties to narrow down search or plan your future trips.`)).toBeInTheDocument();
});
