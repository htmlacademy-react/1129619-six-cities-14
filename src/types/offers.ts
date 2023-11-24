import { CityName } from '../const';

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type OfferCity = {
  name: CityName;
  location: Location;
};

export type Host = {
  id: number;
  name: string;
  isPro: boolean;
  avatarUrl: string;
};

export type Offer = {
  city: OfferCity;
  previewImage: string;
  images: string[];
  title: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: Host;
  description: string;
  location: Location;
  id: number;
};

export type Point = Omit<Location, 'zoom'> & {
  id: number;
};
