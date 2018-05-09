import React, { Component } from 'react'
import '!style-loader!css-loader!./../../styles/Base.css' //eslint-disable-line
import Button from './../../package/components/Button/Button'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { renderToString } from 'react-dom/server'
import beautify from 'js-beautify'

const importComponent = `import { Button } from 'components';`

export default class ButtonDemo extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row padding-20'>
          <div className='col-xs-5 '>
            <h2 className='h2'>Button</h2>

            <h3 className='h3'>{importComponent}</h3>

            <Button text='Button' />
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Button text='Button' />))}
            </SyntaxHighlighter>
          </div>
          <div className='col-xs-5 col-xs-offset-1'>
            <h2 className='h2'>small</h2>
            <Button text='button' Small />
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Button text='button' Small />))}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-5 '>
            <h2 className='h2'>Icon</h2>
            <Button text='Button' Icon='be-icon-plus' />
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Button text='Button' Icon='be-icon-plus' />))}
            </SyntaxHighlighter>
          </div>
          <div className='col-xs-5 col-xs-offset-1'>
            <h2 className='h2'>cancel</h2>
            <Button text='button' isNegative Icon='be-icon-cross' />
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Button text='button' isNegative Icon='be-icon-cross' />))}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-5 '>
            <h2 className='h2'>Negative</h2>
            <Button text='Button' isNegative />
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Button text='Button' isNegative />))}
            </SyntaxHighlighter>
          </div>
          <div className='col-xs-5 col-xs-offset-1'>
            <h2 className='h2'>small</h2>
            <Button text='button' isNegative Small />
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Button text='button' isNegative Small />))}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-5 '>
            <h2 className='h2'>Disabled</h2>
            <Button text='Button' isDisabled />
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Button text='Button' isDisabled />))}
            </SyntaxHighlighter>
          </div>
          <div className='col-xs-5 col-xs-offset-1'>
            <h2 className='h2'>small</h2>
            <Button text='button' isDisabled Small />
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Button text='button' isDisabled Small />))}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-5 '>
            <h2 className='h2'>Cancel</h2>
            <Button text='Button' isCancel />
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Button text='Button' isCancel />))}
            </SyntaxHighlighter>
          </div>
          <div className='col-xs-5 col-xs-offset-1'>
            <h2 className='h2'>small</h2>
            <Button text='button' isCancel Small />
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Button text='button' isCancel Small />))}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-5 '>
            <h2 className='h2'>Reversed</h2>
            <Button text='Button' isReversed />
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Button text='Button' isReversed />))}
            </SyntaxHighlighter>
          </div>
          <div className='col-xs-5 col-xs-offset-1'>
            <h2 className='h2'>small</h2>
            <Button text='button' isReversed Small />
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Button text='button' isReversed Small />))}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-5 '>
            <h2 className='h2'>Wide</h2>
            <Button text='Button' Wide />
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Button text='Button' Wide />))}
            </SyntaxHighlighter>
          </div>
          <div className='col-xs-5 col-xs-offset-1'>
            <h2 className='h2'>small</h2>
            <Button text='button' Wide Small />
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Button text='button' Wide Small />))}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    )
  }
}
