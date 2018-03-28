import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Statuses.css';

const cx = classNames.bind(styles);

export default class Statuses extends Component {
  render() {
    const { Orange, Yellow, Green, Blue, Purple, Red, Grey, Reversed } = this.props;

    const className = cx(styles.Statuses, {
      Orange,
      Yellow,
      Green,
      Blue,
      Purple,
      Red,
      Grey,
      Reversed
    });

    return (
      <div className={className}>
        {this.props.text}
      </div>
    );
  }
}

