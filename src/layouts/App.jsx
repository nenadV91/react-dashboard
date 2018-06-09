import React, { Component } from 'react';
import { Layout} from 'antd';
import { Route, withRouter, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import LeftSidebar from './SidebarLeft';
import RightSidebar from './SidebarRight';

import routes from 'routes';
import { sidebar_data as data } from 'utils'

const { Content } = Layout;

class App extends Component {
  state = {
      leftSidebar: true,
      rightSidebar: false
    }

  toggleLeftMenu = () => {
    this.setState({
      leftSidebar: !this.state.leftSidebar,
    });
  }

  handleStateChange = (state) => {
    this.setState({rightSidebar: state.isOpen})  
  }
  
  closeRightMenu = () => {
    this.setState({rightSidebar: false})
  }

  toggleRightMenu = () => {
    this.setState({rightSidebar: !this.state.rightSidebar})
  }

  render() {
    const {pathname} = this.props.location;
    const route = pathname.split('/').pop();

    return (
      <Layout id="outer-container" className="app-layout" hasSider={true}>
        <LeftSidebar collapsed={this.state.leftSidebar} route={route} />
        <RightSidebar 
        data={data}
        closeRightMenu={this.closeRightMenu}
        toggleRightMenu={this.toggleRightMenu}
        handleStateChange={this.handleStateChange} 
        isOpen={this.state.rightSidebar} />

        <Layout id="page-wrap" className="main-layout">
          <Navbar 
          toggleMenu={this.toggleRightMenu}
          toggle={this.toggleLeftMenu} />

          <Content className="main-content">
            <Switch>
              {routes.map(route => {
                return <Route 
                key={route.path}
                path={route.path}
                exact={route.exact} 
                component={route.component} />
              })}
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(App);
