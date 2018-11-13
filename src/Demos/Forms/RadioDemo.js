import React, { Component } from 'react'
import '!style-loader!css-loader!./../../styles/Base.css' //eslint-disable-line
import Radio from './../../package/components/Radio/Radio'
import StorybookHighlighter from './../../utils/StorybookHighlighter'

const importComponent = `import { Radio } from 'components';`

export default class RadioDemo extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row padding-20'>
          <div className='col-xs-12 '>
            <h2 className='h2'>Radio</h2>
            <h3 className='h3'>{importComponent}</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-6'>
            <Radio name='name' id='aaa' />
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
              <Radio name='name' id='aaa' />
            </StorybookHighlighter >
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-12 '>
            <h3 className='h3'>usage with text </h3>
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6'>
            <Radio name='yyy' id='bbb' label='chose here' />
            <br />
            <Radio name='yyy' id='ccc' label='or chose this' />
            <br />
            <Radio name='yyy' id='ddd' label='or this' />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-12 '>
            <StorybookHighlighter >
              <div className='col-xs-6'>
                <Radio name='yyy' id='bbb' label='chose here' />
                <br />
                <Radio name='yyy' id='ccc' label='or chose this' />
                <br />
                <Radio name='yyy' id='ddd' label='or this' />
              </div>
            </StorybookHighlighter >
          </div>
        </div>
      </div>
    )
  }
}
