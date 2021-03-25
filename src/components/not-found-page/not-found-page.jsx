import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

const NotFoundPage = () => {
  return (
    <div data-testid="not-found-page">
      <h1>404 Not Found</h1>
      <Link to={AppRoute.MAIN}>Вернуться на главную страницу</Link>
    </div>
  );
};

export default NotFoundPage;
