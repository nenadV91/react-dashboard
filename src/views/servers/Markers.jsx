import React from 'react';
import Marker from './Marker';

export default props => {
  return props.data.map((server) => {
    let {lat, lng, name} = server;
    
    return <Marker 
      key={name} 
      name={name} 
      data={server}
      onClick={() => props.onClick(server)}
      position={{lat, lng}} />
  })
}