export const ActionType = {
  INCREMENT_CITY: `list/incrementCity`,
  INCREMENT_OFFERS: `list/incrementOffers`,
  INCREMENT_SORT: `list/sort`,
  INCREMENT_ACTIVE_OFFER: `offers/ActiveOffer`,
  INCREMENT_REMOVE_ACTIVE_OFFER: `offers/removeActiveOffer`,
  LOAD_OFFERS: `data/loadOffers`,
  LOAD_OFFER: `data/loadOffer`,
  LOAD_NEAR_OFFERS: `data/loadNearOffers`,
  LOAD_REVIEWS: `data/laodReviews`,
  LOAD_FAVORITE: `data/loadFavorite`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  REDIRECT_TO_ROUTE: `/redirectToRoute`,
  AUTHORIZATION_INFO: `user/login`,
};

export const ActionCreator = {
  incrementCity: (city) => ({
    type: ActionType.INCREMENT_CITY,
    payload: city,
  }),
  incrementOffers: () => ({
    type: ActionType.INCREMENT_OFFERS,
  }),
  incrementSort: (sort) => ({
    type: ActionType.INCREMENT_SORT,
    payload: sort
  }),
  incrementActiveOffer: (id) => ({
    type: ActionType.INCREMENT_ACTIVE_OFFER,
    payload: id
  }),
  incrementRemoveActiveOffer: () => ({
    type: ActionType.INCREMENT_REMOVE_ACTIVE_OFFER
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: offer
  }),
  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url
  }),
  authorizationInfo: (info) => ({
    type: ActionType.AUTHORIZATION_INFO,
    payload: info
  }),
  loadNearOffers: (offers) => ({
    type: ActionType.LOAD_NEAR_OFFERS,
    payload: offers
  }),
  laodReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews
  }),
  loadFavorite: (offers) => ({
    type: ActionType.LOAD_FAVORITE,
    payload: offers
  }),
};
