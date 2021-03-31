import {requiredAuthorization, changeAuthorizationInfo, loadErrorMessage} from '../action';
import {user} from './user';

describe(`Reducers work correctly`, () => {
  it(`Reducer with no additional parameters should return initial state`, () => {
    expect(user(undefined, {}))
      .toEqual({
        authorizationStatus: `NO_AUTH`,
        changeAuthorizationInfo: {},
        errorMessage: ``
      });
  });

  it(`Reducer should change authorization status`, () => {
    const state = {
      authorizationStatus: `NO_AUTH`
    };

    expect(user(state, requiredAuthorization(`AUTH`)))
      .toEqual({
        authorizationStatus: `AUTH`
      });
  });

  it(`Reducer should change authorization info`, () => {
    const state = {
      changeAuthorizationInfo: {
        email: ``
      }
    };

    expect(user(state, changeAuthorizationInfo({email: `Oliver.conner@gmail.com`})))
      .toEqual({
        changeAuthorizationInfo: {
          email: `Oliver.conner@gmail.com`
        }
      });
  });

  it(`Reducer should load error message`, () => {
    const state = {
      errorMessage: ``
    };

    expect(user(state, loadErrorMessage(`Connection error.`)))
      .toEqual({
        errorMessage: `Connection error.`
      });
  });
});
