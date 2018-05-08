import React, {PureComponent} from 'react'
import ElementType from '../ElementType'
import Bubble from '../Text/Bubble'
import styles from './index.css'

export default class QuickReplies extends PureComponent {

  getTextElement() {
    const { elements } = this.props
    const textElements = elements.filter((el) => el.type === ElementType.TEXT)
    return textElements[0] ? textElements[0] : null
  }

  getButtons() {
    const { elements } = this.props
    return elements.filter((el) => el.type === ElementType.BUTTON)
  }

  createOnClickHandler = (postback, text) => () => {
    const { onClick } = this.props
    return onClick(postback, text)
  }
  renderButtons() {
    const { onClick } = this.props;
    return (
      <div className={styles.ButtonsGroup}>
        {this.getButtons().map(({ text, id, postback }) => {
          return <button className={styles.QuickReplyButton} key={id} onClick={this.createOnClickHandler(postback, text)}>{text}</button>
        })}
      </div>
    );
  }

  renderMessage(textElement) {
    return <div className={styles.Message}><Bubble text={textElement.text} /></div>
  }

  render() {
    console.log(styles)
    const { elements, hideButtons } = this.props;
    const textElement = this.getTextElement()

    return (
      <div className={styles.QuickReplies}>
        {textElement && this.renderMessage(textElement)}
        {!hideButtons && this.renderButtons()}
      </div>
    )
  }

}
