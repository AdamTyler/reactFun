import React from 'react';

import ColorBox from './ColorBox.jsx';
import ColorForm from './ColorForm.jsx';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = { hue: 'blue', luminosity: 'bright' }
  }
  setHue(hue) {
    console.log('set hue', hue)
    this.setState({hue});
  }
  setLuminosity(luminosity) {
    console.log('set lumin', luminosity)
    this.setState({luminosity});
  }
  render() {
    return (
      <main className="container">
        <div className="row">
          <ColorForm hue={this.state.hue} luminosity={this.state.luminosity}
           changeHue={this.setHue.bind(this)} changeLuminosity={this.setLuminosity.bind(this)} />
        </div>
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
        <ColorBox hue={this.state.hue} luminosity={this.state.luminosity} />
      </main>
    )
  }
}
