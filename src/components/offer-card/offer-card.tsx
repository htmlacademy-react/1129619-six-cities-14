import { Link, generatePath } from 'react-router-dom';
import { Offer } from '../../types/offers';
import { AppRoute } from '../../const';
import { StarRating } from '../star-rating/star-rating';

type OfferCardProps = {
  offer: Offer;
  onCardHover?: (offerId: Offer['id'] | null) => void;
};

function OfferCard({ offer, onCardHover }: OfferCardProps): JSX.Element {
  function handleMouseEnter() {
    onCardHover?.(offer.id);
  }
  function handleMouseLeave() {
    onCardHover?.(null);
  }

  const offerUrl = generatePath(AppRoute.Offer, { id: offer.id.toString() });

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={offerUrl}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt={offer.title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <StarRating rating={offer.rating} variant="place" />
        </div>
        <h2 className="place-card__name">
          <a href="#">{offer.description}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
