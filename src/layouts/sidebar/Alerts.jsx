import React, { Component } from 'react';
import { Radio } from 'antd';
import classNames from 'classnames';


class Alerts extends Component {
  state = {
    show: "all"
  }

  change = value => {
    this.setState({show: value});
  }

  filter = () => {
    let show = this.state.show;
    let data = this.props.data.slice(0, 6);
    if(show === "all") return data;
    if(show === "urgent") return data.filter(({type}) => type === "urgent");
    if(show === "normal") return data.filter(({type}) => type === "normal");
  }

  render() {
    return <div className="alerts">
      <div className="alert-header">
        <span>View: </span>
        <Radio.Group value={this.state.show}
        onChange={(e) => this.change(e.target.value)}>
          <Radio value="all">All</Radio>
          <Radio value="urgent">Urgent</Radio>
          <Radio value="normal">Normal</Radio>
        </Radio.Group>
      </div>

      {this.filter().map(item => {
        let className = classNames({
          "icon-circle": true,
          "urgent": item.type === "urgent",
          "normal": item.type === "normal"
        });

        return <div key={item._id} className="alerts-item">
          <div className="alerts-item-icon">
            <div className={className}></div>
          </div>

          <div className="alerts-item-content">
            <div className="top">
              <div className="alerts-item-title">{item.title}</div>
              <div className="alerts-item-time">{item.time}</div>
            </div>
            
            <div className="alerts-item-text">{item.text}</div>
          </div>
        </div>
      })}
    </div>
  }
}

export default Alerts
