import React, { Component } from 'react';
import  '!style-loader!css-loader!../../styles/Base.css';
import styles from './Input.css';

export default class Input extends Component {
  render() {
    return (
      <div className={styles.InputContent}>
     
          <h1 className={styles.H1}> Input </h1>

          <input type="text" className={styles.Input} />

      </div>
    );
  }
}
