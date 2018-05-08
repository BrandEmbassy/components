import React, { Component } from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line
import '!style-loader!css-loader!./../styles/Base.css'

export default class Global extends Component {
  static get propTypes () {
    return {
      children: PropTypes.Array
    }
  };

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
