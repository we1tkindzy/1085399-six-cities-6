import {SortType} from "./const";

const RATING_COUNT = 5;

export const getOffers = (city, offers) => {
  return offers.filter((offer) => offer.city.name === city);
};

export const getRating = (rating) => {
  return 100 / RATING_COUNT * rating;
};

export const sorting = (offers, sortType) => {
  switch (sortType) {
    case SortType.PRICE_LOW:
      return offers.sort((a, b) => (a.price - b.price));
    case SortType.PRICE_HIGH:
      return offers.sort((a, b) => (b.price - a.price));
    case SortType.RATING_HIGH:
      return offers.sort((a, b) => (b.rating - a.rating));
    default:
      return offers;
  }
};
