"use client";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useState, useCallback, useRef } from "react";

function GoogleM() {
  
  const [latitude, setLatitude] = useState(33.890409);
  const [longitude, setLongitude] = useState(35.49862);
  const [pos, setPos] = useState(0);
  const center = {
    lat: latitude,
    lng: longitude,
  };
  const position = {
    lat: latitude,
    lng: longitude,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBkNrB5dUdur4Bh91AY2Ig-3ptMDl7Ap7U",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);
  const handleMarkerDragEnd = useCallback((e) => {
    console.log("Marker dragged to:", e.latLng.lat(), e.latLng.lng());
  }, []);

  return isLoaded ? (
    <div className="w-full h-48 sm:h-52 md:h-72 lg:h-96">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={center}
        position={position}
        defaultZoom={16}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker
          position={position}
          draggable={true}
          onDragEnd={handleMarkerDragEnd}
        />
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default GoogleM;
