import React from 'react';
import ColorBoxGrid from '../components/ColorBoxGrid.jsx';

export default class ColorBoxes extends React.Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <div className="appContainer">
        <ColorBoxGrid />
      </div>
    )
  }
}
