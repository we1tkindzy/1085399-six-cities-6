import {ActionType} from './action';
import offers from '../mocks/offers';
import {SortType, CityName} from '../const';


const initialState = {
  city: CityName[0],
  offers,
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

    default:
      return state;
  }
};

export {reducer};
