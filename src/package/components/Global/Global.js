// @flow

import * as React from 'react'
// @flow-skip-next-line
import '!style-loader!css-loader!./../styles/Base.css' //eslint-disable-line
// @flow-skip-next-line
import '!style-loader!css-loader!video-react/dist/video-react.css' //eslint-disable-line

type Props = {
  children?: React.Node
}

export default class Global extends React.PureComponent<Props> {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
