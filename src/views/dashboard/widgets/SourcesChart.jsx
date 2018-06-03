import React, { Component } from 'react';
import { colors } from 'utils';
import {
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts';

class SourcesChart extends Component {
  render() {
    return (
      <div className="chart-container">
        <ResponsiveContainer height={270}>
          <RadarChart 
          outerRadius={"80%"} 
          data={this.props.data}>

            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors.chartMedium} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={colors.chartMedium} stopOpacity={0}/>
              </linearGradient>
            </defs>

            <PolarGrid style={{ stroke: colors.chartDark }} />
            <PolarAngleAxis tick={{ fill: colors.textMedium }} dataKey="source" />
            <PolarRadiusAxis tick={{ fill: colors.textMedium, fontSize: 12 }}/>

            <Radar 
            name="trafic-overview" 
            dataKey="traffic" 
            stroke={colors.chartColorPurple} 
            fill="url(#colorUv)" 
            fillOpacity={0.6}/>

          </RadarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default SourcesChart
