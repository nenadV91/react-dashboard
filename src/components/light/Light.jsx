import React from 'react';
import classNames from 'classnames';


export default props => {
  let className = classNames({
    "light-icon": true,
    "active": props.active,
    "not-active": !props.active
  });

  let style = {
    ...props.style
  }

  if(props.size) {
    style.width = props.size;
    style.height = props.size;
  }

  return (
    <div 
    style={style} 
    className={className}></div>
  );
}