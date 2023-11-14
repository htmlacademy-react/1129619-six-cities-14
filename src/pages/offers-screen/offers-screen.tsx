import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import { Offer, Point } from '../../types/offers';
import { useParams } from 'react-router-dom';
import { OfferGallery } from '../../components/offer-galery/offer-gallery';
import { StarRating } from '../../components/star-rating/star-rating';
import { OfferInside } from '../../components/offer-inside/offer-inside';
import { OfferHost } from '../../components/offer-host/offer-host';
import { OfferReviews } from '../../components/offer-reviews/offer-reviews';
import comments from '../../mocks/comments';
import OfferCard from '../../components/offer-card/offer-card';
import { Map } from '../../components/map/map';

type OffersScreenProps = {
  offers: Offer[];
};

function OffersScreen({ offers }: OffersScreenProps): JSX.Element {
  const { id } = useParams();
  const offerSelect = offers.find((item) => item.id === Number(id));

  const points = offers.map((offer) => {
    if (offer.id !== Number(id)) {
      return {
        latitude: offer.location.latitude,
        longitude: offer.location.longitude,
      };
    }
  });

  if (!offerSelect) {
    return <div>Оффер не найден</div>;
  }

  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Offers page</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__login">Sign in</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <OfferGallery
              images={offerSelect.images}
              title={offerSelect.title}
            />
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offerSelect.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offerSelect.title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <StarRating rating={offerSelect.rating} variant="offer" />
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offerSelect.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offerSelect.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offerSelect.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offerSelect.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <OfferInside goods={offerSelect.goods} />
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <OfferHost host={offerSelect.host} />
                <div className="offer__description">
                  <p className="offer__text">{offerSelect.description}</p>
                </div>
              </div>
              <OfferReviews comments={comments} />
            </div>
          </div>
          <section className="offer__map map">
            <Map center={offerSelect.city.location} points={points} />
          </section>
          /
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {offers.map(
                (offer) =>
                  offerSelect.id !== offer.id && (
                    <OfferCard offer={offer} key={offer.id} />
                  ),
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OffersScreen;
