import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Notification.css';

const cx = classNames.bind(styles);

export default class Notification extends Component {
  render() {
    const { Fixed, isYellow, isRed, isGreen } = this.props;

    const className = cx(styles.Notification, {
      Fixed,
      isYellow,
      isRed,
      isGreen
    });

    return (
      <div className={className}>

          <span>{this.props.text}</span>

      </div>
    );
  }
}

