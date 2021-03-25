import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../card/card';
import {cardProp} from '../card/card.prop';

const OffersList = (props) => {
  const {offers, pageType} = props;

  return (
    <div data-testid="offers-list" className={`${pageType} places__list`}>
      {offers.map((card, id) => <PlaceCard key={card + id} card={card} pageType={pageType} />)}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(cardProp).isRequired).isRequired,
  pageType: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default React.memo(OffersList);
