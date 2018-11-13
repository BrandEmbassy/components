import React, { PureComponent } from 'react'
import '!style-loader!css-loader!./../../styles/Base.css' //eslint-disable-line
import Header from './../../package/components/Header/Header'
import StorybookHighlighter from './../../utils/StorybookHighlighter'
import Link from './../../package/components/Link/Link'

const importComponent = `import { Header } from 'components';`

export default class HeaderDemo extends PureComponent {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <Header >
            <Link text='Go back to settings' White Icon='be-icon-long-arrow-left' />
          </Header >
        </div>
        <div className='row'>
          <div className='col-xs-12 '>
            <h2 className='h2'>Header</h2>
            <h3 className='h3'>{importComponent}</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <StorybookHighlighter >
              <Header />
            </StorybookHighlighter >
          </div>
        </div>
      </div>
    )
  }
}
