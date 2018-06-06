import React, { Component } from 'react';
import { Avatar, Menu, Dropdown, Icon } from 'antd';
import { dashboard_data } from 'utils';

const { user } = dashboard_data;

const menu = (
  <Menu className="profile-menu">
    <Menu.Item key={0}>
      <div className="user-name">{user.name}</div>
      <div className="user-email">{user.email}</div>
    </Menu.Item>
    
    <Menu.Divider />

    <Menu.Item key={1} >
      <span>2nd menu item</span>
    </Menu.Item>

    <Menu.Item className="logout" key={2} >
      <Icon type="poweroff" />
      <span>Logout</span>
    </Menu.Item>
  </Menu>
);

class Profile extends Component {
  render() {
    return (
        <Dropdown overlay={menu} trigger={['click']}>
          <div className="ant-dropdown-link">
            <Avatar icon="user" />
          </div>
        </Dropdown>
    );
  }
}

export default Profile