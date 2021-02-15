export default [
  {
    id: 1,
    premium: false,
    img: `apartment-01`,
    price: 120,
    bookmarkActive: true,
    rating: 80,
    name: `Beautiful &amp; luxurious apartment at great location`,
    type: `Apartment`,

    // reviews: [
    //   {
    //     avatar: `avatar-max`,
    //     name: `Max`,
    //     rating: 80,
    //     text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    //     date: `April 2019`
    //   }
    // ]
  },
  {
    id: 2,
    premium: true,
    img: `room`,
    price: 80,
    bookmarkActive: true,
    rating: 60,
    name: `Wood and stone place`,
    type: `Private room`
  },
  {
    id: 3,
    premium: true,
    img: `apartment-02`,
    price: 132,
    bookmarkActive: false,
    rating: 80,
    name: `Canal View Prinsengracht`,
    type: `Apartment`
  },
  {
    id: 4,
    premium: false,
    img: `apartment-03`,
    price: 180,
    bookmarkActive: false,
    rating: 100,
    name: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`
  }
];


// premium: true/false
// premium ? `<div className="place-card__mark">
// <span>Premium</span>
// </div>` : ``

// bookmark_active: true/false
// bookmark_active ? `place-card__bookmark-button--active` : ``
// bookmark_active ? `In bookmarks` : `To bookmarks`
