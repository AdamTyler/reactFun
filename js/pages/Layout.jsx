import React from 'react';
import Header from '../components/Header.jsx';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <div className="">
        <Header />
        {this.props.children}
      </div>
    )
  }
}
