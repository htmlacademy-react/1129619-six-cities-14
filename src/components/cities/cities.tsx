import OfferCard from '../offer-card/offer-card';
import { Offer, Point } from '../../types/offers';
import { addPluralEnding } from '../../utils/common';
import { useState } from 'react';
import { Map } from '../map/map';

type CitiesProps = {
  offers: Offer[];
};

export function Cities({ offers }: CitiesProps): JSX.Element {
  const [hoverOfferId, setHoverOfferId] = useState<Offer['id'] | null>(null);

  const points: Point[] = offers.map((offer) => ({
    id: offer.id,
    latitude: offer.location.latitude,
    longitude: offer.location.longitude,
  }));

  function handleCardHover(offerId: Offer['id'] | null) {
    setHoverOfferId(offerId);
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {offers.length} place{addPluralEnding(offers.length)} to stay in
            Amsterdam
          </b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              {/* <li
                className="places__option places__option--active"
                tabIndex={0}
              >
                Popular
              </li>
              <li className="places__option" tabIndex={0}>
                Price: low to high
              </li>
              <li className="places__option" tabIndex={0}>
                Price: high to low
              </li>
              <li className="places__option" tabIndex={0}>
                Top rated first
              </li> */}
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) => (
              <OfferCard
                offer={offer}
                key={offer.id}
                onCardHover={handleCardHover}
              />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <Map
            center={offers[0].city.location}
            points={points}
            selectedPoint={hoverOfferId}
          />
        </div>
      </div>
    </div>
  );
}
