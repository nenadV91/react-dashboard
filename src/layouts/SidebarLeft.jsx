import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon, Layout } from 'antd';

import routes from 'routes';

const { Sider } = Layout;

class Sidebar extends Component {
  render() {
    return (
      <Sider
        className="main-sidebar"
        collapsedWidth={64}
        breakpoint="md"
        collapsible={true}
        trigger={null}
        collapsed={this.props.collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["/" + this.props.route]}>
          {routes.map(route => {
            return <Menu.Item key={route.path}>
              <NavLink to={route.path}>
                <Icon type={route.icon}/>
                <span>{route.text}</span>
              </NavLink>
            </Menu.Item>
          })}
        </Menu>
      </Sider>
    );
  }
}

export default Sidebar
