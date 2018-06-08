import React from 'react';
import { Widget } from 'components';
import { Progress } from 'antd';

import ContentItem from './ContentItem'


const CPU = props => {
  let {cpu} = props.data.stats;

  return <Widget className="server-item">
    <Widget.Body>
      <Widget.Title>CPU</Widget.Title>
      <div className="content">
        <ContentItem label="Used">
          <span>{cpu.used ? cpu.used : "NA"}</span>
          <span>{cpu.used && "%"}</span>
        </ContentItem>

        <ContentItem label="Free">
          <span>{cpu.free ? cpu.free : "NA"}</span>
          <span>{cpu.free && "%"}</span>
        </ContentItem>

        <ContentItem style={{marginLeft: "auto"}}>
          <Progress 
            percent={cpu.used ? cpu.used : 0}
            strokeWidth={2}
            type="circle"  
            width={100}/>
        </ContentItem>
      </div>
    </Widget.Body>
  </Widget>
}

export default CPU
