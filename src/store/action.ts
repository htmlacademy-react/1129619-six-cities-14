import { createAction } from '@reduxjs/toolkit';

export const setCity = createAction('setCity');

export const setSortOption = createAction('setSortOption');

export const setActiveOffer = createAction('setActiveOffer');

export const fetchOffers = createAction('fetchOffers');
