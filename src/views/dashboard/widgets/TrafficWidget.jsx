import React, { Component } from 'react';
import { Widget } from 'components';
import { Switch } from 'antd';

import TrafficAreaChart from './TrafficAreaChart';
import TrafficBarChart from './TrafficBarChart';
import TrafficStats from './TrafficStats';


class TrafficWidget extends Component {
  state = {
    chart: "bar"
  }

  toggle = () => {
    this.setState(({chart}) => ({
      chart: chart === "area" ? "bar" : "area"
    }))
  }

  render() {
    return (
      <Widget className="traffic-widget">
        <Widget.Header>
          <Widget.Title>Traffic today</Widget.Title>
          <Switch defaultChecked onChange={this.toggle} size="small" />
        </Widget.Header>

        <Widget.Body>
          {this.state.chart === "area" ?
          <TrafficAreaChart data={this.props.data} /> :
          <TrafficBarChart data={this.props.data} /> }
          <TrafficStats data={this.props.data} />
        </Widget.Body>
      </Widget>
    );
  }
}

export default TrafficWidget
