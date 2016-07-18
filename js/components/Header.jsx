import React from 'react';

import Nav from './Nav.jsx';

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <Nav title={'ReactFun'}/>
      </nav>

    )
  }
}
