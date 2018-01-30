import React, { Component } from 'react';
import '!style-loader!css-loader!./../styles/Base.css';
import Switcher from './../Controls/Switcher/Switcher';

export default class SwitcherComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="HeaderBox">
            <div className="step">Controls</div>
            <div className="step">Switcher</div>
          </div>
        </div>
        
        <Switcher />

      </div>
    );
  }
}

