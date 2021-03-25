import {incrementCity, incrementSort, incrementActiveOffer, incrementRemoveActiveOffer} from '../action';
import {offers} from './offers';

describe(`Reducers work correctly`, () => {
  it(`Reducer with no additional parameters should return initial state`, () => {
    expect(offers(undefined, {}))
      .toEqual({
        city: `Paris`,
        activeSort: `Popular`,
        activeOffer: false,
      });
  });

  it(`Reducer should change city`, () => {
    const state = {
      city: `Paris`
    };

    expect(offers(state, incrementCity(`Cologne`)))
      .toEqual({
        city: `Cologne`
      });
  });

  it(`Reducer should change sort`, () => {
    const state = {
      activeSort: `Popular`
    };

    expect(offers(state, incrementSort(`Price: low to high`)))
      .toEqual({
        activeSort: `Price: low to high`
      });
  });

  it(`Reducer should incrementing active offer`, () => {
    const state = {
      activeOffer: false
    };

    expect(offers(state, incrementActiveOffer(1)))
      .toEqual({
        activeOffer: 1
      });
  });

  it(`Reducer should incrementing remove active offer`, () => {
    const state = {
      activeOffer: 1
    };

    expect(offers(state, incrementRemoveActiveOffer()))
      .toEqual({
        activeOffer: false
      });
  });
});
