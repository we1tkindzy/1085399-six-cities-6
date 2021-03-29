import React from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AuthorizationStatus} from '../../const';

const Authorization = () => {
  const {authorizationStatus, changeAuthorizationInfo} = useSelector((state) => state.USER);
  const history = useHistory();

  const handelPushLoginScreen = (evt) => {
    evt.preventDefault();
    history.push(`/login`);
  };

  return (
    <span data-testid="authorization" onClick={handelPushLoginScreen} className={`${authorizationStatus === AuthorizationStatus.AUTH ? `header__user-name user__name` : `header__login`}`}>
      {authorizationStatus === AuthorizationStatus.AUTH ? changeAuthorizationInfo.email : `Sign in`}
    </span>
  );
};

export default React.memo(Authorization);
