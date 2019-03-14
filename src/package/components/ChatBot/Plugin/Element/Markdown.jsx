// @flow
import React from 'react'
import ReactMarkdown from 'react-markdown'

type Props = {
  text: string
}

export default function Markdown (props:Props) {
  return (
    <ReactMarkdown source={props.text} />
  )
}
