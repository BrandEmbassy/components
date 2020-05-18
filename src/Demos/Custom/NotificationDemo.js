import React, { Component } from 'react'
import "../../package/components/Base.css"; //eslint-disable-line
import Notification from './../../package/components/Notification/Notification'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { renderToString } from 'react-dom/server'
import beautify from 'js-beautify'

const importComponent = `import { Notification } from 'components';`

export default class NotificationDemo extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row padding-20'>
          <div className='col-xs-12'>
            <h2 className='h2'>Notification</h2>
            <h3 className='h3'>{importComponent}</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 '>
            <Notification type='default' text='default notification' />
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
                  <Notification Fix text='notification text here' />
                )
              )}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-12'>
            <h3 className='h3'>Fixed</h3>
            fixed on top
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 '>
            <Notification Fixed type='success' text='notification Fixed here' />
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
                  <Notification
                    Fixed
                    type='success'
                    text='notification text here'
                  />
                )
              )}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-12'>
            <h3 className='h3'>isGreen</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 '>
            <Notification Fix type='success' text='notification text here' />
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
                  <Notification type='success' text='notification text here' />
                )
              )}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 padding-20'>
            <h3 className='h3'>error</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <Notification type='error' text='notification text here' />
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
                  <Notification type='error' text='notification text here' />
                )
              )}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 padding-20'>
            <h3 className='h3'>warning</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <Notification type='warning' text='notification text here' />
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
                  <Notification type='warning' text='notification text here' />
                )
              )}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 padding-20'>
            <h3 className='h3'>info</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <Notification type='info' text='notification text here' />
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
                  <Notification type='info' text='notification text here' />
                )
              )}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 padding-20'>
            <h3 className='h3'>default</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <Notification type='default' text='notification text here' />
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
                  <Notification type='default' text='notification text here' />
                )
              )}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className='row padding-20'>
          <div className='col-xs-12 padding-10'>
            <h3 className='h3'>Notification long text</h3>
          </div>
          <div className='col-xs-12'>
            <Notification
              type='warning'
              text='notification longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer text here'
            />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-12 padding-10'>
            <h3 className='h3'>Notification multiline</h3>
          </div>
          <div className='col-xs-12'>
            <Notification
              isMultiline
              type='warning'
              text='notification longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer text here notification longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer text here notification longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer text here notification longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer text here'
            />
          </div>
        </div>
        <div className='row padding-20' />
      </div>
    )
  }
}
