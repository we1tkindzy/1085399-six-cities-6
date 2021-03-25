import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {getCurrentOffers} from '../../util';
import OffersList from '../offers-list/offers-list';
import Header from '../header/header';
import {fetchFavoriteOffers} from '../../store/api-actions';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import {incrementCity} from '../../store/action';
import {useSelector, useDispatch} from 'react-redux';
import {AppRoute} from '../../const';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import {PageType} from '../../const';

const Favorites = () => {
  const {favoriteOffers, isFavoriteOffersLoaded} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFavoriteOffersLoaded) {
      dispatch(fetchFavoriteOffers());
    }
  }, [isFavoriteOffersLoaded]);

  if (!isFavoriteOffersLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const cityList = [...new Set(favoriteOffers.map((offer) => offer.city.name))];

  const cardClickHandler = (city) => {
    dispatch(incrementCity(city));
  };


  return (
    <React.Fragment>
      <div className="page">
        <Header />

        {favoriteOffers.length
          ?
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section data-testid="favorites" className="favorites">
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
                        <OffersList offers={getCurrentOffers(city, favoriteOffers)} pageType={PageType.FAVORITE}/>
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

export default Favorites;
