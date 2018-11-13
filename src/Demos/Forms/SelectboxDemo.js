import React, { Component } from 'react'
import '!style-loader!css-loader!./../../styles/Base.css' //eslint-disable-line
import Selectbox from './../../package/components/Selectbox/Selectbox'
import StorybookHighlighter from './../../utils/StorybookHighlighter'

const importComponent = `import { Selectbox } from 'components';`

export default class InputDemo extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row padding-20'>
          <div className='col-xs-12 '>
            <h2 className='h2'>Selectbox</h2>
            <h3 className='h3'>{importComponent}</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-6'>
            <Selectbox label='Label here' desc='description here' />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 '>
            <h3 className='h3'>html</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 '>
            <StorybookHighlighter >
              <Selectbox label='Label here' desc='description here' />
            </StorybookHighlighter >
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 '>
            <h3 className='h3'>Wide</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-6'>
            <Selectbox Wide label='Label here' desc='description here' />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 '>
            <StorybookHighlighter >
              <Selectbox Wide label='Label here' desc='description here' />
            </StorybookHighlighter >
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 '>
            <h3 className='h3'>Disabled</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-6'>
            <Selectbox Wide isDisabled label='Label here' desc='description here' />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 '>
            <StorybookHighlighter >
              <Selectbox isDisabled Wide label='Label here' desc='description here' />
            </StorybookHighlighter >
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 '>
            <h3 className='h3'>Error</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-6'>
            <Selectbox Wide isError label='Label here' desc='description here' />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 '>
            <StorybookHighlighter >
              <Selectbox isError Wide label='Label here' desc='description here' />
            </StorybookHighlighter >
          </div>
        </div>
      </div>
    )
  }
}
