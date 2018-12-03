import React, { Component } from 'react'
import '!style-loader!css-loader!../../package/components/Base.css' //eslint-disable-line
import Tag from './../../package/components/Tag/Tag'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { renderToString } from 'react-dom/server'
import beautify from 'js-beautify'

const importComponent = `import { Tag } from 'components';`

export default class TagDemo extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row padding-20'>
          <div className='col-xs-12 '>
            <h2 className='h2'>Tag</h2>
            <h3 className='h3'>{importComponent}</h3>
            color="DarkPurple / Purple / Pink / Red / Yellow / Turquoise / Green / LightBlue / Blue"
          </div>
          <div className='col-xs-10 padding-20'>
            <Tag text='Tag name' />
            <Tag color='DarkPurple' text='Tag name' />
            <Tag color='Purple' text='Tag name' />
            <Tag color='Pink' text='Tag name' />
            <Tag color='Red' text='Tag name' />
            <Tag color='Yellow' text='Tag name' />
            <Tag color='Turquoise' text='Tag name' />
            <Tag color='Green' text='Tag name' />
            <Tag color='LightBlue' text='Tag name' />
            <Tag color='Blue' text='Tag name' />
            <Tag text='Tag name' />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Tag color='Green' text='Tag name' />))}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    )
  }
}
