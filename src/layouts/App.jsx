import React, { Component } from 'react';
import { Layout} from 'antd';
import { Route, withRouter, Switch } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';
import routes from 'routes';

const { Content } = Layout;

class App extends Component {
  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const {pathname} = this.props.location;
    const route = pathname.split('/').pop();

    return (
      <Layout className="app-layout" hasSider={true}>
        <Sidebar collapsed={this.state.collapsed} route={route} />

        <Layout className="main-layout">
          <Header toggle={this.toggle} />

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
