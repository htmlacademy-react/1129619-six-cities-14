import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { useMap } from '../../utils/use-map';
import { Location, Point } from '../../types/offers';

type MapProps = {
  center: Location;
  points: Point[];
};

export function Map({ center, points }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap({ mapRef, center });
  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        if (point !== undefined) {
          leaflet
            .marker({
              lat: point.latitude,
              lng: point.longitude,
            })
            .addTo(map);
        }
      });
    }
  }, [map, points]);
  return (
    <div className="cities__map" style={{ height: '100%' }} ref={mapRef}></div>
  );
}
