import {loadOffers, loadOffer, redirectToRoute, loadNearOffers, laodReviews, loadFavorite, toggleFavorite, addToFavorite, removeFromFavorite, authorizationInfo, requiredAuthorization} from "./action";
import {AuthorizationStatus, APIRoute, AppRoute} from "../const";
import {adaptOfferToclient, adaptReviewToClient} from "./adapter";
import {notExisteOffer, unAuthorizationUser} from '../api';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(data.map((offer) => adaptOfferToclient(offer)))))
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/` + id)
    .then(({data}) => dispatch(loadOffer(adaptOfferToclient(data))))
    .catch((err) => {
      notExisteOffer(
          err, () => dispatch(redirectToRoute(AppRoute.NOT_FOUND))
      );
    })
);

export const fetchNearOffers = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(loadNearOffers(data.map((offer) => adaptOfferToclient(offer)))))
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`comments/${id}`)
    .then(({data}) => dispatch(laodReviews(data.map((offer) => adaptReviewToClient(offer)))))
);

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITES)
    .then(({data}) => dispatch(loadFavorite(data.map((offer) => adaptOfferToclient(offer)))))
);

export const submitComment = (id, {review: comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${id}`, {comment, rating})
  .then(({data}) => dispatch(laodReviews(data.map((commentItem) => adaptReviewToClient(commentItem)))))
  .catch(() => {})
);

export const onToggleCardFavorite = (id, status) => (dispatch, _getState, api)=> (
  api.post(`${APIRoute.FAVORITES}/${id}/${status}`)
    .then(({data}) => {
      const adaptedOffer = adaptOfferToclient(data);
      dispatch(toggleFavorite(adaptedOffer));

      if (status) {
        dispatch(addToFavorite(adaptedOffer));
      } else {
        dispatch(removeFromFavorite(adaptedOffer.id));
      }
    })
    .catch((err) => {
      unAuthorizationUser(
          err, () => dispatch(redirectToRoute(AppRoute.LOGIN))
      );
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(authorizationInfo(data)))
    .then(() => dispatch(requiredAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => dispatch(authorizationInfo(data)))
    .then(() => dispatch(requiredAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)))
);
