import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const Map = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '300px'
  };

  const center = { lat: -11.986846, lng: -77.087826 };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_API_GOOGLE_MAPS}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={17.8}
        disableDefaultUI={true}
      >
      <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;