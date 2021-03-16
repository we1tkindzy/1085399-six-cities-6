import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import "leaflet/dist/leaflet.css";
import {connect} from 'react-redux';
import {cardProp} from '../card/card.prop';

const Map = (props) => {
  const {offers, city, activeOffer} = props;
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
      const customIcon = leaflet.icon({
        iconUrl: `${activeOffer === card.id ? `./img/pin-active.svg` : `./img/pin.svg`}`,
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
    <div id="map" style={{height: `100%`, width: `100%`}}></div>
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
  activeOffer: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
};

const mapStateToProps = (state) => ({
  activeOffer: state.activeOffer
});

export {Map};
export default connect(mapStateToProps, null)(Map);
