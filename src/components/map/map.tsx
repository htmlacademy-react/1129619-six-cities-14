import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { useMap } from '../use-map';
import { Location, Point } from '../../types/offers';

type MapProps = {
  center: Location;
  points: Point[];
  selectedPoint: number | null;
};

export function Map({ center, points, selectedPoint }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap({ mapRef, center });

  // console.log(selectedPoint);
  // console.log(points[0].id);
  // console.log(selectedPoint === points[0].id);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        if (point !== undefined) {
          leaflet
            .marker(
              {
                lat: point.latitude,
                lng: point.longitude,
              },
              // {
              //   icon: point.id === selectedPoint,
              // },
            )
            .addTo(map);
        }
      });
    }
  }, [map, points]);
  return (
    <div className="cities__map" style={{ height: '100%' }} ref={mapRef}></div>
  );
}
