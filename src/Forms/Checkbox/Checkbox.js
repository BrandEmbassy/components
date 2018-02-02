import React, { Component } from 'react';
import styles from './Checkbox.css';

export default class Checkbox extends Component {
  render() {
    return (
      <div className={styles.CheckboxContent} >
        <div className={styles.Checkbox} >
          <input type="checkbox" className={styles.Checkbox} name="xxx" id="xxx" />
          <label for="xxx" />
        </div>
      </div>
    );
  }
}

