// @flow

import * as React from 'react'
// @flow-skip-next-line
import classNames from 'classnames/bind'
import styles from './Statuses.css'

const cx = classNames.bind(styles)

type Props = {
  text: string,
  status: string,
  styleName: string,
  Reversed: boolean
}

export default class Statuses extends React.Component<Props> {
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

    const className = cx(
      styles.Statuses,
      styleName,
      status.charAt(0).toUpperCase() + status.slice(1).toLowerCase(),
      { Reversed }
    )

    return (
      <div className={className}>
        {this.renderText()}
      </div>
    )
  }
}
