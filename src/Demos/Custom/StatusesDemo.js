import React, { Component } from 'react'
import '!style-loader!css-loader!./../../styles/Base.css' //eslint-disable-line
import Statuses from './../../package/components/Statuses/Statuses'
import StorybookHighlighter from './../../utils/StorybookHighlighter'

const importComponent = `import { Statuses } from 'components';`

export default class StatusesDemo extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row padding-20'>
          <div className='col-xs-12 '>
            <h2 className='h2'>Statuses</h2>
            <h3 className='h3'>{importComponent}</h3>
            status = "New, Open, Resolved, Pending, Escalated, Closed, Trashed, Reversed"
          </div>
          <div className='col-xs-10 padding-20'>
            <Statuses status='New' />
            <Statuses status='Open' />
            <Statuses status='Resolved' />
            <Statuses status='Pending' />
            <Statuses status='Escalated' />
            <Statuses status='Closed' />
            <Statuses status='Trashed' />
            <Statuses status='Reversed' />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <StorybookHighlighter >
              <Statuses status='New' />
            </StorybookHighlighter >
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 '>
            <h3 className='h3'>Reversed</h3>
          </div>
          <div className='col-xs-10 padding-20'>
            <Statuses status='New' Reversed />
            <Statuses status='Open' Reversed />
            <Statuses status='Resolved' Reversed />
            <Statuses status='Pending' Reversed />
            <Statuses status='Escalated' Reversed />
            <Statuses status='Closed' Reversed />
            <Statuses status='Trashed' Reversed />
            <Statuses status='Reversed' Reversed />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <StorybookHighlighter >
              <Statuses status='New' Reversed />
            </StorybookHighlighter >
          </div>
        </div>
      </div>
    )
  }
}
