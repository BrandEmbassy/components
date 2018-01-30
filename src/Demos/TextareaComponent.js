import React, { Component } from 'react';
import '!style-loader!css-loader!./../styles/Base.css';
import Textarea from './../Forms/Textarea/Textarea';

export default class TextareaComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="HeaderBox">
            <div className="step">Controls</div>
            <div className="step">Textarea</div>
          </div>
        </div>
        
        <Textarea />

      </div>
    );
  }
}

