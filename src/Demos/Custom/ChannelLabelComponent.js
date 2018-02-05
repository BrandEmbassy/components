import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';
import ChannelLabel from './../../Custom/ChannelLabel/ChannelLabel';

export default class ChannelLabelComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="HeaderBox">
            <div className="step">Custom</div>
            <div className="step">ChanelLabel</div>
          </div>
        </div>
        
        <ChannelLabel />

      </div>
    );
  }
}

