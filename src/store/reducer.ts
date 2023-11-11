import { createReducer } from '@reduxjs/toolkit';
import { incrementStep } from './action';
import offers from '../mocks/offers';

import {
  fetchOffers,
  fetchOffer,
  fetchNearPlaces,
  fetchReviews,
  dropOffer,
  setActiveCity,
  fetchFavorites,
} from './action';

const initialState = {
  offers,
  nearPlaces: [],
  reviews: [],
  offer: null,
  favorites: [],
  actionCity: [], //CityMap.Paris
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state) => {
      state.offers = offers;
    })
    .addCase(fetchOffer, (state, action) => {
      state.offer = offers.find((offer) => offer.id === action.payload) ?? null;
    })
    .addCase(fetchNearPlaces, (state, action) => {
      state.nearPlaces = offers.filter((offer) => offer.id !== action.payload);
    })
    .addCase(fetchReviews, (state) => {
      state.reviews = reviews;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
      state.nearPlaces = [];
    })
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fetchFavorites, (state) => {
      state.favorites = state.offers.filter((offer) => offer.isFavorite);
    });
});
