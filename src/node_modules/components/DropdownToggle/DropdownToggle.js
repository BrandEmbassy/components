import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DropdownToggle.css';

const cx = classNames.bind(styles);

export default class DropdownToggle extends Component {

  static get propTypes() {
    return {
      onClick: PropTypes.Func,
      children: PropTypes.Array,
      isOpen: PropTypes.boolean,
      styleName: PropTypes.string
    };
  };

  render() {
    const { isOpen, styleName } = this.props;

    const className = cx(styles.DropdownToggle, styleName, {
      isOpen
    });

    return (
      <button className={className} onClick={this.props.onClick}>
        {this.props.children}
        <div className={styles.Icon}><div className="be-icon-arrow-down"></div></div>
      </button>
    );
  }
}
