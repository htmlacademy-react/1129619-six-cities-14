import leaflet from 'leaflet';

const Setting = {
  OffersCount: 6,
};

const TIMEOUT_SHOW_ERROR = 2000;

const CitiesEnum = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '*',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum SortOption {
  Popular = 'Popular',
  PriceFromLowToHigh = 'Price: low to high',
  priceFromHighLow = 'Price: high to low',
  Rating = 'Top rated first',
}

enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

const defaultPin = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});

const activePin = leaflet.icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});

enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
}

export {
  Setting,
  AppRoute,
  AuthorizationStatus,
  CitiesEnum,
  SortOption,
  defaultPin,
  activePin,
  CityName,
  APIRoute,
  TIMEOUT_SHOW_ERROR,
};
