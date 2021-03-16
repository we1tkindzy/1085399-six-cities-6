import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import Header from '../header/header';
import CitiesList from '../cities-list/cities-list';
import OffersList from '../offers-list/offers-list';
import Sort from "../sort/sort";
import Map from '../map/map';
import MainEmpty from '../main-empty/main-empty';
import {getOffers, sorting} from '../../util';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchOffersList} from "../../store/api-actions";
import {cardProp} from '../card/card.prop';
import {PageType} from '../../const';

const MainScreen = (props) => {
  const {offers, city, isDataLoaded, onLoadData} = props;

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const cityCoords = offers[0].city;
  const amountOffers = offers.length;

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
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

                <OffersList offers={offers} pageType={PageType.MAIN} />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offers={offers} city={cityCoords}/>
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

MainScreen.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(cardProp).isRequired).isRequired,
  city: PropTypes.string.isRequired,
  onUserClick: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: sorting(getOffers(state.city, state.offers), state.activeSort),
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onUserClick() {
    dispatch(ActionCreator.incrementCity());
    dispatch(ActionCreator.incrementOffers());
  },
  onLoadData() {
    dispatch(fetchOffersList());
  },
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
