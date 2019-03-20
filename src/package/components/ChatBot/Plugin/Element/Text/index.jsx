import React from 'react'
import styles from './index.css'
import Markdown from './../Markdown'
import TextType from '../../../TextType'

export type TextElementProps = {
  content: string,
  showAsMessage?: boolean,
  mimeType?: string
}

export default function Text ({ content, showAsMessage = false, mimeType = TextType.TEXT_PLAIN }) {
  const className = showAsMessage ? styles.MessageText : styles.Text
  if (mimeType === TextType.TEXT_MARKDOWN) {
    return (
      <Markdown text={content} />
    )
  }
  return <p className={className}>{content}</p>
}
