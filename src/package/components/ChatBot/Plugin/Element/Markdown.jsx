// @flow
import React, { PureComponent } from 'react'
import ReactMarkdown from 'react-markdown'

type Props = {
  text: string
}

export default class Markdown extends PureComponent<Props> {
  render () {
    return (
      <ReactMarkdown source={this.props.text} />
    )
  }
}
