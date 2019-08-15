// @flow
import React from 'react'
import ReactMarkdown from 'react-markdown'
import type { ReactMarkdownProps } from 'react-markdown'
import style from './Markdown.module.css'

type Props = {
  text: string,
  options?: ReactMarkdownProps
}

function Markdown ({ text, options }: Props) {
  return (
    <div className={style.Markdown}>
      <ReactMarkdown source={text} {...options} />
    </div>
  )
}

Markdown.defaultProps = {
  options: { linkTarget: '_blank' }
}

export default Markdown
