import React, { Component } from 'react';
import '!style-loader!css-loader!./../styles/Base.css';
import Radio from './../Forms/Radio/Radio';

export default class RadioComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="HeaderBox">
            <div className="step">Controls</div>
            <div className="step">Radio</div>
          </div>
        </div>
        
        <Radio />

      </div>
    );
  }
}

