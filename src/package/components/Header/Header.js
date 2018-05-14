// @flow

import * as React from 'react'
// @flow-skip-next-line
import classNames from 'classnames/bind'
import styles from './Header.css'

const cx = classNames.bind(styles)

type Props = {
  children?: React.Node,
  title: string,
  styleName: string
}

export default class Header extends React.Component<Props> {
  renderTitle (title: string): ?React.Node {
    if (!title) {
      return null
    }

    return <div className={styles.Title}>{this.props.title}</div>
  }

  render () {
    const { styleName, title } = this.props

    const className = cx(styles.Header, styleName)

    return (
      <div className={className}>
        <div className={styles.Logo}><div className='be-icon-be-symbol' /></div>
        {this.props.children}
        {this.renderTitle(title)}
      </div>
    )
  }
}
