import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useRouteMatch} from 'react-router-dom';
import Header from '../header/header';
import {AuthorizationStatus, PageType} from '../../const';
import FormSubmit from '../form-submit/form-submit';
import ReviewsList from '../reviews-list/rewiews-list';
import {reviewsProp} from '../review/review.prop';
import Map from '../map/map';
import {getRating} from '../../util';
import OffersList from '../offers-list/offers-list';
import {fetchOffer, fetchNearOffers, fetchReviews, toggleFavorite} from '../../store/api-actions';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import {cardProp} from '../card/card.prop';
import {ActionCreator} from '../../store/action';


const Room = (props) => {
  const {authorizationStatus, openedOffer, loadOffer, nearOffers, loadNearOffers, reviews, loadReviews, toggleFavoriteOnClick, toggleOpenedCardFavorite} = props;

  const match = useRouteMatch();
  const pathId = match.params.id.slice(1);

  if (String(openedOffer.id) !== pathId) {
    loadNearOffers(pathId);
    loadReviews(pathId);
    loadOffer(pathId);

    return (
      <LoadingScreen />
    );
  }


  const {id, city, bedrooms, description, goods, host, images, isFavorite, isPremium, maxAdults, price, rating, title, type} = openedOffer;
  const {avatarUrl, isPro, name} = host;

  const cardFavorClickHandler = (cardId, status) => {
    const newStatus = status ? 0 : 1;
    toggleFavoriteOnClick(cardId, newStatus);
    toggleOpenedCardFavorite();
  };


  const ratingConversion = getRating(rating);


  const premiumTemplate = isPremium ? `` : `visually-hidden`;

  const bookmarkClass = isFavorite ? `property__bookmark-button--active` : ``;
  const bookmarkText = isFavorite ? `In bookmarks` : `To bookmarks`;

  const proClass = isPro ? `property__avatar-wrapper--pro` : ``;

  const amountOffers = reviews.length;

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.slice(0, 6).map((img, i) =>
                <div key={img + i} className="property__image-wrapper">
                  <img className="property__image" src={`${img}`} alt="Photo studio"/>
                </div>
              )}

            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className={`property__mark ${premiumTemplate}`}>
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button onClick={() => cardFavorClickHandler(id, bookmarkClass)} className={`property__bookmark-button button ${bookmarkClass}`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{bookmarkText}</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${ratingConversion}` + `%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good, i) =>
                    <li key={good + i} className="property__inside-item">
                      {good}
                    </li>
                  )}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${proClass} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={`${avatarUrl}`} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{amountOffers}</span></h2>
                {
                  reviews
                    ? <ReviewsList reviews={reviews}/>
                    : <LoadingScreen />
                }

                {authorizationStatus === AuthorizationStatus.AUTH ? <FormSubmit /> : ``}
              </section>
            </div>
          </div>
          <section className="property__map map">
            {
              nearOffers
                ? <Map offers={nearOffers} city={city}/>
                : <LoadingScreen />
            }
          </section>
        </section>
        {
          nearOffers
            ? <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <OffersList offers={nearOffers} pageType={PageType.ROOM} />
              </section>
            </div>
            : <LoadingScreen />
        }
      </main>
    </div>
  );
};

Room.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  openedOffer: PropTypes.oneOfType([PropTypes.shape(cardProp), PropTypes.object]).isRequired,
  city: PropTypes.string.isRequired,
  nearOffers: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape(cardProp)), PropTypes.array]).isRequired,
  reviews: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape(reviewsProp)), PropTypes.array]).isRequired,
  loadOffer: PropTypes.func.isRequired,
  loadNearOffers: PropTypes.func.isRequired,
  loadReviews: PropTypes.func.isRequired,
  toggleFavoriteOnClick: PropTypes.func.isRequired,
  toggleOpenedCardFavorite: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  authorizationStatus: state.authorizationStatus,
  openedOffer: state.openedOffer,
  nearOffers: state.nearOffers,
  reviews: state.reviews,
});

const mapDispatchToProps = (dispatch) => ({
  loadOffer(id) {
    dispatch(fetchOffer(id));
  },
  loadNearOffers(id) {
    dispatch(fetchNearOffers(id));
  },
  loadReviews(id) {
    dispatch(fetchReviews(id));
  },
  toggleFavoriteOnClick(id, status) {
    dispatch(toggleFavorite(id, status));
  },
  toggleOpenedCardFavorite() {
    dispatch(ActionCreator.toggleOpenedCardFavorite());
  },
});

export {Room};
export default connect(mapStateToProps, mapDispatchToProps)(Room);
