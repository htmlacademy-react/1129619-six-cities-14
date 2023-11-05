import classNames from 'classnames';

type StarRatingProps = {
  rating: number;
  variant: 'place' | 'offer' | 'favorite' | 'review';
};

const starRatingStyle = {
  place: 'place-card__stars',
  offer: 'offer__stars',
  favorite: 'place-card__stars',
  review: 'reviews__stars',
};

export function StarRating({ rating, variant }: StarRatingProps): JSX.Element {
  const width = `${Math.round(20 * rating)}%`;
  return (
    <div className="offer__rating rating">
      <div className={classNames('rating__stars', starRatingStyle[variant])}>
        <span style={{ width }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {variant === 'offer' && (
        <span className="offer__rating-value rating__value">{rating}</span>
      )}
    </div>
  );
}
