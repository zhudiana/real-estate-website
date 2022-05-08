import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 8.99310240805,
  lng: 38.7849998474,
};

function MyComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAjEGHTJTrMk9bw5MtPL_O-4UOGOsBxDn4">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
