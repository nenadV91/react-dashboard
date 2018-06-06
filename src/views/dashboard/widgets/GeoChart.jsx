import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import { colors } from 'utils';
import { Spin, Icon } from 'antd';



class GeoChart extends Component {
  render() {
    let antIcon = <Icon 
    spin 
    type="loading" 
    style={{ fontSize: 24 }} />

    const chartOptions = {
      legend: false,
      backgroundColor: "",
      datalessRegionColor: colors.chartDark,
      colorAxis: {colors: [
        colors.chartMedium,
        colors.chartMedium
      ]}
    }
    
    return (
      <Chart
      loader={<Spin indicator={antIcon} />}
      chartType="GeoChart"
      options={chartOptions}
      data={this.props.data}
      graph_id="geo-chart"
      height={300}
      width={500}
      legend_toggle /> 
    );
  }
}

export default GeoChart
