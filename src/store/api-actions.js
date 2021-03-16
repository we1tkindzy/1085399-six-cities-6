import {ActionCreator} from "./action";
import {AuthorizationStatus, APIRoute, AppRoute} from "../const";
import {adaptOfferToclient, adaptReviewToClient} from "./adapter";
import {notExisteOffer, unAuthorizationUser} from '../api';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data.map((offer) => adaptOfferToclient(offer)))))
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/` + id)
    .then(({data}) => dispatch(ActionCreator.loadOffer(adaptOfferToclient(data))))
    .catch((err) => {
      notExisteOffer(
          err, () => dispatch(ActionCreator.redirectToRoute(AppRoute.NOT_FOUND))
      );
    })
);

export const fetchNearOffers = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(ActionCreator.loadNearOffers(data.map((offer) => adaptOfferToclient(offer)))))
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.laodReviews(data.map((offer) => adaptReviewToClient(offer)))))
);

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITES)
    .then(({data}) => dispatch(ActionCreator.loadFavorite(data.map((offer) => adaptOfferToclient(offer)))))
);

export const submitComment = (id, {review: comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${id}`, {comment, rating})
  .then(({data}) => dispatch(ActionCreator.laodReviews(data.map((commentItem) => adaptReviewToClient(commentItem)))))
  .catch(() => {})
);

export const toggleFavorite = (id, status) => (dispatch, _getState, api)=> (
  api.post(`${APIRoute.FAVORITES}/${id}/${status}`)
    .then(({data}) => {
      const adaptedOffer = adaptOfferToclient(data);
      dispatch(ActionCreator.toggleFavorite(adaptedOffer));

      if (status) {
        dispatch(ActionCreator.addToFavorite(adaptedOffer));
      } else {
        dispatch(ActionCreator.removeFromFavorite(adaptedOffer.id));
      }
    })
    .catch((err) => {
      unAuthorizationUser(
          err, () => dispatch(ActionCreator.redirectToRoute(AppRoute.LOGIN))
      );
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(ActionCreator.authorizationInfo(data)))
    .then(() => dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => dispatch(ActionCreator.authorizationInfo(data)))
    .then(() => dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);
