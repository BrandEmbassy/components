import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';
import Dropdown from './../../Navigation/Dropdown/Dropdown';

export default class DropdownComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="HeaderBox">
            <div className="step">Custom</div>
            <div className="step">Dropdown</div>
          </div>
        </div>
        
        <Dropdown />

      </div>
    );
  }
}

