import React from 'react';
import Main from './Main.jsx';
import Nav from './Nav.jsx';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <div className="appContainer">
        <Nav />
        <Main />
      </div>
    )
  }
}
