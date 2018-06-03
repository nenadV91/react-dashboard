import React, { Component } from 'react';
import { HeaderMenu } from 'components';
import { Layout, Icon } from 'antd';

class Header extends Component {
  render() {
    return (
      <Layout.Header>
        <Icon onClick={this.props.toggle} className="trigger" type="bars" />
        <HeaderMenu right>
          <HeaderMenu.Item>Test</HeaderMenu.Item>
          <HeaderMenu.Item>Test</HeaderMenu.Item>
        </HeaderMenu>
      </Layout.Header>
    );
  }
}

export default Header;
