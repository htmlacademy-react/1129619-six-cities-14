import { Offer } from '../../types/offers';
import { Link, generatePath } from 'react-router-dom';
import { StarRating } from '../star-rating/star-rating';
import { AppRoute } from '../../const';

type FavoriteCardProps = {
  offer: Offer;
};

export function FavoriteCard({ offer }: FavoriteCardProps): JSX.Element {
  const offerUrl = generatePath(AppRoute.Offer, { id: offer.id.toString() });
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{offer.city.name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <article className="favorites__card place-card">
          {offer.isPremium && (
            <div className="place-card__mark">
              <span>Premium</span>
            </div>
          )}
          <div className="favorites__image-wrapper place-card__image-wrapper">
            <Link to={offerUrl}>
              <img
                className="place-card__image"
                src={offer.previewImage}
                width="150"
                height="110"
                alt={offer.description}
              />
            </Link>
          </div>
          <div className="favorites__card-info place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;{offer.price}</b>
                <span className="place-card__price-text">&#47;&nbsp;night</span>
              </div>
              <button
                className="place-card__bookmark-button place-card__bookmark-button--active button"
                type="button"
              >
                <svg
                  className="place-card__bookmark-icon"
                  width="18"
                  height="19"
                >
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">In bookmarks</span>
              </button>
            </div>
            <StarRating rating={offer.rating} />
            <h2 className="place-card__name">
              <Link to={offerUrl}>{offer.title}</Link>
            </h2>
            <p className="place-card__type">{offer.type}</p>
          </div>
        </article>
      </div>
    </li>
  );
}
