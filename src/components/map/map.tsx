import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef } from 'react';
import { useMap } from '../../utils/use-map';
import offers from '../../mocks/offers';
import { OfferCity } from '../../types/offers';

type MapProps = {
  offers.city: OfferCity;
}

export function Map({ offers.city }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  return <div style={{ height: '500px' }} ref={mapRef}></div>;
}
