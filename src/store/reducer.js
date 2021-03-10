import {ActionType} from './action';
import {SortType, CityName, AuthorizationStatus} from '../const';


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
        favoriteOffers: action.payload
      };

    default:
      return state;
  }
};

export {reducer};
