import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './ProfilePicture.css'

const cx = classNames.bind(styles)

export default class ProfilePicture extends Component {
  static get propTypes () {
    return {
      imgSrc: PropTypes.string,
      Size60: PropTypes.string,
      Size40: PropTypes.string,
      Size24: PropTypes.string,
      Size20: PropTypes.string,
      Size16: PropTypes.string,
      styleName: PropTypes.string
    }
  };

  render () {
    const { styleName, Size60, Size40, Size24, Size20, Size16 } = this.props

    const className = cx(styles.ProfilePicture, styleName, {
      Size60,
      Size40,
      Size24,
      Size20,
      Size16
    })

    return (
      <div className={className}>
        <img src={this.props.imgSrc} alt='' />
      </div>
    )
  }
}
