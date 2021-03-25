import MockAdapter from 'axios-mock-adapter';
import {createAPI} from './../api';
import {ActionType} from './action';
import {fetchOffersList, fetchOpenedOffer, fetchFavoriteOffers, onToggleCardFavorite, submitComment, checkAuth, login} from './api-actions';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';

const api = createAPI(() => {});

const initialOffer = {
  "id": 1,
  "host": {
    "avatar_url": `image/avatar.jpg`,
    "is_pro": false
  },
  "is_favorite": false,
  "is_premium": false,
  "max_adults": 4,
  "preview_image": `image/preview.png`
};

const adaptedOffer = {
  "id": 1,
  "host": {
    "avatarUrl": `image/avatar.jpg`,
    "isPro": false
  },
  "isFavorite": false,
  "isPremium": false,
  "maxAdults": 4,
  "previewImage": `image/preview.png`
};

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffersList();

    apiMock
      .onGet(APIRoute.OFFERS)
      .reply(200, [initialOffer]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [adaptedOffer]
        });
      });
  });

  it(`Should make a correct API call to /hotels/:id, /hotel/:id/nearby, /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const openedOfferLoader = fetchOpenedOffer(id);

    apiMock
      .onGet(`${APIRoute.OFFERS}/${id}`)
      .reply(200, initialOffer);

    apiMock
      .onGet(`${APIRoute.OFFERS}/${id}/nearby`)
      .reply(200, [initialOffer]);

    apiMock
      .onGet(`${APIRoute.REVIEWS}/${id}`)
      .reply(200, [{
        "user": {
          "is_pro": false,
          "avatar_url": `image/avatar.jpg`
        }
      }]);


    return openedOfferLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFER,
          payload: adaptedOffer
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_NEAR_OFFERS,
          payload: [adaptedOffer]
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.LOAD_REVIEWS,
          payload: [{
            "user": {
              "isPro": false,
              "avatarUrl": `image/avatar.jpg`
            }
          }]
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteOffersLoader = fetchFavoriteOffers();

    apiMock
      .onGet(APIRoute.FAVORITES)
      .reply(200, [initialOffer]);

    return favoriteOffersLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE,
          payload: [adaptedOffer]
        });
      });
  });

  it(`Should make a correct API call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const comment = {comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`, rating: 4};
    const submitterComments = submitComment(id, comment);

    apiMock
      .onPost(`${APIRoute.REVIEWS}/${id}`)
      .reply(200, [{
        "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "date": `2019-06-08T14:13:56.569Z`,
        "id": 1,
        "rating": 4,
        "user": {
          "avatar_url": `img/1.png`,
          "id": 4,
          "is_pro": false,
          "name": `Max`
        }
      }]);
    return submitterComments(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [
            {
              "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
              "date": `2019-06-08T14:13:56.569Z`,
              "id": 1,
              "rating": 4,
              "user": {
                "avatarUrl": `img/1.png`,
                "isPro": false,
              }
            }]
        });
      });
  });

  it(`Should make a correct API call to /favorite/:id/:status if status true`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const status = 1;
    const togglerCardFavorite = onToggleCardFavorite(id, status);

    apiMock
      .onPost(`${APIRoute.FAVORITES}/${id}/${status}`)
      .reply(200, initialOffer);

    return togglerCardFavorite(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.TOGGLE_FAVORITE,
          payload: adaptedOffer
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.ADD_TO_FAVORITE,
          payload: adaptedOffer
        });

      });
  });

  it(`Should make a correct API call to /favorite/:id/:status if status false`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const status = 0;
    const togglerCardFavorite = onToggleCardFavorite(id, status);

    apiMock
      .onPost(`${APIRoute.FAVORITES}/${id}/${status}`)
      .reply(200, initialOffer);

    return togglerCardFavorite(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.TOGGLE_FAVORITE,
          payload: adaptedOffer
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REMOVE_FROM_FAVORITE,
          payload: adaptedOffer.id
        });

      });
  });

  it(`Should make a correct API call to /login check authorization status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, {
        "email": `test@test.ru`,
        "password": `123456`
      });

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_AUTHORIZATION_INFO,
          payload: {
            "email": `test@test.ru`,
            "password": `123456`
          }
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: `test@test.ru`, password: `123456`};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, {
        "email": `test@test.ru`,
        "password": `123456`
      });

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_AUTHORIZATION_INFO,
          payload: {
            "email": `test@test.ru`,
            "password": `123456`
          }
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.MAIN,
        });
      });
  });
});
