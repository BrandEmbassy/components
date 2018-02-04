import React, { Component } from 'react';
import styles from './Checkbox.css';

export default class Checkbox extends Component {
  render() {
    return (
      <div className={styles.CheckboxContent}>
        <div className={styles.Checkbox} >
          <input type="checkbox" name={this.props.name} id={this.props.id} />
          <label for={this.props.id} />
        </div>
        <div className={styles.Label}>{this.props.label}</div>
      </div>
    );
  }
}

