import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { useMap } from '../use-map';
import { Location, Point } from '../../types/offers';
import { useAppSelector } from '../../hooks';
import { activePin, defaultPin } from '../../const';

type MapProps = {
  center: Location;
  points: Point[];
};

export function Map({ center, points }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap({ mapRef, center });

  // не совсем ясна функция getActiveOffer
  const activeOfferId = useAppSelector(getActiveOffer)?.id;

  useEffect(() => {
    if (map) {
      map.eachLayer((layer) => {
        if (layer instanceof leaflet.Marker) {
          map.removeLayer(layer);
        }
      });

      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          })
          .setIcon(id === activeOfferId ? activePin : defaultPin)
          .addTo(map);
      });
    }
  }, [map, points]);
  return (
    <div className="cities__map" style={{ height: '100%' }} ref={mapRef}></div>
  );
}
