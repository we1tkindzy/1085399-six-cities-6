import {incrementCity, incrementSort, incrementActiveOffer, incrementRemoveActiveOffer} from '../action';
import {CityName, SortType} from '../../const';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  city: CityName[0],
  activeSort: SortType.POPULAR,
  activeOffer: false,
};

const offers = createReducer(initialState, (builder) => {
  builder.addCase(incrementCity, (state, action) => {
    state.city = action.payload;
  });

  builder.addCase(incrementSort, (state, action) => {
    state.activeSort = action.payload;
  });

  builder.addCase(incrementActiveOffer, (state, action) => {
    state.activeOffer = action.payload;
  });

  builder.addCase(incrementRemoveActiveOffer, (state) => {
    state.activeOffer = false;
  });
});

export {offers};
