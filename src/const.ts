
const Setting = {
  OffersCount: 6,
};

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

enum defaultPin = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});

enum activePin = leaflet.icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});

export { Setting, AppRoute, AuthorizationStatus, CitiesEnum, SortOption, defaultPin, activePin};
