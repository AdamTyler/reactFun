import React from 'react';
import Footer from './Footer.jsx';
import Main from './Main.jsx';
import Nav from './Nav.jsx';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: '#e2e3e4',
    }
  }
  render() {
    return (
      <div>
        <Nav />
        <Main color={this.state.backgroundColor}/>
        <Footer />
      </div>
    )
  }
}
