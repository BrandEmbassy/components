// @flow
import React, { PureComponent } from 'react'
// @flow-skip-next-line
import ReactResizeDetector from 'react-resize-detector'
import ComposedElement from './Element/ComposedElement'
import styles from './index.css'

type Props = {
  elements: Array<any>,
  onClick: Function,
  hideButtons?: boolean
}

export default class Gallery extends PureComponent<Props> {
  render () {
    const { elements, onClick, hideButtons } = this.props

    return (
      <div
        className={styles.PluginFrame}
        data-cy='GALLERY'
        data-selector='GALLERY'
      >
        <div className={styles.CaruselContent}>
          <ReactResizeDetector />
          {elements.map(element => (
            <div className={styles.Plugin} key={element.id}>
              <ComposedElement
                elements={element.elements}
                onClick={onClick}
                hideButtons={hideButtons}
              />
            </div>
          ))}
        </div>
      </div>
    )
  }
}
