import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import 'leaflet/dist/leaflet.css';
import {useSelector} from 'react-redux';
import {cardProp} from '../card/card.prop';
import {PageType} from '../../const';

const Map = (props) => {
  const {offers, city, pageType} = props;
  const {activeOffer} = useSelector((state) => state.OFFERS);
  const {openedOffer} = useSelector((state) => state.DATA);

  const {latitude, longitude, zoom} = city.location;

  const mapRef = useRef();
  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: latitude,
        lng: longitude
      },
      zoom,
      zoomControl: false,
      marker: true
    });
    mapRef.current.setView({lat: latitude, lng: longitude}, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    offers.map((card) => {
      const isActiveOffer = activeOffer === card.id ? `./img/pin-active.svg` : `./img/pin.svg`;
      const isOpenedOffer = openedOffer.id === card.id ? `./img/pin-active.svg` : `./img/pin.svg`;

      const customIcon = leaflet.icon({
        iconUrl: pageType === PageType.MAIN ? isActiveOffer : isOpenedOffer,
        iconSize: [30, 30]
      });

      leaflet.marker({
        lat: card.location.latitude,
        lng: card.location.longitude,
        zoom: card.location.zoom
      },
      {
        icon: customIcon
      })
      .addTo(mapRef.current)
      .bindPopup(card.title);
    });

    return () => {
      mapRef.current.remove();
    };

  }, [city.name, activeOffer]);

  return (
    <div id="map" style={{height: `100%`, width: `100%`}} data-testid="map"></div>
  );
};

Map.propTypes = {
  offers: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape(cardProp)), PropTypes.bool]).isRequired,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
    name: PropTypes.string.isRequired,
  }),
  pageType: PropTypes.string.isRequired,
};

export default Map;
