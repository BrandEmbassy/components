// @flow

import * as React from 'react'
// @flow-skip-next-line
import classNames from 'classnames/bind'
import styles from './Statuses.css'

const cx = classNames.bind(styles)

type Props = {
  text: ?(string | React.Node),
  status: string,
  styleName: ?string,
  Reversed: ?boolean,
  Clickable: ?boolean
}

export default function Statuses (props: Props) {
  const { styleName, Reversed, status, text, Clickable } = props

  const className = cx(
    styles.Statuses,
    styleName,
    status.charAt(0).toUpperCase() + status.slice(1).toLowerCase(),
    { Reversed }
  )

  return <div className={className} data-cy={Clickable ? 'CLICKABLE' : ''}>{text || status}</div>
}
