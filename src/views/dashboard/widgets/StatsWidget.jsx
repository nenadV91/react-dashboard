import React, { Component } from 'react';
import { Widget } from 'components';
import { Icon, Switch } from 'antd'
import { colors } from 'utils';
import { 
  Sparklines, 
  SparklinesLine, 
  SparklinesBars 
} from 'react-sparklines';
import moment from 'moment';


class StatsWidget extends Component {
  state = {
    type: "line"
  }

  toggle = (checked) =>  {
    this.setState({type: checked ? "line" : "bars"})
  }

  render() {
    const sparkProps = {
      data: this.props.data.data,
      margin: this.state.type === "line" ? 0 : 7,
      height: 40
    }

    return (
      <Widget className="stats-widget">
        <Widget.Header noBackground className="stats-widget-header">
            <div className="left">
              <div className="stats-widget-header-title">{this.props.name}</div>
              <div className="stats-widget-header-subtitle">
                <span>Latest value for </span>
                <strong>{moment().format("MMM YYYY")}</strong>
              </div>

              <div className="stats-widget-header-value-element flex align-center">
                <Icon className="stats-widget-header-icon" type={this.props.data.icon} />
                <div className="stats-widget-header-value">{this.props.data.value}</div>
              </div>
            </div>

            <div className="right">
              <Switch onChange={this.toggle} size="small" defaultChecked />
            </div>
        </Widget.Header>

        <Widget.Body noPadding className="stats-widget-body">
          <div className="stats-widget-chart">
            <Sparklines {...sparkProps}>
              {this.state.type === "bars" ?
              <SparklinesBars style={{ width: 15, fill: colors.chartDark }} /> :
              <SparklinesLine style={{ width: 1, fill: colors.chartMain }} />}
            </Sparklines>
          </div>
        </Widget.Body>
      </Widget>
    );
  }
}

export default StatsWidget
