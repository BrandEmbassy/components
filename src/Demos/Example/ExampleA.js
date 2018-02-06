import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';

export default class ExampleA extends Component {
  render() {
    return (
      <div className="container">
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <h2 className="h2">Example</h2>
          </div>
        </div>
      </div>
    );
  }
}

