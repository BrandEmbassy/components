import React, { Component } from 'react';
import '!style-loader!css-loader!./../styles/Base.css';
import Checkbox from './../Forms/Checkbox/Checkbox';

export default class CheckboxComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="HeaderBox">
            <div className="step">Controls</div>
            <div className="step">Checkbox</div>
          </div>
        </div>
        
        <Checkbox />

      </div>
    );
  }
}

