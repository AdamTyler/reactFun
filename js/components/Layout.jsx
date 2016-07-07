import React from 'react';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Nav from './Nav.jsx';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <Main />
        <Footer />
      </div>
    )
  }
}
