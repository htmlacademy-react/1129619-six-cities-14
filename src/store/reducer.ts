import { createReducer } from '@reduxjs/toolkit';
import offers from '../mocks/offers';

import { fetchOffers, setActiveOffer, setSortOption, setCity } from './action';

const initialState = {
  activeCity: CityName.Paris,
  offers: [],
  actionOffer: null,
  sortOption: sortOption.Popular,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fetchOffers, (state) => {
      state.offers = offers;
    })
    .addCase(setSortOption, (state, action) => {
      state.sortOption = action.payload;
    })
    .addCase(setActiveOffer, (state, action) => {
      state.actionOffer = action.payload;
    });
});
