import React, { Component } from 'react'
import '!style-loader!css-loader!./../../styles/Base.css' //eslint-disable-line
import Checkbox from './../../package/components/Checkbox/Checkbox'
import StorybookHighlighter from './../../utils/StorybookHighlighter'

const importComponent = `import { Checkbox } from 'components';`

export default class CheckboxDemo extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row padding-20'>
          <div className='col-xs-12 '>
            <h2 className='h2'>Checkbox</h2>
            <h3 className='h3'>{importComponent}</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-6 '>
            <Checkbox id='0' label='' />
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
              <Checkbox id='0' />
            </StorybookHighlighter >
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-12 '>
            <h4 className='h4'>checkbox ID=" " must be same with laber FOR=" " </h4>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 '>
            <h3 className='h3'>usage with text </h3>
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-12 '>
            <Checkbox id='xzs' label='chose one' />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 '>
            <StorybookHighlighter >
              <Checkbox id='xzs' label='chose one' />
            </StorybookHighlighter >
          </div>
        </div>
      </div>
    )
  }
}
