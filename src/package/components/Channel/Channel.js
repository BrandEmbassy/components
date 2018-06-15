// @flow

import * as React from 'react'
// @flow-skip-next-line
import classNames from 'classnames/bind'
import styles from './Channel.css'
import SizeTypes from './SizeTypes'

const cx = classNames.bind(styles)

type Props = {
  styleName: string,
  type: string,
  size: string,
  isPrivate: boolean
}

export default class Picture extends React.Component<Props> {
  render () {
    const { styleName, size, isPrivate, type } = this.props

    const className = cx(styles.Channel, styleName, type, {
      size60: size === SizeTypes.LARGE,
      size40: size === SizeTypes.MEDIUM,
      size20: size === SizeTypes.SMALL,
      size16: size === SizeTypes.TINY,
      isPrivate
    })

    return (
      <div className={className} />
    )
  }
}
