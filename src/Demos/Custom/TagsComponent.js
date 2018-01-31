import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';
import Tags from './../../Custom/Tags/Tags';

export default class TagsComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="HeaderBox">
            <div className="step">Custom</div>
            <div className="step">Tags</div>
          </div>
        </div>
        
        <Tags />

      </div>
    );
  }
}

