// @flow
import React, { PureComponent } from 'react'
// @flow-skip-next-line
import ReactResizeDetector from 'react-resize-detector'
import CaruselItems from './CaruselItems'
import styles from './index.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

type Props = {
  elements: Array<Object>,
  onClick: Function,
  hideButtons?: boolean
};

type State = {
  index: number
};

export default class Carusel extends PureComponent<Props, State> {
  SCROLL_DIRECTION_RIGHT = 1;
  SCROLL_DIRECTION_LEFT = -1;

  state = {
    index: 0
  };

  handleLeftArrowClick = () => {
    this.swipe(this.SCROLL_DIRECTION_LEFT)
  };

  handleRightArrowClick = () => {
    this.swipe(this.SCROLL_DIRECTION_RIGHT)
  };

  handleChangeIndex = (index: number) => {
    this.setState({ index })
  };

  handleDotClick = (index: number) => () => {
    this.setState({ index })
  };

  swipe = (direction: number) => {
    const { index } = this.state
    const { elements } = this.props

    if (
      (index === elements.length - 1 &&
        direction === this.SCROLL_DIRECTION_RIGHT) ||
      (index === 0 && direction === this.SCROLL_DIRECTION_LEFT)
    ) {
      return
    }

    this.setState({ index: index + direction })
  };

  render () {
    const { index } = this.state
    const { elements } = this.props

    return (
      <div
        className={styles.PluginFrame}
        data-cy='CARUSEL'
        data-selector='CARUSEL'
      >
        <div className={styles.CaruselContent}>
          <ReactResizeDetector />
          <CaruselItems
            {...this.props}
            index={index}
            handleChangeIndex={this.handleChangeIndex}
          />
          <div className={styles.Dots} data-selector='DOTS'>
            {elements.map((element, arrayIndex) => (
              <div
                key={element.id}
                className={cx(styles.Dot, {
                  isActive: index === arrayIndex
                })}
                onClick={this.handleDotClick(arrayIndex)}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
