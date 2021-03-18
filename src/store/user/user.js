import {requiredAuthorization, authorizationInfo} from '../action';
import {AuthorizationStatus} from '../../const';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationInfo: {},
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(requiredAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });

  builder.addCase(authorizationInfo, (state, action) => {
    state.authorizationInfo = action.payload;
  });
});

export {user};
