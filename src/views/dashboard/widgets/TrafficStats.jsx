import React, { Component } from 'react';

class TrafficStats extends Component {
  sum(data, key) {
    return data.reduce((r, e) => r + e[key], 0)
  }

  render() {
    let data = this.props.data;
    let today = this.sum(data, 'today');
    let yesterday = this.sum(data, 'yesterday');
    let unique = Math.floor(today / 2);

    return <div className="traffic-stats">
      <div className="traffic-stats">
        <div className="traffic-stats-item">
          <div className="traffic-stats-item-title">Todays traffic</div>
          <div className="traffic-stats-item-value">{today}</div>
        </div>
      </div>

      <div className="traffic-stats">
        <div className="traffic-stats-item">
          <div className="traffic-stats-item-title">Yesterday traffic</div>
          <div className="traffic-stats-item-value">{yesterday}</div>
        </div>
      </div>

      <div className="traffic-stats">
        <div className="traffic-stats-item">
          <div className="traffic-stats-item-title">Unique visits</div>
          <div className="traffic-stats-item-value">{unique}</div>
        </div>
      </div>
    </div>
  }
}

export default TrafficStats
