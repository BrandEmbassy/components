import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';
import ProfilePicture from './../../Custom/ProfilePicture/ProfilePicture';

export default class ProfilePictureComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="HeaderBox">
            <div className="step">Custom</div>
            <div className="step">ProfilePicture</div>
          </div>
        </div>
        
        <ProfilePicture />

      </div>
    );
  }
}

