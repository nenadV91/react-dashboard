import React, { Component } from 'react';
import classNames from 'classnames';

const {
  Provider, 
  Consumer
} = React.createContext();


class Widget extends Component {
  render() {
    let className = classNames({
      "widget": true,
      "no-padding": this.props.noPadding
    }, this.props.className);

    return (
      <div className={className}>
        <Provider value={this.props}>
          {this.props.children}
        </Provider>
      </div>
    );
  }
}


Widget.Header = props => {
  return <Consumer>
    {value => {
      let className = classNames({
        "widget-header": true,
        "no-background": props.noBackground,
        "no-padding": props.noPadding || value.noPadding
      }, props.className);

      return <div style={props.style} className={className}>
        {props.children}
      </div>
    }}
  </Consumer>
}


Widget.Body = props => {
  return <Consumer>
    {value => {
      let className = classNames({
        "widget-body": true,
        "no-padding": props.noPadding || value.noPadding
      }, props.className);

      return <div style={props.style} className={className}>
        {props.children}
      </div>
    }}
  </Consumer>
}

Widget.Title = props => {
  return <Consumer>
    {value => {
      let className = classNames({
        "widget-title": true
      }, props.className);

      const style = {
        ...props.style
      }

      if(props.size) style.fontSize = props.size;
      if(props.color) style.color = props.color;

      return <div style={style} className={className}>
        {props.children}
      </div>
    }}
  </Consumer>
}

Widget.Subtitle = props => {
  return <Consumer>
    {value => {
      let className = classNames({
        "widget-subtitle": true
      }, props.className);

      const style = {
        ...props.style
      }

      if(props.size) style.fontSize = props.size;
      if(props.color) style.color = props.color;

      return <div style={style} className={className}>
        {props.children}
      </div>
    }}
  </Consumer>
}


export default Widget;
