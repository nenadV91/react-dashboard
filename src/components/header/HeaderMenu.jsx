import React, { Component } from 'react';
import classNames from 'classnames';

class HeaderMenu extends Component {
  render() {
    let menuClass = classNames({
      'header-menu': true,
      'ml-auto': this.props.right,
      'mr-auto': this.props.left,
      'mx-auto': this.props.center
    });

    return (
      <div className={menuClass}> 
        {this.props.children}
      </div>
    );
  }
}

HeaderMenu.Item = props => {
  return <div onClick={props.onClick} 
  className="header-menu-item">
    {props.children}
  </div>
}

export default HeaderMenu;
