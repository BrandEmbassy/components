import React, { PureComponent } from 'react'
import '!style-loader!css-loader!./../../styles/Base.css' //eslint-disable-line
import Linklist from '../../package/components/Linklist/Linklist'
import Link from '../../package/components/Link/Link'
import StorybookHighlighter from './../../utils/StorybookHighlighter'

const importComponent = `import { Linklist } from 'components';`

export default class LinklistDemo extends PureComponent {
  render () {
    return (
      <div className='container'>
        <div className='row padding-20'>
          <div className='col-xs-12 '>
            <h2 className='h2'>Linklist</h2>
            <h3 className='h3'>{importComponent}</h3>
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-12'>
            <Linklist>
              <Link Icon='be-icon-plus' Green text='Add' />
              <Link Icon='be-icon-pencil' Blue text='Edit' />
              <Link Icon='be-icon-trash' text='Remove' />
              <Link Icon='be-icon-mail' text='' />
              <Link Icon='be-icon-check' Green text='' />
              <Link Icon='be-icon-more' text='' />
              <Link Icon='be-icon-search' Red text='' />
            </Linklist>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 '>
            <StorybookHighlighter >
              <Linklist>
                <Link Icon='be-icon-plus' Green text='Add' />
                <Link Icon='be-icon-pencil' Blue text='Edit' />
                <Link Icon='be-icon-trash' text='Remove' />
                <Link Icon='be-icon-mail' text='' />
                <Link Icon='be-icon-check' Green text='' />
                <Link Icon='be-icon-more' text='' />
                <Link Icon='be-icon-search' Red text='' />
              </Linklist>
            </StorybookHighlighter >
          </div>
        </div>
      </div>
    )
  }
}
