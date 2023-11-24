import { createAction } from '@reduxjs/toolkit';
import { CityName, SortOption, AuthorizationStatus } from '../const';
import { Offer } from '../types/offers';

export const setCity = createAction<CityName>('setCity');

export const setSortOption = createAction<SortOption>('setSortOption');

export const setActiveOffer = createAction<Offer | null>('setActiveOffer');

export const fetchOffers = createAction('fetchOffers');

export const loadOffers = createAction<Offer[]>('loadOffers');

export const requireAuthorization = createAction<AuthorizationStatus>(
  'requireAuthorization',
);

export const setOffersDataLoadingStatus = createAction<boolean>(
  'setOffersDataLoadingStatus',
);

export const setError = createAction<string | null>('game/setError');
