const RATING_COUNT = 5;

export const getOffers = (city, offers) => {
  return offers.filter((offer) => offer.city.name === city);
};

export const getRating = (rating) => {
  return 100 / RATING_COUNT * rating;
};
