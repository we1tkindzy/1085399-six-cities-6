export const city = {
  lat: 52.38333,
  lng: 4.9,
  zoom: 12
};

export const CityName = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

export const SortType = {
  POPULAR: `Popular`,
  PRICE_LOW: `Price: low to high`,
  PRICE_HIGH: `Price: high to low`,
  RATING_HIGH: `Top rated first`
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const AppRoute = {
  MAIN: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  ROOM: `/offer/:id`,
  NOT_FOUND: `/404`,
};

export const APIRoute = {
  OFFERS: `/hotels`,
  FAVORITES: `/favorite`,
  REVIEWS: `/comments`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
};

export const PageType = {
  MAIN: `cities__places-list tabs__content`,
  ROOM: `near-places__list`,
  FAVORITE: {
    article: `favorites__card`,
    img: `favorites__image-wrapper`,
    cardImfo: `favorites__card-info`,
    height: `110`,
    width: `150`
  },
};

export const reviewLength = {
  MIN_LENGTH: 50
};
