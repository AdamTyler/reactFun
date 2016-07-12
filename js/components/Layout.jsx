import React from 'react';
import Footer from './Footer.jsx';
import Main from './Main.jsx';
import Nav from './Nav.jsx';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <div>
        <Nav />
        <Main />
        <Footer />
      </div>
    )
  }
}
