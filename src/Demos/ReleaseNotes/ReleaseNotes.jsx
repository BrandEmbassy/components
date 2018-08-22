import React, { Component } from 'react'

export default class ReleaseNotes extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row padding-20'>
          <div className='col-xs-12'>
            <h1> Release Notes </h1>

            <h2>2.0.7</h2>
            <p>
              back compatibility for Notification messages, ( isGreen, isRed, isYellow )
            </p>
          </div>
        </div>
      </div>
    )
  }
}
