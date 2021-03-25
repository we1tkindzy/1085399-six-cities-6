import {loadOffers, loadOffer, loadNearOffers, laodReviews, loadFavorite, toggleFavorite, toggleOpenedCardFavorite, addToFavorite, removeFromFavorite} from '../action';
import {data} from './data';

describe(`Reducers work correctly`, () => {
  it(`Reducer with no additional parameters should return initial state`, () => {
    expect(data(undefined, {}))
      .toEqual({
        offers: [],
        isDataLoaded: false,
        openedOffer: {},
        nearOffers: [],
        reviews: [],
        favoriteOffers: [],
        isFavoriteOffersLoaded: false,
      });
  });

  it(`Reducer should load offers and change data loading status`, () => {
    const state = {offers: [], isDataLoaded: false};

    expect(data(state, loadOffers([{
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
        "avatar_url": `img/1.png`,
        "id": 3,
        "is_pro": true,
        "name": `Angelina`
      },
      "id": 1,
      "images": [`img/1.png`, `img/2.png`],
      "is_favorite": false,
      "is_premium": false,
      "location": {
        "latitude": 52.35514938496378,
        "longitude": 4.673877537499948,
        "zoom": 8
      },
      "max_adults": 4,
      "preview_image": `img/1.png`,
      "price": 120,
      "rating": 4.8,
      "title": `Beautiful & luxurious studio at great location`,
      "type": `apartment`
    }])))
      .toEqual({offers: [{
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
          "avatar_url": `img/1.png`,
          "id": 3,
          "is_pro": true,
          "name": `Angelina`
        },
        "id": 1,
        "images": [`img/1.png`, `img/2.png`],
        "is_favorite": false,
        "is_premium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "max_adults": 4,
        "preview_image": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      }], isDataLoaded: true});
  });

  it(`Reducer should load opened offer`, () => {
    const state = {
      openedOffer: {}
    };

    expect(data(state, loadOffer({id: 1, isFavorite: true})))
      .toEqual({
        openedOffer: {id: 1, isFavorite: true}
      });
  });

  it(`Reducer should load opened offer`, () => {
    const state = {
      nearOffers: []
    };

    expect(data(state, loadNearOffers([
      {id: 1, isFavorite: true},
      {id: 2, isFavorite: false},
      {id: 3, isFavorite: false}
    ])))
      .toEqual({
        nearOffers: [
          {id: 1, isFavorite: true},
          {id: 2, isFavorite: false},
          {id: 3, isFavorite: false}
        ]
      });
  });

  it(`Reducer should load reviews`, () => {
    const state = {
      reviews: []
    };

    expect(data(state, laodReviews([
      {id: 1, comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`}
    ])))
      .toEqual({
        reviews: [
          {id: 1, comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`}
        ]
      });
  });

  it(`Reducer should load favorite`, () => {
    const state = {
      favoriteOffers: [],
      isFavoriteOffersLoaded: false
    };

    expect(data(state, loadFavorite([
      {id: 1, isFavorite: true},
      {id: 2, isFavorite: true},
      {id: 3, isFavorite: true}
    ])))
      .toEqual({
        favoriteOffers: [
          {id: 1, isFavorite: true},
          {id: 2, isFavorite: true},
          {id: 3, isFavorite: true}
        ],
        isFavoriteOffersLoaded: true
      });
  });

  it(`Reducer should change favorite toggle for offer`, () => {
    const state = {
      offers: [
        {id: 1, isFavorite: false},
        {id: 2, isFavorite: false},
        {id: 3, isFavorite: false}
      ],
      nearOffers: [
        {id: 1, isFavorite: false},
        {id: 2, isFavorite: false},
        {id: 3, isFavorite: false}
      ]
    };

    expect(data(state, toggleFavorite({id: 1, isFavorite: true})))
      .toEqual({
        offers: [
          {id: 1, isFavorite: true},
          {id: 2, isFavorite: false},
          {id: 3, isFavorite: false}
        ],
        nearOffers: [
          {id: 1, isFavorite: true},
          {id: 2, isFavorite: false},
          {id: 3, isFavorite: false}
        ]
      });
  });

  it(`Reducer should add to favorite`, () => {
    const state = {
      openedOffer: {id: 1, isFavorite: false}
    };

    expect(data(state, toggleOpenedCardFavorite()))
      .toEqual({
        openedOffer: {id: 1, isFavorite: true}
      });
  });

  it(`Reducer should add to favorite`, () => {
    const state = {
      favoriteOffers: [
        {id: 1, isFavorite: true},
        {id: 2, isFavorite: true}
      ]
    };

    expect(data(state, addToFavorite({id: 3, isFavorite: true})))
      .toEqual({
        favoriteOffers: [
          {id: 1, isFavorite: true},
          {id: 2, isFavorite: true},
          {id: 3, isFavorite: true}
        ]
      });
  });

  it(`Reducer should remove from favorite`, () => {
    const state = {
      favoriteOffers: [
        {id: 1, isFavorite: true},
        {id: 2, isFavorite: true},
        {id: 3, isFavorite: true}
      ]
    };

    expect(data(state, removeFromFavorite(3)))
      .toEqual({
        favoriteOffers: [
          {id: 1, isFavorite: true},
          {id: 2, isFavorite: true}
        ]
      });
  });
});
