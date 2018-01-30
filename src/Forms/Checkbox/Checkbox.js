import React, { Component } from 'react';
import  '!style-loader!css-loader!../../styles/Base.css';
import styles from './Checkbox.css';

export default class Checkbox extends Component {
  render() {
    return (
      <div className={styles.CheckboxContent} >

        <div className={styles.Checkbox} />
          <input type="Checkbox" className={styles.Checkbox} />
          <label>

          </label>
        </div>
  
    );
  }
}

