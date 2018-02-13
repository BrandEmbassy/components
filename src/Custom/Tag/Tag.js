import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Tag.css';

const cx = classNames.bind(styles);

export default class Tag extends Component {
  render() {
    const { Pink, Yellow, Green, Blue, LightBlue, Purple, DarkPurple, Turquoise, Red, Grey } = this.props;

    const className = cx(styles.Tag, {
      Pink,
      Yellow,
      Green,
      Blue,
      LightBlue,
      Purple,
      Turquoise,
      DarkPurple,
      Red,
      Grey
    });

    return (
      <div className={className}>
        {this.props.text}
      </div>
    );
  }
}