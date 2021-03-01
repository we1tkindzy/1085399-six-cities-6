import {ActionType} from './action';
import offers from '../mocks/offers';


const initialState = {
  city: `Paris`,
  offers,
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

    default:
      return state;
  }
};

export {reducer};
