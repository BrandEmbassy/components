// @flow
import React from 'react'
import ReactMarkdown from 'react-markdown'
import style from './Markdown.css'

type Props = {
  text: string
}

export default function Markdown (props: Props) {
  return (
    <div className={style.Markdown}>
      <ReactMarkdown source={props.text} />
    </div>
  )
}
