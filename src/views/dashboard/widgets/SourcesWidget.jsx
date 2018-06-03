import React, { Component } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { Widget } from 'components';
import { Row, Col } from 'antd';

import SourcesChart from './SourcesChart';
import SourcesTable from './SourcesTable';


class SourcesWidget extends Component {
  state = {
    time: "day"
  }

  set(time) {
    this.setState({time})
  }

  render() {
    let time = this.state.time;

    const menu = (
      <Menu>
        {Object.keys(this.props.data).map(time => (
          <Menu.Item>
            <div style={{textTransform: "capitalize"}}
            onClick={() => this.set(time)}>{time}</div>
          </Menu.Item>
        ))}
      </Menu>
    );

    return (
      <Widget className="sources-widget">
        <Widget.Header className="flex align-center">
            <span>Traffic sources</span>

            <Dropdown overlay={menu} placement="bottomRight">
              <Button className="time-button">{time}</Button>
            </Dropdown>
        </Widget.Header>

        <Widget.Body>
          <Row gutter={16}>
            <Col lg={{span: 14}}>
              <SourcesChart data={this.props.data[time]} />
            </Col>

            <Col lg={{span: 10}}>
              <SourcesTable data={this.props.data[time]} />
            </Col>
          </Row>
        </Widget.Body>
      </Widget>
    );
  }
}

export default SourcesWidget
