// components/ArcGISMap.tsx
import React, { useEffect, useRef } from 'react';
import '@arcgis/core/assets/esri/themes/light/main.css';
import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';

const ArcGISMap: React.FC = () => {
  const mapDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeMap = async () => {
      try {
        // Vérifier si mapDivRef est bien défini avant de monter le WebMap
        if (mapDivRef.current) {
          const webMap = new WebMap({
            portalItem: { id: 'YOUR_WEBMAP_ID' } // Remplace par l'ID de ton WebMap ArcGIS
          });

          // Monte la carte uniquement si l'élément est prêt
          const view = new MapView({
            container: mapDivRef.current,
            map: webMap
          });
            // Monte le WebMap
        }
      } catch (error) {
        console.error('Erreur lors de l\'initialisation de la carte ArcGIS :', error);
      }
    };

    initializeMap();
  }, []);

  return <div ref={mapDivRef} style={{ height: '100vh', width: '100%' }} />;
};

export default ArcGISMap;
