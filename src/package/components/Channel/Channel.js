// @flow

import * as React from 'react'
// @flow-skip-next-line
import classNames from 'classnames/bind'
import styles from './Channel.module.css'
import SizeTypes from './SizeTypes'

const cx = classNames.bind(styles)

type Props = {
  styleName: string,
  type: string,
  size: string,
  isPrivate: boolean,
  isGrayscale: boolean
};

export default class Channel extends React.Component<Props> {
  static defaultProps = {
    size: SizeTypes.M,
    type: 'default'
  };

  render () {
    const { styleName, size, isPrivate, isGrayscale, type } = this.props

    const className = cx(styles.Channel, styleName, type, {
      [`size${size}`]: size,
      isGrayscale,
      isPrivate
    })

    return <div className={className} />
  }
}
