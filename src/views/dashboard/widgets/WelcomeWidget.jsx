import React from 'react';
import moment from 'moment';

export default props => (
  <div className="stats-widget-first">
    <div>
      <h3>{props.user.name}<br/>Welcome back!</h3>
      <div>Overview for {moment().format("MMM Do YY")}</div>
    </div>
  </div>
)
