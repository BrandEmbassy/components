import React, { Component } from 'react'
import '!style-loader!css-loader!./../../styles/Base.css' //eslint-disable-line
import Header from './../../package/components/Header/Header'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { renderToString } from 'react-dom/server'
import beautify from 'js-beautify'

const importComponent = `import { Header } from 'components';`

export default class HeaderDemo extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <Header />
        </div>
        <div className='row'>
          <div className='col-xs-12 '>
            <h2 className='h2'>Header</h2>
            <h3 className='h3'>{importComponent}</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Header />))}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    )
  }
}
