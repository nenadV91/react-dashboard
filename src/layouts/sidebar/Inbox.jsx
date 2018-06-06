import React from 'react';

const Inbox = props => {
  return <div className="inbox">
    {props.data.slice(0, 5).map(item => {
      return <div key={item._id} className="inbox-item">
        <div className="inbox-item-name">{item.name}</div>
        <div className="inbox-item-time">{item.time}</div>
        <div className="inbox-item-text">{item.text}</div>
      </div>
    })}
  </div>
}

export default Inbox
