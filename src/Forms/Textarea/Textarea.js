import React, { Component } from 'react';
import  '!style-loader!css-loader!../../styles/Base.css';
import styles from './Textarea.css';

export default class Textarea extends Component {
  render() {
    return (
      <div className={styles.TextareaContent}>
     
          <h1 className={styles.H1}> Textarea </h1>

          <textarea className={styles.Textarea} placeholder="sem pis" />
      </div>
    );
  }
}
