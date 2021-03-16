import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {getOffers} from '../../util';
import OffersList from '../offers-list/offers-list';
import Header from '../header/header';
import {fetchFavoriteOffers} from '../../store/api-actions';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';
import {AppRoute} from '../../const';
import {cardProp} from '../card/card.prop';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import {PageType} from '../../const';

const Favorites = (props) => {
  const {favoriteOffers, changeCity, loadFavoriteOffers, isFavoriteOffersLoaded} = props;

  useEffect(() => {
    if (!isFavoriteOffersLoaded) {
      loadFavoriteOffers();
    }
  }, [isFavoriteOffersLoaded]);

  if (!isFavoriteOffersLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const cityList = [...new Set(favoriteOffers.map((offer) => offer.city.name))];

  const cardClickHandler = (city) => {
    changeCity(city);
  };


  return (
    <React.Fragment>
      <div className="page">
        <Header />

        {favoriteOffers.length
          ?
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {cityList.map((city, i) => (
                    <li key={city + i} className="favorites__locations-items" onClick={() => cardClickHandler(city)}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <Link to={AppRoute.MAIN} className="locations__item-link">
                            <span>{city}</span>
                          </Link>
                        </div>
                      </div>
                      <div className="favorites__places">
                        <OffersList offers={getOffers(city, favoriteOffers)} pageType={PageType.FAVORITE}/>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </main>
          : <FavoritesEmpty />
        }
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </a>
        </footer>
      </div>
    </React.Fragment>
  );
};

Favorites.propTypes = {
  favoriteOffers: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape(cardProp)), PropTypes.array]).isRequired,
  changeCity: PropTypes.func.isRequired,
  loadFavoriteOffers: PropTypes.func.isRequired,
  isFavoriteOffersLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  favoriteOffers: state.favoriteOffers,
  isFavoriteOffersLoaded: state.isFavoriteOffersLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.incrementCity(city));
  },
  loadFavoriteOffers() {
    dispatch(fetchFavoriteOffers());
  }
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
