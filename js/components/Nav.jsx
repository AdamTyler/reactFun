import React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">{this.props.title}</a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li>
              <Link to="ColorBoxes">ColorBox</Link>
            </li>
            <li>
              <Link to="FakeChat">FakeChat</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
