import React, { Component } from 'react'
import '!style-loader!css-loader!../../package/components/Base.css' //eslint-disable-line
import Checkbox from './../../package/components/Checkbox/Checkbox'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { renderToString } from 'react-dom/server'
import beautify from 'js-beautify'

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
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Checkbox id='0' />))}
            </SyntaxHighlighter>
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
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Checkbox id='xzs' label='chose one' />))}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    )
  }
}
