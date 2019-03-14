// @flow
import React from 'react'
import Image, { ImageElementProps } from './Image'
import Button from './Button'
import Heading, { SUBTITLE_HEADING_LEVEL, TITLE_HEADING_LEVEL, HeadingElementProps } from './Heading'
import Text, { TextElementProps } from './Text'
import QuickReplies from './QuickReplies'
import File from './File'
import ComposedElement from './ComposedElement'
import ElementType from './ElementType'

import type ButtonElementProps from './Button'
import type QuickRepliesProps from './QuickReplies'
import type FileElementsProps from './File'
import Markdown from './Markdown'

// @todo use Disjoint Unions from flow-typed
export type IElement = ButtonElementProps & HeadingElementProps &
  TextElementProps & ImageElementProps &
  QuickRepliesProps & FileElementsProps & ComposedElement

export default function Element (props: IElement) {
  const {type, level} = props
  const headingType = [
    ElementType.HEADING,
    ElementType.TITLE,
    ElementType.SUBTITLE
  ]

  if (type === ElementType.BUTTON) {
    return <Button {...props} label={props.text} />
  }
  if (headingType.indexOf(type) > -1) {
    const level = type === ElementType.SUBTITLE ? SUBTITLE_HEADING_LEVEL : TITLE_HEADING_LEVEL
    return <Heading content={props.text} level={level} />
  }
  if (type === ElementType.TEXT) {
    return <Text content={props.text} showAsMessage={props.showTextAsMessage} />
  }
  if (type === ElementType.MARKDOWN) {
    return <Markdown text={props.text} />
  }

  // IMAGE will not be supported from next release onward but we keep it here for backward compatibility.
  if (type === ElementType.IMAGE) {
    return <Image src={props.url} />
  }
  if (type === ElementType.QUICK_REPLIES) {
    return <QuickReplies {...props} />
  }
  if (type === ElementType.FILE) {
    return <File {...props} />
  }
  if (Array.isArray(props.elements)) {
    const showTextAsMessage = (type === ElementType.TEXT_AND_BUTTONS)
    return <ComposedElement {...props} showTextAsMessage={showTextAsMessage} level={level + 1} />
  }
  return null
}
