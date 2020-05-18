import React, { Component } from 'react'
import "../../package/components/Base.css"; //eslint-disable-line
import Radio from './../../package/components/Radio/Radio'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { renderToString } from 'react-dom/server'
import beautify from 'js-beautify'

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
            <SyntaxHighlighter
              language='jsx'
              style={base16AteliersulphurpoolLight}
            >
              {beautify.html(renderToString(<Radio name='name' id='aaa' />))}
            </SyntaxHighlighter>
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
            <SyntaxHighlighter
              language='jsx'
              style={base16AteliersulphurpoolLight}
            >
              {beautify.html(
                renderToString(
                  <div className='col-xs-6'>
                    <Radio name='yyy' id='bbb' label='chose here' />
                    <br />
                    <Radio name='yyy' id='ccc' label='or chose this' />
                    <br />
                    <Radio name='yyy' id='ddd' label='or this' />
                  </div>
                )
              )}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    )
  }
}
