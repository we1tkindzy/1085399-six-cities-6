import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../card/card';
import {cardProp} from '../card/card.prop';

const OffersList = (props) => {
  const {offers} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((card, id) => <PlaceCard key={card + id} card={card} />)}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(cardProp).isRequired).isRequired,
};

export default OffersList;
