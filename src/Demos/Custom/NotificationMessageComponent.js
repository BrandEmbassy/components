import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';
import NotificationMessages from './../../Custom/NotificationMessages/NotificationMessages';

export default class NotificationMessagesComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="HeaderBox">
            <div className="step">Custom</div>
            <div className="step">NotificationMessages</div>
          </div>
        </div>
        
        <NotificationMessages />

      </div>
    );
  }
}

