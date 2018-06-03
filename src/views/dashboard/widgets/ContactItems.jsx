import React from 'react';
import { List, Avatar } from 'antd';

const ContactItems = props => {
  return (
    <div className="contacts-widget">
      <List
        itemLayout="horizontal"
        dataSource={props.data}
        renderItem={contact => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar icon="user" />}
              title={<div>{contact.name}</div>}
              description={
                <div className="contact-widget-item">
                  <div className="email">{contact.email}</div>
                  <div className="phone">{contact.phone}</div>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ContactItems;
