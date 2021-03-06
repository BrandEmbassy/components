import React, { Component } from 'react'
import "../../package/components/Base.css"; //eslint-disable-line
import Breadcrumbs from '../../package/components/Breadcrumbs/Breadcrumbs'
import Button from '../../package/components/Button/Button'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { renderToString } from 'react-dom/server'
import beautify from 'js-beautify'

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
            <SyntaxHighlighter
              language='jsx'
              style={base16AteliersulphurpoolLight}
            >
              {beautify.html(renderToString(<Breadcrumbs />))}
            </SyntaxHighlighter>
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
            <SyntaxHighlighter
              language='jsx'
              style={base16AteliersulphurpoolLight}
            >
              {beautify.html(
                renderToString(
                  <Breadcrumbs>
                    <Button Small text='Add someting' Icon='be-icon-plus' />
                  </Breadcrumbs>
                )
              )}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    )
  }
}
