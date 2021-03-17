import {combineReducers} from 'redux';
import {offers} from './offers/offers';
import {data} from './data/data';
import {user} from './user/user';


export const NameSpace = {
  OFFERS: `OFFERS`,
  DATA: `DATA`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.OFFERS]: offers,
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user
});
