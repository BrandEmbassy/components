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

// @todo use Disjoint Unions from flow-typed
export type IElement = ButtonElementProps & HeadingElementProps &
  TextElementProps & ImageElementProps &
  QuickRepliesProps & FileElementsProps & ComposedElement

export default function Element (props: IElement) {
  const { type, level } = props

  let component = null

  switch (type) {
    case ElementType.BUTTON:
      component = <Button {...props} label={props.text} />
      break
    case ElementType.TEXT:
      component = <Text content={props.text} showAsMessage={props.showTextAsMessage} mimeType={props.mimeType} />
      break
    case ElementType.IMAGE:
      component = <Image src={props.url} />
      break
    case ElementType.QUICK_REPLIES:
      component = <QuickReplies {...props} />
      break
    case ElementType.FILE:
      component = <File {...props} />
      break
    case ElementType.HEADING:
    case ElementType.TITLE:
    case ElementType.SUBTITLE:
      const level = type === ElementType.SUBTITLE ? SUBTITLE_HEADING_LEVEL : TITLE_HEADING_LEVEL
      component = <Heading content={props.text} level={level} />
      break
    default:
      component = null
  }

  if (component) {
    return component
  }

  if (Array.isArray(props.elements)) {
    const showTextAsMessage = (type === ElementType.TEXT_AND_BUTTONS)
    return <ComposedElement {...props} showTextAsMessage={showTextAsMessage} level={level + 1} />
  }
  return null
}
