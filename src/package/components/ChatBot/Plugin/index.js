import React, { PureComponent } from 'react'
import Plugin from './Plugin'
import Carusel from './Carusel'
import Gallery from './Gallery'
import ComposedElement from './Element/ComposedElement'
import ElementType from './Element/ElementType'

export default class PluginWrapper extends PureComponent {
  static defaultProps = {
    elements: [],
    hidePostbackControls: false
  }

  isPluginWithoutWrapper (element) {
    return element && element.type === ElementType.QUICK_REPLIES
  }

  render () {
    const { elements, onClick, hideButtons, disableCarusel } = this.props
    if (elements.length > 1 && disableCarusel) {
      return <Gallery elements={elements} onClick={onClick} hideButtons={hideButtons} />
    } else if (elements.length > 1) {
      return <Carusel elements={elements} onClick={onClick} hideButtons={hideButtons} />
    } else if (this.isPluginWithoutWrapper(elements[0])) {
      return <ComposedElement elements={elements} onClick={onClick} hideButtons={hideButtons} />
    } else {
      return <Plugin elements={elements} onClick={onClick} hideButtons={hideButtons} />
    }
  }
}
