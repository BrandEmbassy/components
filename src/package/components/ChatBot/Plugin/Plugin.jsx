// @flow
import React, { PureComponent } from 'react'
import ComposedElement from './Element/ComposedElement'
import styles from './index.css'

type Props = {
  elements: Array<any>,
  onClick: Function,
  hideButtons?: boolean,
  topLevel: boolean,
  width?: string
}

export default class Plugin extends PureComponent<Props> {
  render () {
    return (
      <div className={styles.PluginFrameWrapper}>
        <div className={styles.PluginFrame}>
          <div className={styles.Plugin} style={{'width': this.props.width}}>
            <ComposedElement {...this.props} />
          </div>
        </div>
      </div>
    )
  }
}
