import React from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AuthorizationStatus} from '../../const';

const Authorization = () => {
  const {authorizationStatus, authorizationInfo} = useSelector((state) => state.USER);
  const history = useHistory();

  const handelPushLoginScreen = (evt) => {
    evt.preventDefault();
    history.push(`/login`);
  };

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return (
      <span onClick={handelPushLoginScreen} className="header__user-name user__name">{authorizationInfo.email}</span>
    );
  } else {
    return (
      <span onClick={handelPushLoginScreen} className="header__login">Sign in</span>
    );
  }
};

export default React.memo(Authorization);
