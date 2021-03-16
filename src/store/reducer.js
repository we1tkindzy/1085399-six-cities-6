import {ActionType} from './action';
import {SortType, CityName, AuthorizationStatus} from '../const';


const getItemIndex = (list, id) => {
  const idList = list.map((item) => item.id);
  return idList.indexOf(id);
};

const toggleCardFavorite = (offer, currentOfferList) => {
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
  city: CityName[0],
  offers: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationInfo: {},
  isDataLoaded: false,
  activeSort: SortType.POPULAR,
  activeOffer: false,
  openedOffer: {},
  nearOffers: [],
  reviews: [],
  favoriteOffers: [],
  isFavoriteOffersLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_CITY:
      return {
        ...state,
        city: action.payload
      };

    case ActionType.INCREMENT_OFFERS:
      return {
        ...state,
        offers: action.payload
      };

    case ActionType.INCREMENT_SORT:
      return {
        ...state,
        activeSort: action.payload
      };

    case ActionType.INCREMENT_ACTIVE_OFFER:
      return {
        ...state,
        activeOffer: action.payload
      };

    case ActionType.INCREMENT_REMOVE_ACTIVE_OFFER:
      return {
        ...state,
        activeOffer: false
      };

    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true
      };

    case ActionType.LOAD_OFFER:
      return {
        ...state,
        openedOffer: action.payload
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };

    case ActionType.AUTHORIZATION_INFO:
      return {
        ...state,
        authorizationInfo: action.payload
      };

    case ActionType.LOAD_NEAR_OFFERS:
      return {
        ...state,
        nearOffers: action.payload
      };

    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      };

    case ActionType.LOAD_FAVORITE:
      return {
        ...state,
        favoriteOffers: action.payload,
        isFavoriteOffersLoaded: true
      };

    case ActionType.TOGGLE_FAVORITE:
      return {
        ...state,
        offers: toggleCardFavorite(action.payload, state.offers)
      };

    case ActionType.TOGGLE_OPENED_CARD_FAVORITE:
      return {
        ...state,
        openedOffer: Object.assign({}, state.openedOffer, {isFavorite: !state.openedOffer.isFavorite})
      };

    case ActionType.ADD_TO_FAVORITE:
      return {
        ...state,
        favoriteOffers: addCardToFavoriteOffers(action.payload, state.favoriteOffers)
      };

    case ActionType.REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favoriteOffers: removeCardFromFavoriteOffers(action.payload, state.favoriteOffers)
      };

    default:
      return state;
  }
};

export {reducer};
