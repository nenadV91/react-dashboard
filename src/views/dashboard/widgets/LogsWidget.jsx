import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Timeline } from 'antd';
import { Widget, LoadMore } from 'components';
import LogsItems from './LogsItems';


class LogsWidget extends Component {
  state = {
    length: 5,
    loading: false,
    hasMore: true
  }

  show = length => {
    return this.props.data
      .slice(0, length);
  }

  loadMore = () => {
    this.setState({loading: true});
    this.loader = setTimeout(() => {
    this.setState(prev => ({
      hasMore: prev.length + 5 < this.props.data.length,
      length: prev.length + 5,
      loading: false
    }))
    }, 1000);
  }

  render() {
    return (
      <Widget className="logs-widget">
        <Widget.Header>
          <Widget.Title>Activity logs</Widget.Title>
        </Widget.Header>

        <Widget.Body>
          <Scrollbars className="scroll-element" style={{height: 350}}>
            <Timeline style={{padding: "10px 15px 10px 0"}}>
              <LogsItems data={this.show(this.state.length)} />
              <LoadMore 
              loadMore={this.loadMore}
              loading={this.state.loading}
              hasMore={this.state.hasMore} />
            </Timeline>
          </Scrollbars>
        </Widget.Body>
      </Widget>
    );
  }
}

export default LogsWidget
