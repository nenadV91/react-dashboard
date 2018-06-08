import React, {Component} from 'react';
import { Light } from 'components';


const ServersItem = props => {
  let {server} = props;
  let {stats} = server;

  return (
    <div 
    onClick={props.onClick}
    className="server-list-item">
      <div className="top">
        <div className="title">{server.name}</div>
      </div>

      <div className="left">
        <div className="content">
          <div className="content-item">
            <div className="label">CPU usage: </div>
            <div className="value">{stats.cpu.used || "NA"} {stats.cpu.used && "%"}</div>
          </div>

          <div className="content-item">
            <div className="label">Memory usage: </div>
            <div className="value">{stats.memory.used || "NA"} {stats.memory.used && "GB"} 
            <span> / {stats.memory.total || "NA"} {stats.memory.total && "GB"}</span></div>
          </div>

          <div className="content-item">
            <div className="label">Disk usage: </div>
            <div className="value">{stats.disk.used || "NA"} {stats.disk.used && "GB"} 
            <span> / {stats.disk.total || "NA"} {stats.disk.total && "GB"}</span></div>
          </div>
        </div>

        <Light size={10} active={server.status === "running"} />
      </div>
    </div>
  )
}


class Servers extends Component {
  handleClick = server => {
    this.props.onClick(server)
  }

  render() {
    let {data} = this.props;

    return (
      <div className="server-list">
        {data.map(server => <ServersItem 
          key={server.name} 
          onClick={() => this.handleClick(server)}
          server={server} />)}
      </div>
    )
  }
}

export default Servers
