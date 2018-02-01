import React, { Component } from 'react';
import styles from './Input.css';

export default class Input extends Component {
  render() {
    return (
      <div className={`${styles.Input} ${this.props.isDisabled === true ? styles.Disabled : ''} ${this.props.isError === true ? styles.Error : ''}`}>
        <div className={styles.Label}>
          {this.props.label}                
        </div>
        <div className={styles.Field}>
          <input type="text" name="headline" id="form" placeholder="" />
        </div>
        <div className={styles.Desc}>
          {this.props.desc}                
        </div>
      </div>
    );
  }
}
