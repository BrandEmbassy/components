// @flow

import * as React from 'react'
import styles from './Breadcrumbs.module.css'

type Props = {
  onClick: Function,
  children?: React.Node
}

export default class Breadcrumbs extends React.Component<Props> {
  render () {
    return (
      <div className={styles.Breadcrumbs}>
        <div className={styles.Textwrap}>
          <div className={styles.Step}>Brand Embassy</div>
          <div className={styles.Step}>Breadcrumbs</div>
        </div>
        <div className={styles.Right}>{this.props.children}</div>
      </div>
    )
  }
}
