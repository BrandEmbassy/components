// @flow
import * as React from 'react'
import Plugin from './Plugin'
import Carusel from './Carusel'
import Gallery from './Gallery'
import ComposedElement from './Element/ComposedElement'
import ElementType from './Element/ElementType'
import {isPluginVideo} from './Element/Video/index'
import styles from './index.css'

type Props = {
  disableCarusel?: boolean,
  hideButtons?: boolean,
  onClick: Function,
  onLoad?: Function,
  elements: Array<Object>,
  width?: string
}

export { isPluginVideo }

const isPluginWithoutWrapper = (element: any): boolean => {
  return Boolean(element && element.type === ElementType.QUICK_REPLIES)
}

function PluginWrapper (props: Props): ?React.Node {
  const {
    elements,
    onClick,
    hideButtons,
    disableCarusel,
    width,
    onLoad
  } = props

  if (elements && elements.length > 0) {
    const type = elements[0].type

    if (elements.length > 1 && disableCarusel) {
      return (
        <Gallery
          elements={elements}
          onClick={onClick}
          hideButtons={hideButtons}
        />
      )
    } else if (elements.length > 1) {
      return (
        <Carusel
          elements={elements}
          onClick={onClick}
          hideButtons={hideButtons}
        />
      )
    } else if (isPluginWithoutWrapper(elements[0])) {
      return (
        <div className={styles.PluginFrame} data-cy={type}>
          <ComposedElement
            elements={elements}
            onClick={onClick}
            onLoad={onLoad}
            hideButtons={hideButtons}
            width={width}
            level={1}
          />
        </div>
      )
    } else {
      return (
        <Plugin
          elements={elements}
          onClick={onClick}
          onLoad={onLoad}
          hideButtons={hideButtons}
          width={width}
          level={1}
          type={type}
        />
      )
    }
  }
}

PluginWrapper.defaultProps = {
  elements: [],
  hideButtons: false,
  disableCarusel: false
}

export default PluginWrapper
