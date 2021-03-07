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
};

export const APIRoute = {
  OFFERS: `/hotels`,
  OFFER: `/hotels/:id`,
  OFFERS_NEARBY: `/hotels/:hotel_id/nearby`,
  FAVORITES: `/favorite`,
  REVIEWS: `/comments/:hotel_id`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
};
