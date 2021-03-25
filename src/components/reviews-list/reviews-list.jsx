import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review';
import {reviewsProp} from '../review/review.prop';

const ReviewList = (props) => {
  const {reviews} = props;

  return (
    <ul data-testid="reviews-list" className="reviews__list">
      {reviews.map((review, i) => <Review key={review + i} review={review}/>)}
    </ul>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewsProp).isRequired).isRequired,
};

export default ReviewList;
