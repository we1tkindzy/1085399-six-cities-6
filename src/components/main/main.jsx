import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../header/header';
import CitiesList from '../cities-list/cities-list';
import OffersList from '../offers-list/offers-list';
import Sort from "../sort/sort";
import Map from '../map/map';
import MainEmpty from '../main-empty/main-empty';
import {getCurrentOffers, sorting} from '../../util';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchOffersList} from "../../store/api-actions";
import {PageType} from '../../const';

const MainScreen = () => {
  const {city, activeSort} = useSelector((state) => state.OFFERS);
  const {offers, isDataLoaded} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();

  const cityOffers = sorting(getCurrentOffers(city, offers), activeSort);

  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(fetchOffersList());
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const cityCoords = cityOffers[0].city;
  const amountOffers = cityOffers.length;

  return (
    <div className="page page--gray page--main">
      <Header />

      <main data-testid="main" className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        {amountOffers
          ?
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{amountOffers} places to stay in {city}</b>
                <Sort />

                <OffersList offers={cityOffers} pageType={PageType.MAIN} />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offers={cityOffers} city={cityCoords} pageType={PageType.MAIN}/>
                </section>
              </div>
            </div>
          </div>
          : <MainEmpty city={city}/>
        }
      </main>
    </div>
  );
};

export default MainScreen;
