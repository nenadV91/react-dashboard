import React, { Component } from 'react';
import Menu from 'react-burger-menu/lib/menus/slide';
import { Tabs } from 'antd';

import Inbox from './sidebar/Inbox';
import Alerts from './sidebar/Alerts';

class RightSidebar extends Component {
  render() {
    let {
      handleStateChange,
      isOpen,
      data
    } = this.props;

    let {TabPane} = Tabs;

    return (
      <Menu 
        onStateChange={(state) => handleStateChange(state)}
        outerContainerId={ "outer-container" }
        pageWrapId={ "page-wrap" }
        isOpen={isOpen}
        width={400}
        right >
          <Tabs defaultActiveKey="1">
            <TabPane tab="Inbox" key="1"><Inbox data={data.inbox} /></TabPane>
            <TabPane tab="Alerts" key="2"><Alerts data={data.alerts} /></TabPane>
            <TabPane tab="Chat" key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
      </Menu>
    );
  }
}

export default RightSidebar
