import React from 'react';
import randomColor from 'randomcolor';

export default class Component1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hue: props.hue,
      luminosity: props.luminosity,
      // animate: props.animate
      backgroundColor: randomColor({luminosity: 'bright', hue: props.hue, luminosity: props.luminosity})
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }
  handleHover(e) {
    this.setState({backgroundColor: randomColor({luminosity: this.props.luminosity, hue: this.props.hue}) });
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
  componentDidMount() {
    function updateColor() {
      this.setState({
        backgroundColor: randomColor({luminosity: this.props.luminosity, hue: this.props.hue})
      })
    }
    setInterval(updateColor.bind(this), 633);
  }
}
