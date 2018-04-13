import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Label.css';

const cx = classNames.bind(styles);

export default class Label extends Component {

  static get propTypes() {
    return {
      children: PropTypes.Array,
      text: PropTypes.string,
      styleName: PropTypes.string
    };
  };

  render() {
    const { styleName } = this.props;

    const className = cx(styles.Label, styleName );

    return (
      <div className={className}>
        <div className={styles.Children}>
          {this.props.children}
        </div>
        <div className={styles.Text}>
          {this.props.text}
        </div>
      </div>
    );
  }
}

