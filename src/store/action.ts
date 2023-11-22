import { createAction } from '@reduxjs/toolkit';
import { CityName, SortOption } from '../const';
import { Offer } from '../types/offers';

export const setCity = createAction<CityName>('setCity');

export const setSortOption = createAction<SortOption>('setSortOption');

export const setActiveOffer = createAction<Offer | null>('setActiveOffer');

export const fetchOffers = createAction('fetchOffers');
