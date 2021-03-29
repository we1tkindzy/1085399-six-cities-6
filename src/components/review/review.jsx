import React from 'react';
import PropTypes from 'prop-types';
import {getRating} from '../../util';
import {reviewsProp} from './review.prop';
import dayjs from 'dayjs';

const Review = (props) => {
  const {review} = props;
  const {id, comment, date, rating, user} = review;

  const formatDate = dayjs(date).format(`MMMM YYYY`);

  const ratingConversion = getRating(rating);

  const {avatarUrl, isPro, name} = user;

  const proClass = isPro ? `reviews__avatar-wrapper--pro` : ``;

  return (
    <li data-testid={`review-${id}`} className="reviews__item">
      <div data-testid={`review-${id}-user-info`} className="reviews__user user">
        <div className={`reviews__avatar-wrapper ${proClass} user__avatar-wrapper`}>
          <img className="reviews__avatar user__avatar" src={`${avatarUrl}`} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div data-testid={`review-${id}-info`} className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${ratingConversion}` + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{formatDate}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: PropTypes.shape(reviewsProp).isRequired,
};

export default Review;
