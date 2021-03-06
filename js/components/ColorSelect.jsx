import React from 'react';

export default class ColorSelector extends React.Component {
  handleChange(e) {
    this.props.changeHue(e.target.value)
  }
  render() {
    return (
      <div className="form-group">
        <label htmlFor="colorSelect" className="control-label col-xs-3 col-md-3 col-md-offset-2">Hue:</label>
        <div className="col-xs-9 col-md-3">
          <select id="colorSelect" className="form-control" value={this.props.hue} onChange={this.handleChange.bind(this)}>
            <option value="orange">Orange</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="purple">Purple</option>
            <option value="yellow">Yellow</option>
            <option value="pink">Pink</option>
            <option value="green">Green</option>
            <option value="monochrome">Monochrome</option>
          </select>
        </div>
      </div>
    )
  }
}
