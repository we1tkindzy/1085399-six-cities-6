export const adaptOfferToclient = (offer) => {
  const adaptedOffers = Object.assign(
      {},
      offer,
      {
        host: {
          ...offer.host,
          avatarUrl: offer.host.avatar_url,
          isPro: offer.host.is_pro
        },
        isFavorite: offer.is_favorite,
        isPremium: offer.is_premium,
        maxAdults: offer.max_adults,
        previewImage: offer.preview_image
      }
  );

  delete adaptedOffers.host.avatar_url;
  delete adaptedOffers.host.is_pro;
  delete adaptedOffers.is_favorite;
  delete adaptedOffers.is_premium;
  delete adaptedOffers.max_adults;
  delete adaptedOffers.preview_image;

  return adaptedOffers;
};

export const adaptReviewToClient = (review) => {
  const adaptedReview = Object.assign(
      {},
      review,
      {
        user: {
          isPro: review.user.is_pro,
          avatarUrl: review.user.avatar_url
        }
      }
  );

  delete adaptedReview.user.is_pro;
  delete adaptedReview.user.avatar_url;

  return adaptedReview;
};
