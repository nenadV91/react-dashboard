import React, { Component } from 'react';
import {Row, Col} from 'antd';
import {
  user, 
  stats, 
  logs, 
  contacts,
  traffic_daily,
  traffic_sources
} from 'utils/dashboard_data';
import moment from 'moment';

import StatsWidget from './widgets/StatsWidget';
import GeoWidget from './widgets/GeoWidget';
import LogsWidget from './widgets/LogsWidget';
import TrafficWidget from './widgets/TrafficWidget';
import ContactsWidget from './widgets/ContactsWidget';
import SourcesWidget from './widgets/SourcesWidget';



class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Row align="middle" gutter={16}>
          <Col className="stats-widget-first" sm={{span: 12}} lg={{span: 6}}>
            <div>
              <h3>{user.name}<br/>Welcome back!</h3>
              <div>Overview for {moment().format("MMM Do YY")}</div>
            </div>
          </Col>

          <Col sm={{span: 12}} lg={{span: 6}}>
            <StatsWidget name={"Views"} data={stats.views} />
          </Col>

          <Col sm={{span: 12}} lg={{span: 6}}>
            <StatsWidget name={"Users"} data={stats.users} />
          </Col>

          <Col sm={{span: 12}} lg={{span: 6}}>
            <StatsWidget name={"Posts"} data={stats.posts} />
          </Col>
        </Row>


        <GeoWidget />


        <Row gutter={16}>
          <Col md={{span: 10}}>
            <LogsWidget data={logs} />
          </Col>

          <Col md={{span: 14}}>
            <TrafficWidget data={traffic_daily} />
          </Col>
        </Row>


        <Row gutter={16}>
          <Col md={{span: 14}}>
            <SourcesWidget data={traffic_sources} />
          </Col>

          <Col md={{span: 10}}>
            <ContactsWidget data={contacts} />
          </Col>
        </Row>

      </div>
    );
  }
}

export default Dashboard
