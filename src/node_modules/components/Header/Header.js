import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Header.css';

const cx = classNames.bind(styles);

export default class Header extends Component {

  static get propTypes() {
    return {
      Title: PropTypes.string,
      children: PropTypes.Array,
      styleName: PropTypes.string 
    };
  };

  render() {
    const { styleName } = this.props;

    const className = cx(styles.Header, styleName);

    return (
      <div className={className}>
        <div className={styles.Logo}><div className="be-icon-be-symbol"></div></div>
        {this.props.children}
        <div className={styles.Title}>{this.props.Title}</div>
      </div>
    );
  }
}
