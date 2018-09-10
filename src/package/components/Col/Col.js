// @flow

import * as React from 'react'
// @flow-skip-next-line
import classNames from 'classnames/bind'
import styles from './Col.css'

const cx = classNames.bind(styles)

type Props = {
  children?: React.Node,
  styleName: string,
  isReverse?: boolean
}

export default class Col extends React.Component<Props> {
  render () {
    const { styleName, children, isReverse } = this.props

    const className = cx(styles.col, styleName)

    return (
      <div className={className}>
        {children}
      </div>
    )
  }
}
