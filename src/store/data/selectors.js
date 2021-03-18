import {NameSpace} from '../root-reducer';

export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getIsDataLoaded = (state) => state[NameSpace.DATA].isDataLoaded;
export const getOpenedOffer = (state) => state[NameSpace.DATA].openedOffer;
export const getNearOffers = (state) => state[NameSpace.DATA].nearOffers;
export const getReviews = (state) => state[NameSpace.DATA].reviews;
export const getFavoriteOffers = (state) => state[NameSpace.DATA].favoriteOffers;
export const getIsFavoriteOffersLoaded = (state) => state[NameSpace.DATA].isFavoriteOffersLoaded;
