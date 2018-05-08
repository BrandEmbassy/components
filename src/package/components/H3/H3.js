import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './H3.css'

const cx = classNames.bind(styles)

export default class H3 extends Component {
  static get propTypes () {
    return {
      children: PropTypes.Array,
      styleName: PropTypes.string
    }
  };

  render () {
    const { styleName } = this.props

    const className = cx(styles.H3, styleName)

    return (
      <h3 className={className}>
        {this.props.children}
      </h3>
    )
  }
}
