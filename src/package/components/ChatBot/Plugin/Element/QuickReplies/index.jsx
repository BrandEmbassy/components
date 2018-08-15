// @flow
import * as React from 'react'
import ElementType from '../ElementType'
import Bubble from '../Text/Bubble'
import styles from './index.css'

export type QuickRepliesProps = {
  type: 'QUICK_REPLIES',
  elements: Array<Object>,
  onClick: Function,
  hideButtons: boolean
}
export default class QuickReplies extends React.PureComponent<QuickRepliesProps> {
  getTextElement (): ?Object {
    const { elements } = this.props
    const textElements = elements.filter((el) => el.type === ElementType.TEXT)
    return textElements[0] ? textElements[0] : null
  }

  getButtons (): Array<Object> {
    const { elements } = this.props
    return elements.filter((el) => el.type === ElementType.BUTTON)
  }

  createOnClickHandler = (postback: string, text: string) => (): ?Function => {
    const { onClick } = this.props
    if (onClick) {
      onClick(postback, text)
    }
  }

  renderButtons (): React.Node {
    return (
      <div className={styles.ButtonsGroup}>
        {this.getButtons().map(({ id, postback, text }) => {
          return (
            <button
              key={id}
              className={styles.QuickReplyButton}
              title={text}
              onClick={this.createOnClickHandler(postback, text)}>
              {text}
            </button>
          )
        })}
      </div>
    )
  }

  renderMessage (textElement: Object): React.Node {
    return <div className={styles.Message}><Bubble text={textElement.text} /></div>
  }

  render () {
    const { hideButtons } = this.props
    const textElement = this.getTextElement()

    return (
      <div className={styles.QuickReplies}>
        {textElement && this.renderMessage(textElement)}
        {!hideButtons && this.renderButtons()}
      </div>
    )
  }
}
