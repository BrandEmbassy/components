// @flow
import React, { PureComponent } from 'react'
import ReactResizeDetector from 'react-resize-detector'
import ComposedElement from './Element/ComposedElement'
import styles from './index.css'

type Props = {
  elements: Array<any>,
  onClick: Function,
  hideButtons: boolean,
}

export default class Plugin extends PureComponent<Props> {
  render () {
    const { elements, onClick, hideButtons } = this.props
    return (
      <div className={styles.PluginFrameWrapper}>
        <div className={styles.PluginFrame}>
          <ReactResizeDetector />
          <div className={styles.Plugin}>
            <ComposedElement elements={elements} onClick={onClick} hideButtons={hideButtons} />
          </div>
        </div>
      </div>
    )
  }
}
