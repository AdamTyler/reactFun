import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <a className="navbar-brand" href="#">{this.props.title}</a>
    )
  }
}
