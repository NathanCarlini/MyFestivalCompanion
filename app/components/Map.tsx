// components/MapComponent.tsx
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

interface MapComponentProps {
  onMapInitialized: (instance: L.Map) => void; // Prop pour transmettre l'instance de la carte au parent
}

const MapComponent: React.FC<MapComponentProps> = ({ onMapInitialized }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [46.603354, 1.888334], // Coordonnées centrées sur la France
        zoom: 6, // Niveau de zoom
        maxZoom: 19,
        minZoom: 3,
      });

      // Ajouter une couche OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Transmettre l'instance de la carte au parent
      onMapInitialized(map);
    }

    // Nettoyer l'instance de la carte lorsque le composant est démonté
    return () => {
      if (window.map) {
        window.map.remove();
        window.map = null;
      }
    };
  }, [onMapInitialized]);

  return (
    <div
      ref={mapContainerRef}
      style={{
        width: '100%',
        height: '500px',
      }}
    ></div>
  );
};

export default MapComponent;
