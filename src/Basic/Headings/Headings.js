import React, { Component } from 'react';
import  '!style-loader!css-loader!../../styles/Base.css';
import styles from './Headings.css';

export default class Headings extends Component {
  render() {
    return (
      <div className={styles.HeaderBox}>
        <div className={styles.Step}>Brand Embassy</div>
        <div className={styles.Step}>Headings</div>
      </div>
    );
  }
}
