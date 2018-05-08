import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Channel.css'

const cx = classNames.bind(styles)

export default class Picture extends Component {
  static get propTypes () {
    return {
      styleName: PropTypes.string,
      type: PropTypes.string,
      Size60: PropTypes.string,
      Size40: PropTypes.string,
      Size20: PropTypes.string,
      Size16: PropTypes.string,
      DM: PropTypes.string
    }
  };

  render () {
    const { styleName, type, Size60, Size40, Size20, Size16, DM } = this.props

    const className = cx(styles.Channel, styleName, {
      Facebook: type === 'facebook',
      Twitter: type === 'twitter',
      Instagram: type === 'instagram',
      Google: type === 'google',
      Youtube: type === 'youtube',
      Linkedin: type === 'linkedin',
      Livechat: type === 'livechat',
      Email: type === 'email',
      Forum: type === 'forum',
      Vkontakte: type === 'vkontakte',
      Listening: type === 'listening',
      Size60,
      Size40,
      Size20,
      Size16,
      DM
    })

    return (
      <div className={className} />
    )
  }
}
