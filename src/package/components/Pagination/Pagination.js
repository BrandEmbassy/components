// @flow

import * as React from 'react'
import styles from './Pagination.module.css'

type Props = {
  onClick: Function,
  children?: React.Node
}

export default class Pagination extends React.Component<Props> {
  render () {
    return (
      <div className={styles.Pagination}>
      </div>
    )
  }
}
