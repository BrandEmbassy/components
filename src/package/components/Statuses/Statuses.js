// @flow

import * as React from 'react'
// @flow-skip-next-line
import { renderToString } from 'react-dom/server'
import classNames from 'classnames/bind'
import styles from './Statuses.module.css'

const cx = classNames.bind(styles)

type Props = {
  text: ?(string | React.Node),
  status: string,
  styleName: ?string,
  Reversed: ?boolean,
  hasHover: ?boolean
};

export default function Statuses (props: Props) {
  const { styleName, Reversed, status, text, hasHover } = props

  const className = cx(
    styles.Statuses,
    styleName,
    status.charAt(0).toUpperCase() + status.slice(1).toLowerCase(),
    { Reversed, hasHover }
  )

  var altText = ''
  switch(typeof(text)) {
    case 'string':
      altText = text
      break;
    case React:Node:
      altText = renderToString(text ?? '')
      break;
  }
  const dataCy = `status-${status.toLowerCase() || altText.toLowerCase()}`

  return (
    <div data-cy={dataCy} className={className}>
      {text || status}
    </div>
  )
}
