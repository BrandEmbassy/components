import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Notification.css'

const cx = classNames.bind(styles)

export default class Notification extends Component {
  static get propTypes () {
    return {
      text: PropTypes.string,
      Fixed: PropTypes.boolean,
      isYellow: PropTypes.boolean,
      isRed: PropTypes.boolean,
      isGreen: PropTypes.boolean,
      styleName: PropTypes.string
    }
  };

  render () {
    const { Fixed, isYellow, isRed, isGreen, styleName } = this.props

    const className = cx(styles.Notification, styleName, {
      Fixed,
      isYellow,
      isRed,
      isGreen
    })

    return (
      <div className={className}>
        <span>{this.props.text}</span>
      </div>
    )
  }
}
