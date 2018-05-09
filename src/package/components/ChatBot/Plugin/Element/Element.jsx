import React from 'react'
import Image from './Image'
import Button from './Button'
import Heading, { SUBTITLE_HEADING_LEVEL, TITLE_HEADING_LEVEL } from './Heading'
import Text from './Text'
import QuickReplies from './QuickReplies'
import ComposedElement from './ComposedElement'
import ElementType from './ElementType'

export default function Element (props) {
  const { type, text, url, postback, elements, onClick, hideButtons, showTextAsMessage } = props
  const headingType = [
    ElementType.HEADING,
    ElementType.TITLE,
    ElementType.SUBTITLE
  ]

  if (type === ElementType.BUTTON) {
    return <Button label={text} onClick={onClick} postback={postback} />
  }
  if (headingType.indexOf(type) > -1) {
    const level = type === ElementType.SUBTITLE ? SUBTITLE_HEADING_LEVEL : TITLE_HEADING_LEVEL
    return <Heading content={text} level={level}/>
  }
  if (type === ElementType.TEXT) {
    return <Text content={text} showAsMessage={showTextAsMessage} />
  }
  if (type === ElementType.IMAGE) {
    return <Image src={url} />
  }
  if (type === ElementType.QUICK_REPLIES) {
    return <QuickReplies elements={elements} onClick={onClick} hideButtons={hideButtons} />
  }
  if (Array.isArray(elements)) {
    const showTextAsMessage = (type === ElementType.TEXT_AND_BUTTONS)
    return <ComposedElement elements={elements} onClick={onClick} showTextAsMessage={showTextAsMessage} />
  }
  return null
}
