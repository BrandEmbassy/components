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
