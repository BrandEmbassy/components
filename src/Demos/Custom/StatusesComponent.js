import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';
import Statuses from './../../Custom/Statuses/Statuses';

export default class StatusesComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="HeaderBox">
            <div className="step">Custom</div>
            <div className="step">Statuses</div>
          </div>
        </div>
        
        <Statuses />

      </div>
    );
  }
}

