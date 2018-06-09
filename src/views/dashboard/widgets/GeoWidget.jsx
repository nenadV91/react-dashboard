import React, { Component } from 'react';
import { Widget } from 'components';
import { Row, Col } from 'antd';

import GeoChart from './GeoChart';
import GeoStats from './GeoStats';

class GeoWidget extends Component {
  render() {
    return (
      <Widget>
        <Widget.Body>
          <Row gutter={16}>
            <Col sm={{span: 12}} lg={{span: 14}}>
              <GeoChart data={this.props.data} />
            </Col>

            <Col sm={{span: 12}} lg={{span: 10}}>
              <GeoStats data={this.props.data} />
            </Col>
          </Row>
        </Widget.Body>
      </Widget>
    );
  }
}

export default GeoWidget
