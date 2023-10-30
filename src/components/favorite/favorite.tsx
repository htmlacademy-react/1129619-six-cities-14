import { Offer } from '../../types/offers';

import { FavoriteCard } from '../favorite-card/favorite-card';

type FavoriteProps = {
  offers: Offer[];
};

export function Favorite({ offers }: FavoriteProps): JSX.Element {
  return (
    <ul className="favorites__list">
      {offers.map((offer) => {
        if (offer.isFavorite) {
          return <FavoriteCard offer={offer} key={offer.id} />;
        }
      })}
    </ul>
  );
}
