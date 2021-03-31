import {loadOffers, loadOffer, loadNearOffers, laodReviews, loadReviewStatus, loadFavorite, toggleFavorite, toggleOpenedCardFavorite, addToFavorite, removeFromFavorite} from '../action';
import {createReducer} from '@reduxjs/toolkit';


const getItemIndex = (list, id) => {
  const idList = list.map((item) => item.id);
  return idList.indexOf(id);
};

const getToggleCardFavorite = (offer, currentOfferList) => {
  const cardIndex = getItemIndex(currentOfferList, offer.id);

  return (
    [...currentOfferList.slice(0, cardIndex), offer, ...currentOfferList.slice((cardIndex + 1), currentOfferList.length)]
  );
};

const addCardToFavoriteOffers = (newFavoriteOffer, currentFavoriteOffers) => {
  return [...currentFavoriteOffers, newFavoriteOffer];
};

const removeCardFromFavoriteOffers = (offerId, currentFavoriteOffers) => {
  const cardIndex = getItemIndex(currentFavoriteOffers, offerId);

  return (
    [...currentFavoriteOffers.slice(0, cardIndex), ...currentFavoriteOffers.slice((cardIndex + 1), currentFavoriteOffers.length)]
  );
};


const initialState = {
  offers: [],
  isDataLoaded: false,
  openedOffer: {},
  nearOffers: [],
  reviews: [],
  reviewLoadingStatus: ``,
  favoriteOffers: [],
  isFavoriteOffersLoaded: false,
};

const data = createReducer(initialState, (builder) => {
  builder.addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
    state.isDataLoaded = true;
  });

  builder.addCase(loadOffer, (state, action) => {
    state.openedOffer = action.payload;
  });

  builder.addCase(loadNearOffers, (state, action) => {
    state.nearOffers = action.payload;
  });

  builder.addCase(laodReviews, (state, action) => {
    state.reviews = action.payload;
  });

  builder.addCase(loadFavorite, (state, action) => {
    state.favoriteOffers = action.payload;
    state.isFavoriteOffersLoaded = true;
  });

  builder.addCase(toggleFavorite, (state, action) => {
    state.offers = getToggleCardFavorite(action.payload, state.offers);
    state.nearOffers = getToggleCardFavorite(action.payload, state.nearOffers);
  });

  builder.addCase(toggleOpenedCardFavorite, (state) => {
    state.openedOffer = Object.assign({}, state.openedOffer, {isFavorite: !state.openedOffer.isFavorite});
  });

  builder.addCase(addToFavorite, (state, action) => {
    state.favoriteOffers = addCardToFavoriteOffers(action.payload, state.favoriteOffers);
  });

  builder.addCase(removeFromFavorite, (state, action) => {
    state.favoriteOffers = removeCardFromFavoriteOffers(action.payload, state.favoriteOffers);
  });

  builder.addCase(loadReviewStatus, (state, action) => {
    state.reviewLoadingStatus = action.payload;
  });
});

export {data};
