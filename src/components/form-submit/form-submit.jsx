import React, {useState} from 'react';
import {submitComment} from '../../store/api-actions';
import {useSelector, useDispatch} from 'react-redux';

const FormSubmit = () => {
  const {openedOffer} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();

  const [userComment, setUserComment] = useState(``);
  const [userRating, setUserRating] = useState(``);

  const ratingArray = [
    {rating: 5, title: `perfect`},
    {rating: 4, title: `good`},
    {rating: 3, title: `not bad`},
    {rating: 2, title: `badly`},
    {rating: 1, title: `terribly`},
  ];

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(submitComment(openedOffer.id, {review: userComment, rating: userRating}));
  };

  const handleRatingName = (target) => {
    setUserRating(target.value);
  };


  return (
    <form data-testid="reviews-form" onSubmit={(evt) => handleSubmit(evt)} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div data-testid="reviews-form-rating" className="reviews__rating-form form__rating">
        {ratingArray.map((star, id) => (
          <React.Fragment key={id}>
            <input className="form__rating-input visually-hidden" name="rating" value={star.rating} id={`${star.rating}-stars`} type="radio" onChange={({target}) => {
              handleRatingName(target);
            }}/>
            <label htmlFor={`${star.rating}-stars`} className="reviews__rating-label form__rating-label" title={star.title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea data-testid="reviews-form-input" className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={({target}) => {
          setUserComment(target.value);
        }}></textarea>
      <div data-testid="reviews-form-submit" className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
};

export default FormSubmit;
