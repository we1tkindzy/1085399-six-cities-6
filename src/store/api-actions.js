import {loadOffers, loadOffer, redirectToRoute, loadNearOffers, laodReviews, loadReviewStatus,
  loadFavorite, toggleFavorite, addToFavorite, removeFromFavorite,
  changeAuthorizationInfo, requiredAuthorization, loadErrorMessage} from "./action";
import {AuthorizationStatus, APIRoute, AppRoute, ReviewLoadingStatus} from "../const";
import {adaptOfferToclient, adaptReviewToClient} from "./adapter";
import {notExisteOffer, unAuthorizationUser, submitFormError} from '../api';
import {sortDateComments} from '../util';

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
    const sortedComments = reviews.data.sort(sortDateComments);
    dispatch(loadOffer(adaptOfferToclient(offer.data)));
    dispatch(loadNearOffers(nearby.data.map((nearbyOffer) => adaptOfferToclient(nearbyOffer))));
    dispatch(laodReviews(sortedComments.map((review) => adaptReviewToClient(review))));
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
  .then(({data}) => {
    const sortedComments = data.sort(sortDateComments);
    dispatch(laodReviews(sortedComments.map((commentItem) => adaptReviewToClient(commentItem))));
    dispatch(loadReviewStatus(ReviewLoadingStatus.LOADED));
  })
  .catch((err) => {
    submitFormError(
        err, () => {
          dispatch(loadErrorMessage(`Connection error.`));
          dispatch(loadReviewStatus(ReviewLoadingStatus.LOAD_FAILED));
        }
    );
  })
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
    .then(({data}) => dispatch(changeAuthorizationInfo(data)))
    .then(() => dispatch(requiredAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => dispatch(changeAuthorizationInfo(data)))
    .then(() => dispatch(requiredAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
);
