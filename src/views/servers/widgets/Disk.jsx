import React from 'react';
import { Widget } from 'components';
import {colors} from 'utils';
import {PieChart, Pie, Tooltip, Cell} from "recharts";

import ContentItem from './ContentItem'


const Disk = props => {
  let {disk} = props.data.stats;
  let data = [
    {name: "Free", value: disk.free},
    {name: "Used", value: disk.used}
  ]

  const RADIAN = Math.PI / 180;   
  const customLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x  = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy  + radius * Math.sin(-midAngle * RADIAN);
   
    return (
      <text x={x} y={y} fill="white" textAnchor={"center"}  dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return <Widget className="server-item">
    <Widget.Body>
      <Widget.Title>Disk</Widget.Title>
      <div className="content">
        <ContentItem label="Used">
          <span>{disk.used ? disk.used : "NA"}</span>
          <span>{disk.used && "GB"}</span>
        </ContentItem>

        <ContentItem label="Free">
          <span>{disk.free ? disk.free : "NA"}</span>
          <span>{disk.free && "GB"}</span>
        </ContentItem>

        <ContentItem style={{marginLeft: "auto"}}>
          <PieChart width={80} height={80}>
            <Pie isAnimationActive={false} 
            dataKey="value"
            outerRadius={35}
            fill={colors.chartMain}
            data={data} 
            labelLine={false}
            cx={40}
            cy={35}
            label={customLabel}
            stroke="transparent">
              <Cell fill={colors.chartDark}/>
              <Cell fill={colors.chartMain}/>
            </Pie>
            <Tooltip/>
          </PieChart>
        </ContentItem>
      </div>
    </Widget.Body>
  </Widget>
}

export default Disk
