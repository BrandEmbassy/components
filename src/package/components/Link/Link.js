import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Link.css'

const cx = classNames.bind(styles)

export default class Link extends Component {
  static get propTypes () {
    return {
      onClick: PropTypes.Func,
      text: PropTypes.string,
      Icon: PropTypes.string,
      Blue: PropTypes.boolean,
      White: PropTypes.boolean,
      Green: PropTypes.boolean,
      Red: PropTypes.boolean,
      Black: PropTypes.boolean,
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
    const { Blue, White, Green, Red, Black, styleName } = this.props

    const className = cx(styles.Link, styleName, {
      Blue,
      White,
      Green,
      Red,
      Black
    })

    return (
      <a className={className} onClick={this.props.onClick}>
        {this.renderIcon()}
        <div className={styles.Text}>
          {this.props.text}
        </div>
      </a>
    )
  }
}
