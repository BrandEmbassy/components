// @flow

import * as React from 'react'
// @flow-skip-next-line
import classNames from 'classnames/bind'
import styles from './Channel.css'

const cx = classNames.bind(styles)

type Props = {
  styleName: string,
  type: string,
  Size60: string,
  Size40: string,
  Size20: string,
  Size16: string,
  DM: string
}

export default class Picture extends React.Component<Props> {
  render () {
    const { styleName, type, Size60, Size40, Size20, Size16, DM } = this.props

    const className = cx(styles.Channel, styleName, {
      Amazon: type === 'Amazon',
      Apple: type === 'Apple',
      AppleApp: type === 'AppleApp',
      Email: type === 'email',
      Facebook: type === 'facebook',
      FacebookMessenger: type === 'FacebookMessenger',
      Forum: type === 'forum',
      Google: type === 'google',
      GoogleSearch: type === 'GoogleSearch',
      GooglePlay: type === 'GooglePlay',
      GoogleMaps: type === 'GoogleMaps',
      Instagram: type === 'instagram',
      Kik: type === 'Kik',
      Linkedin: type === 'linkedin',
      Listening: type === 'listening',
      Livechat: type === 'livechat',
      OK: type === 'OK',
      Pinterest: type === 'Pinterest',
      RSS: type === 'RSS',
      Slack: type === 'Slack',
      SMS: type === 'SMS',
      Snapchat: type === 'Snapchat',
      Telegram: type === 'Telegram',
      Tumblr: type === 'Tumblr',
      Twitter: type === 'twitter',
      Viber: type === 'Viber',
      Vkontakte: type === 'vkontakte',
      Whatsapp: type === 'Whatsapp',
      Youtube: type === 'youtube',
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
