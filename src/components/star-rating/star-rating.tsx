type StarRatingProps = {
  rating: number;
};

export function StarRating({ rating }: StarRatingProps): JSX.Element {
  const width = `${Math.round(20 * rating)}%`;
  return (
    <div className="offer__rating rating">
      <div className="offer__stars rating__stars">
        <span style={{ width }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="offer__rating-value rating__value">{rating}</span>
    </div>
  );
}
