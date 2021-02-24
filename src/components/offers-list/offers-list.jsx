import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../card/card';

const OffersList = (props) => {
  const {offers, offersListClasses} = props;

  return (
    <div className={`${offersListClasses}`}>
      {offers.map((card, id) => <PlaceCard key={card.id + id} card={card} />)}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
  offersListClasses: PropTypes.string.isRequired,
};

export default OffersList;
