import { useEffect, useRef, useState } from 'react';
import leaflet, { Map } from 'leaflet';
import { Location } from '../types/offers';

type MapController = {
  center: Location;
  mapRef: React.MutableRefObject<null>;
};

export function useMap({ mapRef, center }: MapController) {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: center.latitude,
          lng: center.longitude,
        },
        zoom: center.zoom,
      });
      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderRef.current = true;
    }
  }, [mapRef, center]);
  return map;
}
