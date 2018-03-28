import React, { Component } from 'react';
import styles from './Radio.css';

export default class Radio extends Component {
  render() {
    return (
      <div className={styles.RadioContent} >
        <div className={styles.Radio} >
          <input type="radio" name={this.props.name} id={this.props.id} />
          <label for={this.props.id} />
        </div>
        <div className={styles.Label}>{this.props.label}</div>
      </div>
    );
  }
}
