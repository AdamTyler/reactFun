import React from 'react';

import ColorBox from './ColorBox.jsx';
import ColorSelect from './ColorSelect.jsx';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = { hue: 'blue' }
  }
  setHue(hue) {
    console.log('main set hue to ', hue)
    this.setState({hue});
  }
  render() {
    return (
      <main className="container">
        <div className="row">
        <ColorSelect hue={this.state.hue} changeHue={this.setHue.bind(this)} />
        </div>
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
        <ColorBox hue={this.state.hue} />
      </main>
    )
  }
}
