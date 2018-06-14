// @flow

import * as React from 'react'
// @flow-skip-next-line
import classNames from 'classnames/bind'
import styles from './Channel.css'

const cx = classNames.bind(styles)

type Props = {
  styleName: string,
  type: string,
  size: number,
  isPrivate: boolean
}

export default class Picture extends React.Component<Props> {
  render () {
    const { styleName, size, isPrivate, type } = this.props

    const className = cx(styles.Channel, styleName, type, {
      size60: size === 60,
      size40: size === 40,
      size20: size === 20,
      size16: size === 16,
      isPrivate
    })

    return (
      <div className={className} />
    )
  }
}

// {amazon: type === 'amazon',
// apple: type === 'apple',
// apple-apps: type === 'apple-apps',
// email: type === 'email',
// facebook: type === 'facebook',
// facebook-messenger: type === 'facebook-messenger',
// forum: type === 'forum',
// google: type === 'google',
// google-search: type === 'google-search',
// google-play: type === 'google-play',
// google-maps: type === 'google-maps',
// instagram: type === 'instagram',
// kik: type === 'kik',
// linkedin: type === 'linkedin',
// listening: type === 'listening',
// livechat: type === 'livechat',
// ok: type === 'ok',
// pinterest: type === 'pinterest',
// rss: type === 'rss',
// slack: type === 'slack',
// sms: type === 'sms',
// snapchat: type === 'snapchat',
// telegram: type === 'telegram',
// tumblr: type === 'tumblr',
// twitter: type === 'twitter',
// viber: type === 'viber',
// vkontakte: type === 'vkontakte',
// whatsapp: type === 'whatsapp',
// youtube: type === 'youtube',}
