// @flow

import * as React from 'react'
import styles from './Linklist.css'

type Props = {
  children?: React.Node
}

export default class Linklist extends React.Component<Props> {
  render () {
    return (
      <div className={styles.Linklist}>
        {this.props.children}
      </div>
    )
  }
}