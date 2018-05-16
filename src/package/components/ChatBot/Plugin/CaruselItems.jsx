// @flow
import React, { PureComponent } from 'react'
import SwipeableViews from 'react-swipeable-views'
import ComposedElement from './Element/ComposedElement'
import styles from './index.css'

type Props = {
  elements: Array<Object>,
  handleChangeIndex: Function,
  index: number,
  onClick: Function,
  hideButtons: boolean
}

export default class CaruselItems extends PureComponent<Props> {
  render () {
    const { onClick, elements, handleChangeIndex, index, hideButtons } = this.props
    return (
      <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
        {elements.map(element => (
          <div className={styles.Plugin} key={element.id}>
            <ComposedElement elements={element.elements} onClick={onClick} hideButtons={hideButtons} />
          </div>
        ))}
      </SwipeableViews>
    )
  }
}
