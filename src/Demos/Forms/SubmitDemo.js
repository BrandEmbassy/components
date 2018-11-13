import React, { Component } from 'react'
import Submit from './../../package/components/Submit/Submit'
import StorybookHighlighter from './../../utils/StorybookHighlighter'

const importComponent = `import { Submit } from 'components';`

export default class SubmitDemo extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row padding-20'>
          <div className='col-xs-12 '>
            <h2 className='h2'>Submit</h2>
            <h3 className='h3'>{importComponent}</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-6'>
            <Submit value='Submit here' />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-12 '>
            <h3 className='h3'>html</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 '>
            <StorybookHighlighter >
              <Submit value='Submit here' />
            </StorybookHighlighter >
          </div>
        </div>
      </div>
    )
  }
}
