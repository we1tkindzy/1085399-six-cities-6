export const ActionType = {
  INCREMENT_CITY: `list/incrementCity`,
  INCREMENT_OFFERS: `list/incrementOffers`,
  INCREMENT_SORT: `list/sort`,
  INCREMENT_ACTIVE_OFFER: `offers/ActiveOffer`,
  INCREMENT_REMOVE_ACTIVE_OFFER: `offers/removeActiveOffer`,
  LOAD_OFFERS: `data/loadOffers`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
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
  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  })
};
