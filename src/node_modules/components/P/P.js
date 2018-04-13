import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './P.css';

const cx = classNames.bind(styles);

export default class P extends Component {

  static get propTypes() {
    return {
      children: PropTypes.Array,
      styleName: PropTypes.string 
    };
  };

  render() {
    const { styleName } = this.props;

    const className = cx(styles.P, styleName);

    return (
      <p className={className}>
        {this.props.children}
      </p>
    );
  }
}
