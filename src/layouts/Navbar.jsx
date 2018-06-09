import React, { Component } from 'react';
import { HeaderMenu } from 'components';
import { Layout, Icon } from 'antd';

import Profile from './navbar/Profile';

class Navbar extends Component {
  render() {
    return (
      <Layout.Header>
        <Icon onClick={this.props.toggle} className="trigger" type="bars" />
        {/*<div className="logo" />*/}
        
        <HeaderMenu right>
          <HeaderMenu.Item onClick={() => this.props.toggleMenu()}>
            <Icon type="bell" />
          </HeaderMenu.Item>

          <HeaderMenu.Item>
            <Profile />
          </HeaderMenu.Item>
        </HeaderMenu>
      </Layout.Header>
    );
  }
}

export default Navbar;
