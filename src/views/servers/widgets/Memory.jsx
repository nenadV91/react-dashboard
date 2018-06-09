import React from 'react';
import { Widget } from 'components';
import { Progress } from 'antd';

import ContentItem from './ContentItem'


const Memory = props => {
  let {memory} = props.data.stats;
  let percent = Math.floor((memory.used / memory.total * 100).toFixed(2));

  return <Widget className="server-item">
    <Widget.Body>
      <Widget.Title>Memory</Widget.Title>
      <div className="content">
        <ContentItem label="Used">
          <span>{memory.used ? memory.used : "NA"}</span>
          <span>{memory.used && "GB"}</span>
        </ContentItem>

        <ContentItem label="Free">
          <span>{memory.free ? memory.free : "NA"}</span>
          <span>{memory.free && "GB"}</span>
        </ContentItem>

        <ContentItem style={{marginLeft: "auto"}}>
           <Progress 
            percent={memory.used ? percent : 0}
            strokeWidth={2}
            type="circle"  
            width={70}/>
        </ContentItem>
      </div>
    </Widget.Body>
  </Widget>
}

export default Memory
