import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review';

const ReviewList = (props) => {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review, i) => <Review key={review.id + i} review={review}/>)}
    </ul>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewList;
