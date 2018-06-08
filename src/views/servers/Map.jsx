import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";
import { map, colors } from "utils";

import Markers from './Markers';

const MapComponent = withScriptjs(withGoogleMap((props) => {
  const iPosition = { lat: 51.505, lng: -0.09 }
  
  return <GoogleMap
  defaultZoom={2}
  defaultOptions={{styles: map[colors.mapTheme]}}
  defaultCenter={iPosition}>
    <Markers onClick={props.onClick} data={props.data} />
  </GoogleMap>
}))

export default MapComponent;