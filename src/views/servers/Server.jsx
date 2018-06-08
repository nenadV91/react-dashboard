import React, { Component } from 'react';

import Info from './widgets/Info';
import CPU from './widgets/CPU';
import Memory from './widgets/Memory';
import Disk from './widgets/Disk';
import Back from './widgets/Back';

class Server extends Component {
  render() {
    let {data} = this.props;
    if(!data) return null;

    return (
      <div>
        <Info data={this.props.data} />
        <CPU data={this.props.data} />
        <Memory data={this.props.data} />
        <Disk data={this.props.data} />
        <Back onClick={this.props.onClick} />
      </div>
    );
  }
}

export default Server
