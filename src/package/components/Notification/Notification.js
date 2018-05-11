// @flow

import * as React from 'react'
// @flow-skip-next-line
import classNames from 'classnames/bind'
import styles from './Notification.css'

const cx = classNames.bind(styles)

type Props = {
  text: string,
  Fixed: boolean,
  isYellow: boolean,
  isRed: boolean,
  isGreen: boolean,
  styleName: string
}

export default class Notification extends React.Component<Props> {
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
