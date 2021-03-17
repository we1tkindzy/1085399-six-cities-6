import {NameSpace} from '../root-reducer';

export const getCity = (state) => state[NameSpace.OFFERS].city;
export const getActiveSort = (state) => state[NameSpace.OFFERS].activeSort;
export const getActiveOffer = (state) => state[NameSpace.OFFERS].activeOffer;
