import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {getRating, getOfferPath} from '../../util';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {toggleFavorite} from '../../store/api-actions';
import {cardProp} from './card.prop';
import {PageType} from '../../const';

const PlaceCard = (props) => {
  const {card, activeOffer, removeActiveOffer, toggleFavoriteOnClick, pageType} = props;
  const {id, isFavorite, isPremium, previewImage, price, rating, title, type} = card;

  const favoriteCard = PageType.FAVORITE;
  const ratingConversion = getRating(rating);

  const premiumTemplate = isPremium ? `` : `visually-hidden`;

  const bookmarkClass = isFavorite ? `place-card__bookmark-button--active` : ``;
  const bookmarkText = isFavorite ? `In bookmarks` : `To bookmarks`;

  const cardHover = (cardId) => {
    activeOffer(cardId);
  };

  const cardHoverLeave = () => {
    removeActiveOffer();
  };

  const cardFavoriteClickHandler = (cardId, status) => {
    const newStatus = Number(!status);
    toggleFavoriteOnClick(cardId, newStatus);
  };

  return (
    <article className={`${pageType === favoriteCard ? PageType.FAVORITE.article : `cities__place-card`} place-card`} onMouseOver={() => cardHover(id)} onMouseLeave={() => cardHoverLeave()}>
      <div className={`place-card__mark ${premiumTemplate}`} >
        <span>Premium</span>
      </div>
      <div className={`${pageType === favoriteCard ? PageType.FAVORITE.img : `cities__image-wrapper`} place-card__image-wrapper`}>
        <Link to={getOfferPath(id)}>
          <img className="place-card__image" src={`${previewImage}`} width={`${pageType === favoriteCard ? PageType.FAVORITE.width : `260`}`} height={`${pageType === favoriteCard ? PageType.FAVORITE.height : `200`}`} alt="Place image" />
        </Link>
      </div>
      <div className={`${pageType === favoriteCard ? PageType.FAVORITE.cardImfo : ``} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button onClick={() => cardFavoriteClickHandler(id, isFavorite)} className={`place-card__bookmark-button button ${bookmarkClass}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{bookmarkText}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingConversion}` + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={getOfferPath(id)}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  card: PropTypes.shape(cardProp).isRequired,
  activeOffer: PropTypes.func.isRequired,
  removeActiveOffer: PropTypes.func.isRequired,
  toggleFavoriteOnClick: PropTypes.func.isRequired,
  pageType: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  activeOffer(id) {
    dispatch(ActionCreator.incrementActiveOffer(id));
  },
  removeActiveOffer() {
    dispatch(ActionCreator.incrementRemoveActiveOffer());
  },
  toggleFavoriteOnClick(id, status) {
    dispatch(toggleFavorite(id, status));
  }
});

export {PlaceCard};
export default connect(null, mapDispatchToProps)(PlaceCard);
