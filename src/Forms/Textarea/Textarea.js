import React, { Component } from 'react';
import  '!style-loader!css-loader!../../styles/Base.css';
import styles from './Textarea.css';

export default class Textarea extends Component {
  render() {
    return (
      <div className={styles.TextareaField}>
        <div className={`${styles.Label} ${styles.isRed} `}>
          {this.props.label}                
        </div>
        <div className={styles.Textarea}>
        <textarea name="xyz" class="textarea" id="form" placeholder=""> </textarea>
        </div>
        <div className={`${styles.Desc} ${styles.isRed} `}>
          {this.props.desc}                
        </div>
      </div>
    );
  }
}
