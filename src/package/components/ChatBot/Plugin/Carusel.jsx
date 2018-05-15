// @flow
import React, { PureComponent } from 'react'
import ReactResizeDetector from 'react-resize-detector'
import SwipeableViews from 'react-swipeable-views'
import ComposedElement from './Element/ComposedElement'
import styles from './index.css'

type Props = {
  elements: Array<Object>,
  onClick: Function,
  hideButtons?: boolean
}

type State = {
  index: number
}

export default class Carusel extends PureComponent<Props, State> {
  SCROLL_DIRECTION_RIGHT = 1
  SCROLL_DIRECTION_LEFT = -1

  state = {
    index: 0
  }

  handleLeftArrowClick = () => {
    this.swipe(this.SCROLL_DIRECTION_LEFT)
  }

  handleRightArrowClick = () => {
    this.swipe(this.SCROLL_DIRECTION_RIGHT)
  }

  handleChangeIndex = (index: number) => {
    this.setState({ index })
  }

  swipe = (direction: number) => {
    const { index } = this.state
    const { elements } = this.props

    if ((index === elements.length - 1 && direction === this.SCROLL_DIRECTION_RIGHT) ||
      (index === 0 && direction === this.SCROLL_DIRECTION_LEFT)) {
      return
    }

    this.setState({ index: index + direction })
  }

  render () {
    const { elements, onClick, hideButtons } = this.props
    const { index } = this.state

    return (
      <div className={styles.PluginFrameWrapper}>
        <div className={styles.ArrowWrapper}>
          {<div className={styles.LeftRow} onMouseDown={this.handleLeftArrowClick} />}
        </div>
        <div className={styles.PluginFrame}>
          <ReactResizeDetector />
          <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
            {elements.map(element => (
              <div className={styles.Plugin} key={element.id}>
                <ComposedElement elements={element.elements} onClick={onClick} hideButtons={hideButtons} />
              </div>
            ))}
          </SwipeableViews>
        </div>
        <div className={styles.ArrowWrapper}>
          {<div className={styles.RightRow} onMouseDown={this.handleRightArrowClick} />}
        </div>
      </div>
    )
  }
}
