export const ActionType = {
  INCREMENT_CITY: `list/incrementCity`,
  INCREMENT_OFFERS: `list/incrementOffers`,
};

export const ActionCreator = {
  incrementCity: (city) => ({
    type: ActionType.INCREMENT_CITY,
    payload: city,
  }),
  incrementOffers: () => ({
    type: ActionType.INCREMENT_OFFERS,
  })
};
