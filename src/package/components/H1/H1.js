import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './H1.css'

const cx = classNames.bind(styles)

export default class H1 extends Component {
  static get propTypes () {
    return {
      children: PropTypes.Array,
      styleName: PropTypes.string
    }
  };

  render () {
    const { styleName } = this.props

    const className = cx(styles.H1, styleName)

    return (
      <h1 className={className}>
        {this.props.children}
      </h1>
    )
  }
}
