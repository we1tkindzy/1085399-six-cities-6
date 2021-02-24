import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import FormSubmit from '../form-submit/form-submit';
import ReviewsList from '../reviews-list/rewiews-list';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';

const Room = (props) => {
  const {offers} = props;
  const {premium, price, bookmarkActive, rating, name, type, reviews} = offers[0];

  const otherRooms = offers.slice(1, offers.length);

  const styleMap = {height: `580px`, width: `1144px`, margin: `0 auto`};
  const offersListClasses = `near-places__list places__list`;

  const amountOffers = reviews.length;

  const premiumTemplate = premium ? `` : `visually-hidden`;

  const bookmarkClass = bookmarkActive ? `property__bookmark-button--active` : ``;
  const bookmarkText = bookmarkActive ? `In bookmarks` : `To bookmarks`;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <div className="property__image-wrapper">
                <img className="property__image" src="img/room.jpg" alt="Photo studio"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-02.jpg" alt="Photo studio"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-03.jpg" alt="Photo studio"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/studio-01.jpg" alt="Photo studio"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio"/>
              </div>
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className={`property__mark ${premiumTemplate}`}>
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {name}
                </h1>
                <button className={`property__bookmark-button button ${bookmarkClass}`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{bookmarkText}</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${rating}` + `%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">4.8</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  <li className="property__inside-item">
                    Wi-Fi
                  </li>
                  <li className="property__inside-item">
                    Washing machine
                  </li>
                  <li className="property__inside-item">
                    Towels
                  </li>
                  <li className="property__inside-item">
                    Heating
                  </li>
                  <li className="property__inside-item">
                    Coffee machine
                  </li>
                  <li className="property__inside-item">
                    Baby seat
                  </li>
                  <li className="property__inside-item">
                    Kitchen
                  </li>
                  <li className="property__inside-item">
                    Dishwasher
                  </li>
                  <li className="property__inside-item">
                    Cabel TV
                  </li>
                  <li className="property__inside-item">
                    Fridge
                  </li>
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    Angelina
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{amountOffers}</span></h2>
                {<ReviewsList reviews={reviews}/>}

                {<FormSubmit />}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={otherRooms} styleMap={styleMap}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList offers={otherRooms} offersListClasses={offersListClasses}/>
          </section>
        </div>
      </main>
    </div>
  );
};

Room.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default Room;
