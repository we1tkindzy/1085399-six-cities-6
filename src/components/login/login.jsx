import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {login} from '../../store/api-actions';
import Header from '../header/header';

const Login = () => {
  const dispatch = useDispatch();

  const loginRef = useRef();
  const passwordRef = useRef();

  const handelSubmit = (evt) => {
    evt.preventDefault();

    dispatch(login({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    }));
  };

  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 data-testid="login-title" className="login__title">Sign in</h1>
            <form
              onSubmit={handelSubmit}
              className="login__form form"
              action=""
              method="post"
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label htmlFor="input-email" className="visually-hidden">E-mail</label>
                <input
                  id="input-email"
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required=""
                  data-testid="email"
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label htmlFor="input-password" className="visually-hidden">Password</label>
                <input
                  id="input-password"
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required=""
                  data-testid="password"
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                data-testid="login-submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Paris</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Login;
