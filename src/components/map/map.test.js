import React from 'react';
import {render, screen} from "@testing-library/react";
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import Map from './map';

const mockStore = configureStore();

const testOffer = [
  {
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": `Paris`
    },
    "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.`,
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
      "name": `Paris`
    },
    "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.`,
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
      "name": `Paris`
    },
    "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.`,
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
];

const testCityCoords = {
  "location": {
    "latitude": 52.370216,
    "longitude": 4.895168,
    "zoom": 10
  },
  "name": `Amsterdam`
};

it(`Render 'Map'`, () => {
  render(
      <redux.Provider store={mockStore({OFFERS: {activeOffer: false}, DATA: {openedOffer: {id: 2}}})}>
        <Map offers={testOffer} city={testCityCoords} pageType={`near-places__list`}/>
      </redux.Provider>
  );

  expect(screen.getByTestId(`map`)).toBeInTheDocument();
});
