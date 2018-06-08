/*global google*/
import React, { Component } from 'react';
import { Marker, InfoWindow } from "react-google-maps";
import { colors } from 'utils';
import Svg from './Svg';

class MarkerWithPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  mouseEnter() {
    this.setState({isOpen: true});
  }

  mouseLeave() {
    this.setState({isOpen: false});
  }

  render() {
    const status = this.props.data.status;
    const color = status !== "running" ? colors.red : colors.chartMain
    const svg = new Svg(color);

    const iconOptions = {
      url: svg.render(),
      anchor: new google.maps.Point(35, 35),
      scaledSize: new google.maps.Size(70, 70)
    }

    return <Marker
    icon={iconOptions}
    onClick={this.props.onClick}
    onMouseOver={this.mouseEnter.bind(this)}
    onMouseOut={this.mouseLeave.bind(this)}
    position={this.props.position}>
      {this.state.isOpen && 
      <InfoWindow>
        <div className="marker-info">
        {this.props.name}</div>
      </InfoWindow>}
    </Marker>
  }
}

export default MarkerWithPopup;