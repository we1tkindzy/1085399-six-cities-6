import {requiredAuthorization, changeAuthorizationInfo, loadErrorMessage} from '../action';
import {AuthorizationStatus} from '../../const';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  changeAuthorizationInfo: {},
  errorMessage: ``
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(requiredAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });

  builder.addCase(changeAuthorizationInfo, (state, action) => {
    state.changeAuthorizationInfo = action.payload;
  });

  builder.addCase(loadErrorMessage, (state, action) => {
    state.errorMessage = String(action.payload);
  });
});

export {user};
