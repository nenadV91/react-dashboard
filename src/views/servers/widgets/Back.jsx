import React from 'react';
import { Icon } from 'antd';

export default props => {
  return <div
  onClick={() => props.onClick(null)}
  className="back">
    <Icon type="swap-left" />
    <span>back</span>
  </div>
}