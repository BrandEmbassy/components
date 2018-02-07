import React, { Component } from 'react';
import styles from './Notification.css';

export default class Notification extends Component {
  render() {
    return (
      <div className={`${styles.Notification} 
        ${this.props.isYellow === true ? styles.isYellow : ''}
        ${this.props.isRed === true ? styles.isRed : ''}
        ${this.props.isGreen === true ? styles.isGreen : ''}
        `}>
        <span>{this.props.text}</span>
      </div>
    );
  }
}

