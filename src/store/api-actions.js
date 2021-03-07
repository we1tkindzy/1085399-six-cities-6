import {ActionCreator} from "./action";
import {AuthorizationStatus, APIRoute} from "../const";
import {adaptToclient} from "./adapter";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data.map((offer) => adaptToclient(offer)))))
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
