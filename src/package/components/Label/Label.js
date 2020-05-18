// @flow

import * as React from 'react'
// @flow-skip-next-line
import classNames from 'classnames/bind'
import styles from './Label.module.css'

const cx = classNames.bind(styles)

type Props = {
  children?: React.Node,
  text: string,
  styleName?: string
};

export default class Label extends React.Component<Props> {
  render () {
    const { styleName, children, text } = this.props

    const className = cx(styles.Label, styleName)

    return (
      <div className={className}>
        <div className={styles.Children}>{children}</div>
        <div className={styles.Text}>{text}</div>
      </div>
    )
  }
}
