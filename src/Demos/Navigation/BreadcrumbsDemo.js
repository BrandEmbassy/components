import React, { Component } from 'react'
import '!style-loader!css-loader!./../../styles/Base.css' //eslint-disable-line
import Breadcrumbs from '../../package/components/Breadcrumbs/Breadcrumbs'
import Button from '../../package/components/Button/Button'
import StorybookHighlighter from './../../utils/StorybookHighlighter'

const importComponent = `import { Breadcrumbs } from 'components';`

export default class BreadcrumbsDemo extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row padding-20'>
          <div className='col-xs-12'>
            <h3 className='h3'>{importComponent}</h3>

            <Breadcrumbs />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <StorybookHighlighter >
              <Breadcrumbs />
            </StorybookHighlighter >
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-12'>
            <Breadcrumbs>
              <Button Small text='Add someting' Icon='be-icon-plus' />
            </Breadcrumbs>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <StorybookHighlighter >
              <Breadcrumbs>
                <Button Small text='Add someting' Icon='be-icon-plus' />
              </Breadcrumbs>
            </StorybookHighlighter >
          </div>
        </div>
      </div>
    )
  }
}
