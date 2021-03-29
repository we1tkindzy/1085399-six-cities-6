import React from 'react';
import {render, screen} from "@testing-library/react";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import App from '../../components/app/app';

const mockStore = configureStore();

const testRoomPage = {
  OFFERS: {
    city: `Paris`,
    activeOffer: false,
  },
  DATA: {
    offers: [
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
    ],
    isDataLoaded: true,
    openedOffer: {
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
    nearOffers: [
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
        "id": 4,
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
    ],
    reviews: [
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
    ],
  },
  USER: {
    authorizationStatus: `AUTH`,
    changeAuthorizationInfo: {
      email: `Oliver.conner@gmail.com`,
      password: `123`
    }
  }
};

describe(`Test 'Room'`, () => {
  it(`Render 'Room'`, () => {
    jest.spyOn(redux, `useSelector`);
    jest.spyOn(redux, `useDispatch`);

    const history = createMemoryHistory();
    history.push(`/offer/:1`);

    render(
        <redux.Provider store={mockStore(testRoomPage)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`header-logo`)).toBeInTheDocument();
    expect(screen.getByTestId(`header-nav`)).toBeInTheDocument();

    expect(screen.getByTestId(`room`)).toBeInTheDocument();
    expect(screen.getByTestId(`room-bookmark`)).toBeInTheDocument();
    expect(screen.getByTestId(`room-inside`)).toBeInTheDocument();
    expect(screen.getByTestId(`room-host`)).toBeInTheDocument();
    expect(screen.getByText(`Meet the host`)).toBeInTheDocument();
  });

  it(`Logic should worked correctly`, () => {
    const history = createMemoryHistory();
    history.push(`/offer/:1`);

    const fakeDispatch = jest.spyOn(redux, `useDispatch`).mockImplementation(() => jest.fn());

    render(
        <redux.Provider store={mockStore(testRoomPage)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    userEvent.click(screen.getByTestId(`room-bookmark`));
    expect(fakeDispatch).toBeCalled();
  });
});
