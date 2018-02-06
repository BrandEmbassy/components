import React, { Component } from 'react';
import '!style-loader!css-loader!./styles/Grid.css';
import styles from './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <b><a href="http://localhost:6006">Open</a></b> component library
          </div>
        </div>
      </div>
    );
  }
}
