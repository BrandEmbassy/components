import React, { Component } from 'react';
import '!style-loader!css-loader!./styles/Grid.css';
import styles from './Appc.css';

import ButtonGroupComponent from './Demos/ButtonGroupComponent';
import Table from './Forms/Table/Table';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className={styles.Appo}>
          <h1> components </h1>

          <ButtonGroupComponent /><br />

            <div className="row">
              <div className="col-xs-6">
                dadawda
              </div>
              <div className="col-xs-6">
                ddawwwwddddd
              </div>
            </div>



        </div>

        <br />

        <Table />

      </div>
    );
  }
}