import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon, Layout } from 'antd';

import routes from 'routes';

const { Sider } = Layout;

class Sidebar extends Component {
  render() {
    let route = "/" + this.props.route;

    return (
      <Sider
        className="main-sidebar"
        collapsedWidth={64}
        breakpoint="md"
        collapsible={true}
        trigger={null}
        collapsed={this.props.collapsed}>
        <Menu 
        defaultSelectedKeys={[route]} 
        theme="dark" 
        mode="inline" >
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
