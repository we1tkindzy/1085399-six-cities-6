export const ActionType = {
  INCREMENT_CITY: `list/incrementCity`,
  INCREMENT_OFFERS: `list/incrementOffers`,
  INCREMENT_SORT: `list/sort`,
  INCREMENT_ACTIVE_OFFER: `list/ActiveOffer`,
  INCREMENT_REMOVE_ACTIVE_OFFER: `list/removeActiveOffer`
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
  })
};
