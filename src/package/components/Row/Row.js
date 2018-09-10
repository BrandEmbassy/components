// @flow

import * as React from 'react'
// @flow-skip-next-line
import classNames from 'classnames/bind'
import styles from './Row.css'

const cx = classNames.bind(styles)

type Props = {
  children?: React.Node,
  styleName: string,
  isReverse?: boolean
}

export default class Row extends React.Component<Props> {
  render () {
    const { styleName, children, isReverse } = this.props

    const className = cx(styles.row, styleName)

    return (
      <div className={className}>
        {children}
      </div>
    )
  }
}
