import React from 'react';
import PropTypes from 'prop-types';
import {Link, useHistory} from 'react-router-dom';

const PlaceCard = (props) => {
  const {card} = props;
  const {id, premium, img, price, bookmarkActive, rating, name, type} = card;

  const history = useHistory();

  const premiumTemplate = premium ? `` : `visually-hidden`;

  const bookmarkClass = bookmarkActive ? `place-card__bookmark-button--active` : ``;
  const bookmarkText = bookmarkActive ? `In bookmarks` : `To bookmarks`;

  return (
    <article className="cities__place-card place-card">
      <div className={`place-card__mark ${premiumTemplate}`} >
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={`img/${img}.jpg`} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{`${price}`}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${bookmarkClass}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{`${bookmarkText}`}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating}` + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link onClick={() => history.push(`/offer/${id}`)} to={`/offer/${id}`}>{`${name}`}</Link>
        </h2>
        <p className="place-card__type">{`${type}`}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    premium: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    bookmarkActive: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default PlaceCard;
