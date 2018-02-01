import React, { Component } from 'react';
import styles from './Button.css';

export default class Button extends Component {
  render() {
    return (
      <div className={`${styles.Button} 
        ${this.props.isDisabled === true ? styles.Disabled : ''}
        ${this.props.isReversed === true ? styles.Reversed : ''}
        ${this.props.isNegative === true ? styles.Negative : ''}
        ${this.props.isCancel === true ? styles.Cancel : ''}
        ${this.props.isDisabled === true ? styles.Disabled : ''}
        ${this.props.Small === true ? styles.Small : ''}
        `}>
          {this.props.text} 
      </div>
    );
  }
}

