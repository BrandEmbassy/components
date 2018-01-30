import React, { Component } from 'react';
import  '!style-loader!css-loader!../../styles/Base.css';
import Table from './Table';

export default class TableComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="HeaderBox">
              <div className="step">BE</div>
              <div className="step">Table</div>
            </div>

          <Table />

        </div>
      </div>
    );
  }
}
