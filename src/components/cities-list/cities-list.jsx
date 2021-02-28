import React from 'react';
import PropTypes from 'prop-types';
import {CityName} from '../../const';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';

const CitiesList = (props) => {
  const {city, onUserClick} = props;

  const menuClickhandler = (currentCity) => {
    onUserClick(currentCity);
  };

  return (
    <ul className="locations__list tabs__list">
      {CityName.map((cityName, i) =>
        <li key={cityName + i} className="locations__item">
          <a onClick={() => menuClickhandler(cityName)} className={`locations__item-link tabs__item ${cityName === city ? `tabs__item--active` : ``}`} href="#">
            <span>{cityName}</span>
          </a>
        </li>
      )};
    </ul>
  );
};

CitiesList.propTypes = {
  city: PropTypes.string.isRequired,
  onUserClick: PropTypes.func.isRequired,
  getOffers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  onUserClick(city) {
    dispatch(ActionCreator.incrementCity(city));
  },
  getOffers() {
    dispatch(ActionCreator.incrementOffers());
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
