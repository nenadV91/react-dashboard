import React, { Component } from 'react';
import { Progress } from 'antd';

class GeoStats extends Component {
  top(n) {
    return this.props.data
      .slice(1)
      .sort((a, b) => b[1] - a[1])
      .slice(0, n);
  }

  get total() {
    return this.props.data
      .slice(1)
      .reduce((r, e) => r + e[1], 0)
  }

  render() {
    return (
      <div>
        <h3 className="widget-title">Traffic</h3>
        <p className="widget-subtitle">Top five countries</p>

        <div>
          {this.top(5).map(([name, value]) => {
            return <div key={name} className="progress-element">
              <div className="progress-element-text">
                <span>{name}</span> - <span>{value}</span>
              </div>

              <div className="progress-element-bar">
                 <Progress percent={Math.floor(value / this.total * 100)} />
              </div>
            </div>
          })}
        </div>
      </div>
    );
  }
}

export default GeoStats
