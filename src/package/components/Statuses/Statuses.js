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

    //   // return <FormattedMessage id={`${status}`} defaultMessage="Default value if translation is not available" />

    if (!status) {
      return 'empty'
    } else {
      return (`${status}`)
    }
  };

  render () {
    const { styleName, Reversed, status } = this.props

    const className = cx(styles.Statuses, styleName, {
      Reversed,
      New: status === 'New',
      Open: status === 'Open',
      Resolved: status === 'Resolved',
      Pending: status === 'Pending',
      Escalated: status === 'Escalated',
      Closed: status === 'Closed',
      Trashed: status === 'Trashed'
    })

    return (
      <div className={className}>
        {this.renderText()}
      </div>
    )
  }
}
