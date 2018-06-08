import React from 'react';
import { Widget } from 'components';

const Info = props => {
  let server = props.data;

  return <Widget className="server-item">
    <Widget.Body>
      <Widget.Title className="no-border" size={30}>{server.name}</Widget.Title>
      <Widget.Subtitle size={12}>
        <span>Up time: </span>
        <span className="up-time">{server.up_time}</span>
      </Widget.Subtitle>
    </Widget.Body>
  </Widget>
}
export default Info
