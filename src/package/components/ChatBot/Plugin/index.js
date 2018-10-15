// @flow
import React, { PureComponent } from 'react'
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
  elements: Array<Object>,
  width?: string
}

export { isPluginVideo }

export default class PluginWrapper extends PureComponent<Props> {
  static defaultProps = {
    elements: [],
    hideButtons: false,
    disableCarusel: false
  }

  isPluginWithoutWrapper (element: any) {
    return element && element.type === ElementType.QUICK_REPLIES
  }

  render () {
    const { elements, onClick, hideButtons, disableCarusel, width } = this.props
    const type = elements[0].type

    if (elements.length > 1 && disableCarusel) {
      return <Gallery elements={elements} onClick={onClick} hideButtons={hideButtons} />
    } else if (elements.length > 1) {
      return <Carusel elements={elements} onClick={onClick} hideButtons={hideButtons} />
    } else if (this.isPluginWithoutWrapper(elements[0])) {
      return (
        <div className={styles.PluginFrame} data-cy={type}>
          <ComposedElement elements={elements} onClick={onClick} hideButtons={hideButtons} width={width} level={1} />
        </div>
      )
    } else {
      return <Plugin elements={elements} onClick={onClick} hideButtons={hideButtons} width={width} level={1} type={type} />
    }
  }
}
