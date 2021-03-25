import React from 'react';
import {render, screen} from "@testing-library/react";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import Favorites from './favorites';

const mockStore = configureStore();

const testFavoritesPage = {
  DATA: {
    favoriteOffers: [
      {
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Amsterdam`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatarUrl": `img/1.png`,
          "id": 3,
          "isPro": true,
          "name": `Angelina`
        },
        "id": 1,
        "images": [`img/1.png`, `img/2.png`],
        "isFavorite": true,
        "isPremium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "maxAdults": 4,
        "previewImage": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      },
      {
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Amsterdam`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatarUrl": `img/1.png`,
          "id": 3,
          "isPro": true,
          "name": `Angelina`
        },
        "id": 2,
        "images": [`img/1.png`, `img/2.png`],
        "isFavorite": true,
        "isPremium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "maxAdults": 4,
        "previewImage": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `The house among olive`,
        "type": `house`
      },
      {
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Amsterdam`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatarUrl": `img/1.png`,
          "id": 3,
          "isPro": true,
          "name": `Angelina`
        },
        "id": 3,
        "images": [`img/1.png`, `img/2.png`],
        "isFavorite": true,
        "isPremium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "maxAdults": 4,
        "previewImage": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Waterfront with extraordinary view`,
        "type": `room`
      }
    ],
    isFavoriteOffersLoaded: true
  },
  USER: {
    authorizationStatus: `AUTH`,
    changeAuthorizationInfo: {
      email: `Oliver.conner@gmail.com`,
      password: `123`
    }
  }
};

it(`Render 'Favorites'`, () => {
  const history = createMemoryHistory();

  render(
      <redux.Provider store={mockStore(testFavoritesPage)}>
        <Router history={history}>
          <Favorites />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByTestId(`header-logo`)).toBeInTheDocument();
  expect(screen.getByTestId(`header-nav`)).toBeInTheDocument();

  expect(screen.getByTestId(`favorites`)).toBeInTheDocument();
  expect(screen.getByText(`Saved listing`)).toBeInTheDocument();

  expect(screen.getByTestId(`offers-list`)).toBeInTheDocument();
});
