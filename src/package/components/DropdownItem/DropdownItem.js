import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './DropdownItem.css'

const cx = classNames.bind(styles)

export default class DropdownItem extends Component {
  static get propTypes () {
    return {
      onClick: PropTypes.Func,
      children: PropTypes.Array,
      styleName: PropTypes.string
    }
  };

  render () {
    const { styleName } = this.props

    const className = cx(styles.DropdownItem, styleName)

    return (
      <button className={className} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}
