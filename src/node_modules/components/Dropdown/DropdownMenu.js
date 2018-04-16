import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DropdownMenu.css';

const cx = classNames.bind(styles);

export default class DropdownMenu extends Component {

  static get propTypes() {
    return {
      children: PropTypes.Array,
      styleName: PropTypes.string,
      isOpen: PropTypes.boolean 
    };
  };

  render() {
    const { isOpen, styleName } = this.props;

    const className = cx(styles.DropdownMenu, styleName, {
      Show: isOpen
    });

    return (
      <div className={className}>
        <div className={styles.MenuFlex}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
