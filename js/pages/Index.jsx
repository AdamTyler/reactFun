import React from 'react';

export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <main className="container well">
        <h1>ReactFun Playground</h1>
        <p>I'm doing some super cool stuff with React and React Router now</p>
        <p>Check out my single page app! Its working!</p>
        <b>Click the navs in the header to see the cool stuff</b>
      </main>
    )
  }
}
