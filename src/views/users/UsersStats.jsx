import React, { Component } from 'react';
import { Widget } from 'components';
import { Icon, Progress } from 'antd';

class UsersStats extends Component {
  render() {
    return (
      <div>
        <Widget className="user-stat">
          <Widget.Body>
            <div className="title">Total Users</div>

            <div className="value-wrapper">
              <div className="value">{this.props.total}</div>
              <div className="text">
                <Icon type="arrow-up" />
                <div className="change">+ {this.props.increase}%</div>
              </div>
            </div>
          </Widget.Body>
        </Widget>

        <Widget className="user-stat">
          <Widget.Body>
            <div className="title">Active Users</div>

            <div className="value-wrapper">
              <div className="value">{this.props.active}</div>
              <Progress 
              percent={this.props.active_percent}
              strokeWidth={2}
              type="circle"  
              width={80}/>
            </div>
          </Widget.Body>
        </Widget>
      </div>
    );
  }
}

export default UsersStats
