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
