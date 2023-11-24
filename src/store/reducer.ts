import { createReducer } from '@reduxjs/toolkit';
import {
  fetchOffers,
  setActiveOffer,
  setSortOption,
  setCity,
  loadOffers,
  requireAuthorization,
  setError,
  setOffersDataLoadingStatus,
} from './action';
import { Offer } from '../types/offers';
import { CityName, SortOption, AuthorizationStatus } from '../const';

type AppState = {
  activeCity: CityName;
  offers: Offer[];
  actionOffer: Offer | null;
  sortOption: SortOption;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isOffersDataLoading: boolean;
};

const initialState: AppState = {
  activeCity: CityName.Paris,
  offers: [],
  actionOffer: null,
  sortOption: SortOption.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
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
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
