import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Selectbox.css';

const cx = classNames.bind(styles);

export default class Selectbox extends Component {
  render() {
    const { Wide, isDisabled, isError } = this.props;

    const className = cx(styles.Selectbox, {
      Wide,
      Disabled: isDisabled,
      Error: isError,
    });

    return (
      <div className={className}>
        <div className={styles.Label}>
          {this.props.label}                
        </div>
        <select disabled={this.props.isDisabled} >
          <option value="volvo">Volvo</option>
          <option value="mercedes">Mercedes</option>
        </select>
        <div className={styles.Desc}>
          {this.props.desc}                
        </div>
      </div>
    );
  }
}
