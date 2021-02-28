import React from 'react';
import PropTypes from 'prop-types';
import {getRating} from '../../util';

const Review = (props) => {
  const {review} = props;
  const {comment, date, rating, user} = review;

  const ratingConversion = getRating(rating);

  const {avatarUrl, isPro, name} = user;

  const proClass = isPro ? `reviews__avatar-wrapper--pro` : ``;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className={`reviews__avatar-wrapper ${proClass} user__avatar-wrapper`}>
          <img className="reviews__avatar user__avatar" src={`${avatarUrl}`} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${ratingConversion}` + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{date}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    user: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Review;
