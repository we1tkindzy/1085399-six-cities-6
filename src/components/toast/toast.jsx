import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import "./toast.css";
import {loadErrorMessage} from '../../store/action';

const SHOW_TIME = 5000;

const Toast = () => {
  const {errorMessage} = useSelector((state) => state.USER);

  const dispatch = useDispatch();

  if (errorMessage.length) {
    setTimeout(() => {
      dispatch(loadErrorMessage(``));
    }, SHOW_TIME);
  }

  return (
    <div data-testid="toast" className="toast-container" style={{display: !errorMessage.length && `none`}}>
      <div className="toast-item">{errorMessage} Please retry later.</div>
    </div>
  );
};

export default Toast;
