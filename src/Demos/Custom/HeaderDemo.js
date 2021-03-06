import React, { PureComponent } from 'react'
import "../../package/components/Base.css"; //eslint-disable-line
import Header from './../../package/components/Header/Header'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { renderToString } from 'react-dom/server'
import beautify from 'js-beautify'
import Link from './../../package/components/Link/Link'

const importComponent = `import { Header } from 'components';`

export default class HeaderDemo extends PureComponent {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <Header title='Header title'>
            <Link
              text='Go back to settings'
              White
              Icon='be-icon-long-arrow-left'
            />
          </Header>
        </div>
        <div className='row'>
          <div className='col-xs-12 '>
            <h2 className='h2'>Header</h2>
            <h3 className='h3'>{importComponent}</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <SyntaxHighlighter
              language='jsx'
              style={base16AteliersulphurpoolLight}
            >
              {beautify.html(renderToString(<Header />))}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    )
  }
}
