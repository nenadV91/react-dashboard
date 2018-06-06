import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Widget, LoadMore } from 'components';
import ContactItems from './ContactItems';

class ContactsWidget extends Component {
  state = {
    length: 4,
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
      <Widget>
        <Widget.Header>
          <Widget.Title>Contacts</Widget.Title>
        </Widget.Header>

        <Widget.Body>
          <Scrollbars className="scroll-element" style={{ height: 310 }}>
            <ContactItems data={this.show(this.state.length)} />
            <LoadMore 
            loadMore={this.loadMore}
            loading={this.state.loading}
            hasMore={this.state.hasMore} />
          </Scrollbars>
        </Widget.Body>
      </Widget>
    );
  }
}

export default ContactsWidget;
