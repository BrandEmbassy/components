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

type IElement = ButtonElementProps | HeadingElementProps |
  TextElementProps | ImageElementProps |
  QuickRepliesProps | FileElementsProps | ComposedElement

// export type IElement = {
//   type: 'BUTTON' | 'HEADING' | 'TITLE' | 'SUBTITLE' | 'TEXT' | 'IMAGE' | 'QUICK_REPLIES' | 'TEXT_AND_BUTTONS' | 'FILE',
//   text: string,
//   url?: string,
//   postback?: string,
//   elements: Array<IElement>,
//   onClick: Function,
//   hideButtons: boolean,
//   showTextAsMessage: boolean
// }

export default function Element (props: IElement) {
  const { type, text, url, postback, elements, onClick, hideButtons, showTextAsMessage } = props
  const headingType = [
    ElementType.HEADING,
    ElementType.TITLE,
    ElementType.SUBTITLE
  ]

  if (type === ElementType.BUTTON) {
    return <Button label={text} onClick={onClick} postback={postback} url={url} />
  }
  if (headingType.indexOf(type) > -1) {
    const level = type === ElementType.SUBTITLE ? SUBTITLE_HEADING_LEVEL : TITLE_HEADING_LEVEL
    return <Heading content={text} level={level} />
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
  if (type === ElementType.FILE) {
    return <File {...props} />
  }
  if (Array.isArray(elements)) {
    const showTextAsMessage = (type === ElementType.TEXT_AND_BUTTONS)
    return <ComposedElement elements={elements} onClick={onClick} showTextAsMessage={showTextAsMessage} />
  }
  return null
}
