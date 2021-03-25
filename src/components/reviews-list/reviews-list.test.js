import React from 'react';
import {render, screen} from '@testing-library/react';

import ReviewsList from './reviews-list';

const testReviewsList = [
  {
    "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "date": `2019-05-08T14:13:56.569Z`,
    "id": 1,
    "rating": 4,
    "user": {
      "avatarUrl": `img/1.png`,
      "id": 4,
      "isPro": false,
      "name": `Max`
    }
  },
  {
    "comment": `The house is very good, very happy, hygienic and simple living conditions around it are also very good.`,
    "date": `2019-05-08T14:13:56.569Z`,
    "id": 2,
    "rating": 4,
    "user": {
      "avatarUrl": `img/1.png`,
      "id": 4,
      "isPro": false,
      "name": `Max`
    }
  }
];

it(`Render 'ReviewsList'`, () => {
  render(
      <ReviewsList reviews={testReviewsList} />
  );

  expect(screen.getByTestId(`reviews-list`)).toBeInTheDocument();

  expect(screen.getByTestId(`review-1`)).toBeInTheDocument();
  expect(screen.getByTestId(`review-1-user-info`)).toBeInTheDocument();
  expect(screen.getByTestId(`review-1-info`)).toBeInTheDocument();

  expect(screen.getByText(`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`)).toBeInTheDocument();


  expect(screen.getByTestId(`review-2`)).toBeInTheDocument();
  expect(screen.getByTestId(`review-2-user-info`)).toBeInTheDocument();
  expect(screen.getByTestId(`review-2-info`)).toBeInTheDocument();

  expect(screen.getByText(`The house is very good, very happy, hygienic and simple living conditions around it are also very good.`)).toBeInTheDocument();
});
