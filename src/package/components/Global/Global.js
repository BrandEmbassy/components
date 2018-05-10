import React, { PureComponent } from 'react'
import '!style-loader!css-loader!./../styles/Base.css' //eslint-disable-line

export default class Global extends PureComponent {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
