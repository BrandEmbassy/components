import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';
import ChanelPicture from './../../Custom/ChanelPicture/ChanelPicture';

export default class ChanelPictureComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="HeaderBox">
            <div className="step">Custom</div>
            <div className="step">ChanelPicture</div>
          </div>
        </div>
        
        <ChanelPicture />

      </div>
    );
  }
}

