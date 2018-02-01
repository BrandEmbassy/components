import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';
import ChanelLabel from './../../Custom/ChanelLabel/ChanelLabel';

export default class ChanelLabelComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="HeaderBox">
            <div className="step">Custom</div>
            <div className="step">ChanelLabel</div>
          </div>
        </div>
        
        <ChanelLabel />

      </div>
    );
  }
}

