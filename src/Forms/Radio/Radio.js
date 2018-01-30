import React, { Component } from 'react';
import  '!style-loader!css-loader!../../styles/Base.css';
import styles from './Radio.css';

export default class Radio extends Component {
  render() {
    return (
      <div className={styles.RadioContent}>
     
        <h1 className={styles.H1}> Radio </h1>
        
          <div className={styles.Radio}>
            <input type="radio" id="test1" name="radio-group" checked />
            <label for="test1"></label>
          </div>
   
      </div>
    );
  }
}
