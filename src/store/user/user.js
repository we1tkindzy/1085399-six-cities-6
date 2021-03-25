import {requiredAuthorization, changeAuthorizationInfo} from '../action';
import {AuthorizationStatus} from '../../const';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  changeAuthorizationInfo: {},
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(requiredAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });

  builder.addCase(changeAuthorizationInfo, (state, action) => {
    state.changeAuthorizationInfo = action.payload;
  });
});

export {user};
