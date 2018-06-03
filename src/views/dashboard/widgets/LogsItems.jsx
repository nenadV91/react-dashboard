import React from 'react';
import { Timeline } from 'antd';

const LogsItems = props => {
  return props.data.map((item, i) => (
    <Timeline.Item key={i}>
      {item.map((e, j) => <div key={j} className="logs-item">
        <div className="logs-item-date">{e.date}</div>
        <div className="logs-item-text">{e.text}</div>
      </div>)}
    </Timeline.Item>
  ))
}

export default LogsItems;