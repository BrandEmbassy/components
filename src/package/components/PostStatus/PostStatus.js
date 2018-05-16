// @flow

import * as React from 'react'
// @flow-skip-next-line
import classNames from 'classnames/bind'
import styles from './PostStatus.css'

const cx = classNames.bind(styles)

type Props = {
  text: string,
  status: string,
  styleName: string,
  Reversed: boolean
}

export default class PostStatus extends React.Component<Props> {
  renderText () {
    const { status } = this.props

    if (!status) {
      return 'empty'
    } else {
      return (`${status}`)
    }
  };

  render () {
    const { styleName, Reversed, status } = this.props

    const className = cx(styles.PostStatus, styleName, {
      Reversed,
      New: status === 'New',
      Draft: status === 'Draft',
      Post: status === 'Post'
    })

    return (
      <div className={className}>
        {this.renderText()}
      </div>
    )
  }
}
