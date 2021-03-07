import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../const';

const Authorization = (props) => {
  const {authorizationStatus, authorizationInfo} = props;
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

Authorization.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  authorizationInfo: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  authorizationInfo: state.authorizationInfo,
});

export {Authorization};
export default connect(mapStateToProps, null)(Authorization);
