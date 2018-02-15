import React, { Component } from 'react';
import styles from './Label.css';

export default class Label extends Component {
  render() {
    return (
      <div className={styles.Label}>
        <div className={styles.Children}>
          {this.props.children}
        </div>
        <div className={styles.Text}>
          {this.props.text}
        </div>
      </div>
    );
  }
}

