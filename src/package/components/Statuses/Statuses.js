// @flow

import * as React from 'react'
// @flow-skip-next-line
import classNames from 'classnames/bind'
import styles from './Statuses.css'

const cx = classNames.bind(styles)

type Props = {
  text: ?(string | React.Node),
  status: string,
  styleName: string,
  Reversed: boolean
}

export default class Statuses extends React.Component<Props> {

  render () {
    const { styleName, Reversed, status, text } = this.props

    const className = cx(
      styles.Statuses,
      styleName,
      status.charAt(0).toUpperCase() + status.slice(1).toLowerCase(),
      { Reversed }
    )

    return <div className={className}>{text || status}</div>
  }
}
