import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Button.css'

const cx = classNames.bind(styles)

export default class Button extends Component {
  static get propTypes () {
    return {
      onClick: PropTypes.Func,
      text: PropTypes.string,
      Icon: PropTypes.string,
      Disabled: PropTypes.boolean,
      Reversed: PropTypes.boolean,
      Negative: PropTypes.boolean,
      Cancel: PropTypes.boolean,
      Small: PropTypes.boolean,
      Wide: PropTypes.boolean,
      styleName: PropTypes.string
    }
  };

  renderIcon () {
    if (this.props.Icon) {
      return (
        <div className={this.props.Icon} />
      )
    }

    return null
  }

  render () {
    const { Disabled, Reversed, Negative, Cancel, Small, Wide, styleName } = this.props

    const className = cx(styles.Button, styleName, {
      Disabled,
      Reversed,
      Negative,
      Cancel,
      Small,
      Wide
    })

    return (
      <button className={className} onClick={this.props.onClick}>
        {this.renderIcon()}
        {this.props.text}
      </button>
    )
  }
}
