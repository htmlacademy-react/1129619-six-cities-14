import { createAction } from '@reduxjs/toolkit';

import { NameSpace } from '../const';

export const fetchOffers = createAction(`${NameSpace.Offers}/fetchOffers`);

export const fetchOffer = createAction(`${NameSpace.Offer}/fetchOffer`);

export const fetchNearPlaces = createAction(
  `${NameSpace.NearPlaces}/fetchNearPlaces`,
);

export const fetchReviews = createAction(`${NameSpace.Reviews}/fetchReviews`);

export const dropOffer = createAction(`${NameSpace.Offer}/dropOffer`);

export const setActiveCity = createAction(`${NameSpace.Offers}/setActiveCity`);

export const fetchFavorites = createAction(
  `${NameSpace.Favorites}/fetchFavorites`,
);
