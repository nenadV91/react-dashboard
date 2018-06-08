import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { servers_data } from 'utils';

import Map from './Map';
import Server from './Server';
import Servers from './Servers';

class Index extends Component {
  state = {
    data: [],
    active: null
  }

  componentWillMount = () => {
    this.setState({data: servers_data})
  }

  handleClick = server => {
    this.setState({active: server})
  }

  render() {
    let style = { height: `100%` }

    return (
      <Row style={style} gutter={16}>
        <Col lg={{span: 8}}>
            {this.state.active ?
            <Server onClick={this.handleClick} data={this.state.active} /> :
            <Servers onClick={this.handleClick} data={this.state.data} />}
        </Col>

        <Col style={style} lg={{span: 16}}>
          <Map
          isMarkerShown
          data={this.state.data}
          onClick={this.handleClick}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={style} />}
          containerElement={<div style={style} />}
          mapElement={<div style={style} />} />
        </Col>
      </Row>
    );
  }
}

export default Index
