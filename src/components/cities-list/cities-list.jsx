import React from 'react';
import {CityName} from '../../const';
import {incrementCity} from '../../store/action';
import {useSelector, useDispatch} from 'react-redux';

const CitiesList = () => {
  const {city} = useSelector((state) => state.OFFERS);

  const dispatch = useDispatch();

  const menuClickhandler = (currentCity) => {
    dispatch(incrementCity(currentCity));
  };

  return (
    <ul className="locations__list tabs__list">
      {CityName.map((cityName, i) =>
        <li key={cityName + i} className="locations__item">
          <a onClick={() => menuClickhandler(cityName)} className={`locations__item-link tabs__item ${cityName === city ? `tabs__item--active` : ``}`} href="#">
            <span>{cityName}</span>
          </a>
        </li>
      )}
    </ul>
  );
};

export default React.memo(CitiesList);
