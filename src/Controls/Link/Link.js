import React, { Component } from 'react';
import styles from './Link.css';

export default class Link extends Component {
  render() {
    return (
      <div className={`${styles.Link} 
        ${this.props.Add === true ? styles.Add : ''}
        ${this.props.Cancel === true ? styles.Cancel : ''}
        ${this.props.Edit === true ? styles.Edit : ''}
        ${this.props.Delete === true ? styles.Delete : ''}
        `}>
      </div>
    );
  }
}

