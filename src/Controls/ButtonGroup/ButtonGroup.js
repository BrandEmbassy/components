import React, { Component } from 'react';
import styles from './ButtonGroup.css';

export default class ButtonGroup extends Component {
  render() {
    return (
      <div className={styles.ButtonGroup}>
        {this.props.children}
      </div>
    );
  }
}

