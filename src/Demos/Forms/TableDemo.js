import React, { Component } from 'react'
import '!style-loader!css-loader!./../../styles/Base.css' //eslint-disable-line
import Table from './../../package/components/Table/Table'
import StorybookHighlighter from './../../utils/StorybookHighlighter'

const importComponent = `import { Table } from 'components';`

export default class TableDemo extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row padding-20'>
          <div className='col-xs-12'>
            <h2 className='h2'>Table</h2>
            <h3 className='h3'>{importComponent}</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <Table />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-12'>
            <h3 className='h3'>html</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <StorybookHighlighter >
              <Table />
            </StorybookHighlighter >
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 padding-20'>
            <h3 className='h3'>.Fixed</h3>
            try resize window to see diference
          </div>
          <div className='col-xs-12'>
            <Table Fixed />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <StorybookHighlighter >
              <Table Fixed />
            </StorybookHighlighter >
          </div>
        </div>
      </div>
    )
  }
}
