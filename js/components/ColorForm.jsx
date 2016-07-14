import React from 'react';

import ColorSelect from './ColorSelect.jsx';
import LuminositySelect from './LuminositySelect.jsx';

export default class ColorForm extends React.Component {
  render() {
    return (
      <div className="col-xs-12">
        <form className="form-horizontal">
          <ColorSelect hue={this.props.hue} changeHue={this.props.changeHue} />
          <LuminositySelect luminosity={this.props.luminosity} changeLuminosity={this.props.changeLuminosity} />
        </form>
      </div>
    )
  }
}
