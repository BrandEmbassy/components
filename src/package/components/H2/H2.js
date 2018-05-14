// @flow

import * as React from 'react'
// @flow-skip-next-line
import classNames from 'classnames/bind'
import styles from './H2.css'

const cx = classNames.bind(styles)

type Props = {
  children?: React.Node,
  styleName: string
}

export default class H2 extends React.Component<Props> {
  render () {
    const { styleName } = this.props

    const className = cx(styles.H2, styleName)

    return (
      <h2 className={className}>
        {this.props.children}
      </h2>
    )
  }
}
