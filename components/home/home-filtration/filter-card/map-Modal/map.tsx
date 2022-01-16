import React, { useState, useRef, Fragment, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { formatRelative } from "date-fns";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
// import GoogleSuggest from "./Search";
import { Search } from "./Search";
import { FieldValues, UseFormSetValue } from "react-hook-form";

const libraries: (
  | "places"
  | "drawing"
  | "geometry"
  | "localContext"
  | "visualization"
)[] = ["places"];
const mapContainerStyle = {
  height: "30vh",
  // width: "50vw",
};
const options = {
  // styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 30.59382,
  lng: 32.26995,
};
// import "@reach/combobox/styles.css";
interface Props {
  setValue?: UseFormSetValue<FieldValues>;
}
export const LocationModal: React.FC<Props> = ({ setValue }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.MAPS_API_KEY
      ? process.env.MAPS_API_KEY
      : "AIzaSyDMYv42WF4vGMHUHxV1uKox3yrYnVMO4ME",
    libraries,
  });

  const [marker, setMarker] = useState<{ lat: number; lng: number }>({
    lat: 30.59382,
    lng: 32.26995,
  });
  const [selected, setSelected] = useState<any>(null);
  useEffect(() => {
    if (setValue) {
      setValue("latitude", marker.lat);
      setValue("longitude", marker.lng);
    }
  }, [marker]);

  const mapRef = useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  console.log(marker);
  const onMapClick = React.useCallback((e) => {
    setMarker({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  }, []);
  if (loadError) return <p>Error</p>;
  if (!isLoaded) return <p>Loading...</p>;

  return (
    <div className="position-relative">
      <Search />
      {/* <GoogleSuggest /> */}
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        <Marker
          position={{ lat: marker.lat, lng: marker.lng }}
          onClick={() => {
            setSelected(marker);
          }}
        />
      </GoogleMap>
    </div>
  );
};
