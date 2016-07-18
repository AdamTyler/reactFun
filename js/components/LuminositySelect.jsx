import React from 'react';

export default class LuminositySelect extends React.Component {
  handleChange(e) {
    this.props.changeLuminosity(e.target.value)
  }
  render() {
    return (
      <div className="form-group">
        <label htmlFor="luminSelect" className="control-label col-xs-3 col-md-3 col-md-offset-2">Luminosity:</label>
        <div className="col-xs-9 col-md-3">
          <select id="luminSelect" className="form-control" value={this.props.luminosity} onChange={this.handleChange.bind(this)}>
            <option value="bright">Bright</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>
    )
  }
}
