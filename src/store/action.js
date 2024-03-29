import {createAction} from "@reduxjs/toolkit";

export const ActionType = {
  INCREMENT_CITY: `offers/incrementCity`,
  INCREMENT_SORT: `offers/sort`,
  INCREMENT_ACTIVE_OFFER: `offers/ActiveOffer`,
  INCREMENT_REMOVE_ACTIVE_OFFER: `offers/removeActiveOffer`,
  LOAD_OFFERS: `data/loadOffers`,
  LOAD_OFFER: `data/loadOffer`,
  LOAD_NEAR_OFFERS: `data/loadNearOffers`,
  LOAD_REVIEWS: `data/laodReviews`,
  LOAD_REVIEW_STATUS: `data/loadReviewStatus`,
  LOAD_FAVORITE: `data/loadFavorite`,
  REDIRECT_TO_ROUTE: `data/redirectToRoute`,
  TOGGLE_FAVORITE: `data/toggleFavorite`,
  TOGGLE_OPENED_CARD_FAVORITE: `data/toggleOpenedCardFavorite`,
  ADD_TO_FAVORITE: `data/addToFavorite`,
  REMOVE_FROM_FAVORITE: `data/removeFromFavorite`,
  CHANGE_AUTHORIZATION_INFO: `user/changeLogin`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_ERROR_MESSAGE: `user/loadErrorMessage`
};

export const incrementCity = createAction(ActionType.INCREMENT_CITY, (city) => {
  return {
    payload: city,
  };
});

export const incrementSort = createAction(ActionType.INCREMENT_SORT, (sort) => {
  return {
    payload: sort
  };
});

export const incrementActiveOffer = createAction(ActionType.INCREMENT_ACTIVE_OFFER, (id) => {
  return {
    payload: id
  };
});

export const incrementRemoveActiveOffer = createAction(ActionType.INCREMENT_REMOVE_ACTIVE_OFFER);

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => {
  return {
    payload: offers
  };
});

export const loadOffer = createAction(ActionType.LOAD_OFFER, (offer) => {
  return {
    payload: offer
  };
});

export const requiredAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => {
  return {
    payload: status
  };
});

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url
  };
});

export const changeAuthorizationInfo = createAction(ActionType.CHANGE_AUTHORIZATION_INFO, (info) => {
  return {
    payload: info
  };
});

export const loadNearOffers = createAction(ActionType.LOAD_NEAR_OFFERS, (offers) => {
  return {
    payload: offers
  };
});

export const laodReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => {
  return {
    payload: reviews
  };
});

export const loadFavorite = createAction(ActionType.LOAD_FAVORITE, (offers) => {
  return {
    payload: offers
  };
});

export const toggleFavorite = createAction(ActionType.TOGGLE_FAVORITE, (id) => {
  return {
    payload: id
  };
});

export const toggleOpenedCardFavorite = createAction(ActionType.TOGGLE_OPENED_CARD_FAVORITE);

export const addToFavorite = createAction(ActionType.ADD_TO_FAVORITE, (offer) => {
  return {
    payload: offer
  };
});

export const removeFromFavorite = createAction(ActionType.REMOVE_FROM_FAVORITE, (id) => {
  return {
    payload: id
  };
});

export const loadReviewStatus = createAction(ActionType.LOAD_REVIEW_STATUS, (status) => {
  return {
    payload: status
  };
});

export const loadErrorMessage = createAction(ActionType.LOAD_ERROR_MESSAGE, (message) => {
  return {
    payload: message
  };
});
