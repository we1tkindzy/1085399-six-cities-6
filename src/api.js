import axios from "axios";

const BACKEND_URL = `https://6.react.pages.academy/six-cities`;
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
  NOT_FOUND: 404
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();

      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export const notExisteOffer = (err, notFound) => {
  const {response} = err;

  if (response.status === HttpCode.NOT_FOUND) {
    notFound();
    throw err;
  }

  throw err;
};

export const unAuthorizationUser = (err, unAuthorization) => {
  const {response} = err;

  if (response.status === HttpCode.UNAUTHORIZED) {
    unAuthorization();
    throw err;
  }

  throw err;
};
