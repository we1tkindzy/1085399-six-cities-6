import {loadOffers, loadOffer, redirectToRoute, loadNearOffers, laodReviews, loadFavorite, toggleFavorite, addToFavorite, removeFromFavorite, authorizationInfo, requiredAuthorization} from "./action";
import {AuthorizationStatus, APIRoute, AppRoute} from "../const";
import {adaptOfferToclient, adaptReviewToClient} from "./adapter";
import {notExisteOffer, unAuthorizationUser} from '../api';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(data.map((offer) => adaptOfferToclient(offer)))))
);

export const fetchOpenedOffer = (id) => (dispatch, _getState, api) => (
  Promise.all([
    api.get(`${APIRoute.OFFERS}/${id}`),
    api.get(`${APIRoute.OFFERS}/${id}/nearby`),
    api.get(`${APIRoute.REVIEWS}/${id}`)
  ])
  .then(([offer, nearby, reviews]) => {
    dispatch(loadOffer(adaptOfferToclient(offer.data)));
    dispatch(loadNearOffers(nearby.data.map((nearbyOffer) => adaptOfferToclient(nearbyOffer))));
    dispatch(laodReviews(reviews.data.map((review) => adaptReviewToClient(review))));
  })
  .catch((err) => {
    notExisteOffer(
        err, () => dispatch(redirectToRoute(AppRoute.NOT_FOUND))
    );
  })
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
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
);
