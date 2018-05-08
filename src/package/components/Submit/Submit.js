import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './../Button/Button.css'

const cx = classNames.bind(styles)

export default class Submit extends Component {
  static get propTypes () {
    return {
      text: PropTypes.string,
      styleName: PropTypes.string
    }
  };

  render () {
    const { styleName } = this.props

    const className = cx(styles.Button, styleName)

    return (
      <input className={className} type='submit' value={this.props.text} />
    )
  }
}
