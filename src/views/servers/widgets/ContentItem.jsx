import React from 'react';

const ContentItem = props => {
  return <div style={props.style} className="content-item">
    {props.children && 
      <div className="value">
        {props.children}
      </div>}

    {props.label && 
      <div className="label">
        {props.label}
      </div>}
  </div>
}

export default ContentItem
