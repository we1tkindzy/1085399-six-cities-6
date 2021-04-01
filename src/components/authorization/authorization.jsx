import React from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AuthorizationStatus, AppRoute} from '../../const';

const Authorization = () => {
  const {authorizationStatus, changeAuthorizationInfo} = useSelector((state) => state.USER);
  const history = useHistory();

  const handelPushToScreen = (evt) => {
    evt.preventDefault();
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      history.push(AppRoute.FAVORITES);
    } else {
      history.push(AppRoute.LOGIN);
    }
  };

  return (
    <span data-testid="authorization" onClick={handelPushToScreen} className={`${authorizationStatus === AuthorizationStatus.AUTH ? `header__user-name user__name` : `header__login`}`}>
      {authorizationStatus === AuthorizationStatus.AUTH ? changeAuthorizationInfo.email : `Sign in`}
    </span>
  );
};

export default React.memo(Authorization);
