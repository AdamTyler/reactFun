import React from 'react';
import randomColor from 'randomcolor';

export default class Component1 extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: randomColor({luminosity: 'bright', hue: 'orange'})
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }
  handleHover(e) {
    this.setState({backgroundColor: randomColor({luminosity: 'bright', hue: 'blue'}) });
    e.target.innerHTML = '';
  }
  handleClick(e) {
    e.target.innerHTML = this.state.backgroundColor;
  }
  render() {
    let style = {
      backgroundColor: this.state.backgroundColor
    }
    return (
      <span className="box" onMouseOver={this.handleHover} onClick={this.handleClick} style={style}>
      </span>
    )
  }
}
