import React, { Component } from 'react';
import { colors } from 'utils';
import {
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer
} from 'recharts';


class TrafficBarChart extends Component {
  render() {
    return (
      <div className="chart-container">
        <ResponsiveContainer>
          <BarChart height={300} data={this.props.data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>

           <CartesianGrid 
           vertical={false} 
           stroke={colors.textDark} 
           strokeDasharray="3 3"/>
           
           <XAxis 
           tick={{ fontSize: 12, fill: colors.textMedium }}
           tickMargin={5}
           ticksSize={5}
           dataKey="hour" />
           
           <YAxis 
           tick={{ fontSize: 12, fill: colors.textMedium }}
           tickMargin={5}
           ticksSize={5} />

           <Tooltip cursor={false}/>
           <Legend />
           <Bar dataKey="today" fill={colors.chartMedium} />
           <Bar dataKey="yesterday" fill={colors.chartDark} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default TrafficBarChart
