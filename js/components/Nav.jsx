import React from 'react';

import Header from './Header.jsx';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-static-top">
        <div className="container">
          <Header title={'ReactFun'}/>
        </div>
      </nav>
    )
  }
}
