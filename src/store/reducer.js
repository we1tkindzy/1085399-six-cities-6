import {ActionType} from './action';
import {SortType, CityName, AuthorizationStatus} from '../const';


const initialState = {
  city: CityName[0],
  offers: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  activeSort: SortType.POPULAR,
  activeOffer: false,
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

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };

    default:
      return state;
  }
};

export {reducer};
