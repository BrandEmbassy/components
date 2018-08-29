// @flow
import React, { PureComponent } from 'react'
import ComposedElement from './Element/ComposedElement'
import styles from './index.css'
import {isPluginVideo} from './Element/Video/index'

type Props = {
  elements: Array<any>,
  onClick: Function,
  hideButtons?: boolean,
  topLevel: boolean,
  width?: string
}

export default class Plugin extends PureComponent<Props> {
  render () {
    const style = isPluginVideo(this.props.elements) ? {'width': this.props.width} : {}
    return (
      <div className={styles.PluginFrameWrapper}>
        <div className={styles.PluginFrame}>
          <div className={styles.Plugin} style={style}>
            <ComposedElement {...this.props} />
          </div>
        </div>
      </div>
    )
  }
}
