import React from 'react';
import randomColor from 'randomcolor';

export default class Component1 extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: "#e2e3e4"
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({backgroundColor: randomColor() });
  }
  render() {
    let style = {
      backgroundColor: this.state.backgroundColor
    }
    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="box" onClick={this.handleClick} style={style}>
            <h1>Click Me!</h1>
            <p>I change colors!</p>
            <p>current color: {this.state.backgroundColor}</p>
          </div>
        </div>
      </div>
    )
  }
}
