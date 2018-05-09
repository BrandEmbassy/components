import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Header.css'

const cx = classNames.bind(styles)

export default class Header extends Component {
  static get propTypes () {
    return {
      title: PropTypes.string,
      children: PropTypes.function,
      styleName: PropTypes.string
    }
  };

  renderTitle (title) {
    if (!title) {
      return null
    }

    return <div className={styles.Title}>{this.props.title}</div>
  }

  render () {
    const { styleName, title } = this.props

    const className = cx(styles.Header, styleName)

    return (
      <div className={className}>
        <div className={styles.Logo}><div className='be-icon-be-symbol' /></div>
        {this.props.children}
        {this.renderTitle(title)}
      </div>
    )
  }
}
