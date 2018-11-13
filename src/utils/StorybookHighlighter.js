import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { renderToString } from 'react-dom/server'
import beautify from 'js-beautify'

export default function StorybookHighlighter (props) {
  const componentString = renderToString(props.children)
    .replace('data-reactroot=""', '')
    .replace('data-jest="click"', '')

  return (
    <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
      {beautify.html(componentString)}
    </SyntaxHighlighter>
  )
}
