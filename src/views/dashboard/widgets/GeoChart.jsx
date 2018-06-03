import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import { colors } from 'utils';


class GeoChart extends Component {
  render() {
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
