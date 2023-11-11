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

enum NameSpace {
  Offers = 'OFFERS',
  Offer = 'OFFER',
  NearPlaces = 'NEAR_PLACES',
  Favorites = 'FAVORITES',
  Reviews = 'REVIEWS',
  User = 'USER',
}

export { Setting, AppRoute, AuthorizationStatus, CitiesEnum, NameSpace };
