import React, { Component } from 'react';
import { colors } from 'utils';
import {
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';

class TrafficAreaChart extends Component {
  render() {
    return (
      <div className="chart-container">
        <ResponsiveContainer>
          <AreaChart height={300}
            data={this.props.data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>

            <defs>
              <linearGradient id="colorToday" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors.chartMedium} stopOpacity={0} />
                <stop offset="70%" stopColor={colors.chartMedium} stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <defs>
              <linearGradient id="colorYesterday" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors.chartDark} stopOpacity={0.1} />
                <stop offset="70%" stopColor={colors.chartDark} stopOpacity={0.4} />
              </linearGradient>
            </defs>

            <CartesianGrid 
              stroke={colors.textDark}  
              vertical={false} 
              strokeDasharray="3 3" />
            
            <XAxis
              tickMargin={5}
              tick={{ fontSize: 12, fill: colors.textMedium }}
              dataKey="hour"
              tickSize={5} />

            <YAxis
              tick={{ fontSize: 12, fill: colors.textMedium }}
              tickSize={5} />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="today"
              stroke={colors.chartMedium}
              fillOpacity={1}
              fill="url(#colorToday)" />

            <Area
              type="monotone"
              dataKey="yesterday"
              stroke={colors.chartDark}
              fillOpacity={1}
              fill="url(#colorYesterday)" />

            <Legend margin={{ top: 20, bottom: 20 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default TrafficAreaChart;
