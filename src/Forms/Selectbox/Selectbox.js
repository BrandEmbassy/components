import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Selectbox.css';

const cx = classNames.bind(styles);

export default class Selectbox extends Component {
  render() {
    const { isDisabled, isError } = this.props;

    const className = cx(styles.Selectbox, {
      Disabled: isDisabled,
      Error: isError
    });

    return (
      <div className={className}>
        <select>
          <option value="volvo">Volvo</option>
          <option value="mercedes">Mercedes</option>
        </select>
      </div>
    );
  }
}
