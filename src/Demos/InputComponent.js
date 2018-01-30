import React, { Component } from 'react';
import '!style-loader!css-loader!./../styles/Base.css';
import Input from './../Forms/Input/Input';

export default class InputComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="HeaderBox">
            <div className="step">Controls</div>
            <div className="step">Input</div>
          </div>
        </div>
        
        <Input />

      </div>
    );
  }
}

