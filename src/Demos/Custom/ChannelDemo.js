import React, { PureComponent } from 'react'
import '!style-loader!css-loader!./../../styles/Base.css' //eslint-disable-line
import Channel from './../../package/components/Channel/Channel'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { renderToString } from 'react-dom/server'
import beautify from 'js-beautify'

const importComponent = `import { Channel } from 'components';`

export default class ChannelDemo extends PureComponent {
  render () {
    return (
      <div className='container'>
        <div className='row padding-20'>
          <div className='col-xs-12 '>
            <h2 className='h2'>Channel</h2>
            <h3 className='h3'>{importComponent}</h3>
          </div>
          <div className='col-xs-6'>
            <h3 className='h3'>Facebook</h3>
            <Channel type='facebook' />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-6'>
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Channel type='facebook' />))}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6'>
            <h3 className='h3'>Size</h3>
            <h4 className='h4'>for 60px use class size={60}</h4>
            <h4 className='h4'>for 40px use class size={40}</h4>
            <h4 className='h4'>24px is default</h4>
            <h4 className='h4'>for 20px use class size={20}</h4>
            <h4 className='h4'>for 16px use class size={16}</h4>
            <Channel type='facebook' size={60} />
            <Channel type='facebook' size={40} />
            <Channel type='facebook' />
            <Channel type='facebook' size={20} />
            <Channel type='facebook' size={16} />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-6'>
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Channel type='facebook' size={60} />))}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className='row padding-20'>
          <div className='col-xs-6'>
            <h3 className='h3'>isPrivate</h3>
            <h4 className='h4'> add class isPrivate</h4>
            <Channel type='facebook' Size={60} isPrivate />
            <Channel type='facebook' size={40} isPrivate />
            <Channel type='facebook' isPrivate />
            <Channel type='facebook' size={20} isPrivate />
            <Channel type='facebook' size={16} isPrivate />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-6'>
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Channel Facebook isPrivate />))}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>facebook-messenger</h3>
            <Channel type='facebook-messenger' size={60} />
            <Channel type='facebook-messenger' size={40} />
            <Channel type='facebook-messenger' />
            <Channel type='facebook-messenger' size={20} />
            <Channel type='facebook-messenger' size={16} />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>twitter</h3>
            <Channel type='twitter' size={60} />
            <Channel type='twitter' size={40} />
            <Channel type='twitter' />
            <Channel type='twitter' size={20} />
            <Channel type='twitter' size={16} />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>instagram</h3>
            <Channel type='instagram' size={60} />
            <Channel type='instagram' size={40} />
            <Channel type='instagram' />
            <Channel type='instagram' size={20} />
            <Channel type='instagram' size={16} />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>instagram isPrivate</h3>
            <Channel type='instagram' isPrivate size={60} />
            <Channel type='instagram' isPrivate size={40} />
            <Channel type='instagram' isPrivate />
            <Channel type='instagram' isPrivate size={20} />
            <Channel type='instagram' isPrivate size={16} />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>google</h3>
            <Channel type='google' size={60} />
            <Channel type='google' size={40} />
            <Channel type='google' />
            <Channel type='google' size={20} />
            <Channel type='google' size={16} />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>google-search</h3>
            <Channel type='google-search' size={60} />
            <Channel type='google-search' size={40} />
            <Channel type='google-search' />
            <Channel type='google-search' size={20} />
            <Channel type='google-search' size={16} />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>youtube</h3>
            <Channel type='youtube' size={60} />
            <Channel type='youtube' size={40} />
            <Channel type='youtube' />
            <Channel type='youtube' size={20} />
            <Channel type='youtube' size={16} />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>linkedin</h3>
            <Channel type='linkedin' size={60} />
            <Channel type='linkedin' size={40} />
            <Channel type='linkedin' />
            <Channel type='linkedin' size={20} />
            <Channel type='linkedin' size={16} />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>livechat</h3>
            <Channel type='livechat' size={60} />
            <Channel type='livechat' size={40} />
            <Channel type='livechat' />
            <Channel type='livechat' size={20} />
            <Channel type='livechat' size={16} />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>email</h3>
            <Channel type='email' size={60} />
            <Channel type='email' size={40} />
            <Channel type='email' />
            <Channel type='email' size={20} />
            <Channel type='email' size={16} />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>forum</h3>
            <Channel type='forum' size={60} />
            <Channel type='forum' size={40} />
            <Channel type='forum' />
            <Channel type='forum' size={20} />
            <Channel type='forum' size={16} />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>vkontakte</h3>
            <Channel type='vkontakte' size={60} />
            <Channel type='vkontakte' size={40} />
            <Channel type='vkontakte' />
            <Channel type='vkontakte' size={20} />
            <Channel type='vkontakte' size={16} />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>listening</h3>
            <Channel type='listening' size={60} />
            <Channel type='listening' size={40} />
            <Channel type='listening' />
            <Channel type='listening' size={20} />
            <Channel type='listening' size={16} />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>whatsapp</h3>
            <Channel type='whatsapp' size={60} />
            <Channel type='whatsapp' size={40} />
            <Channel type='whatsapp' />
            <Channel type='whatsapp' size={20} />
            <Channel type='whatsapp' size={16} />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>viber</h3>
            <Channel type='viber' size={60} />
            <Channel type='viber' size={40} />
            <Channel type='viber' />
            <Channel type='viber' size={20} />
            <Channel type='viber' size={16} />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>pinterest</h3>
            <Channel type='pinterest' size={60} />
            <Channel type='pinterest' size={40} />
            <Channel type='pinterest' />
            <Channel type='pinterest' size={20} />
            <Channel type='pinterest' size={16} />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>tumblr</h3>
            <Channel type='tumblr' size={60} />
            <Channel type='tumblr' size={40} />
            <Channel type='tumblr' />
            <Channel type='tumblr' size={20} />
            <Channel type='tumblr' size={16} />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>snapchat</h3>
            <Channel type='snapchat' size={60} />
            <Channel type='snapchat' size={40} />
            <Channel type='snapchat' />
            <Channel type='snapchat' size={20} />
            <Channel type='snapchat' size={16} />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>ok</h3>
            <Channel type='ok' size={60} />
            <Channel type='ok' size={40} />
            <Channel type='ok' />
            <Channel type='ok' size={20} />
            <Channel type='ok' size={16} />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>kik</h3>
            <Channel type='kik' size={60} />
            <Channel type='kik' size={40} />
            <Channel type='kik' />
            <Channel type='kik' size={20} />
            <Channel type='kik' size={16} />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>slack</h3>
            <Channel type='slack' size={60} />
            <Channel type='slack' size={40} />
            <Channel type='slack' />
            <Channel type='slack' size={20} />
            <Channel type='slack' size={16} />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>amazon</h3>
            <Channel type='amazon' size={60} />
            <Channel type='amazon' size={40} />
            <Channel type='amazon' />
            <Channel type='amazon' size={20} />
            <Channel type='amazon' size={16} />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>google-play</h3>
            <Channel type='google-play' size={60} />
            <Channel type='google-play' size={40} />
            <Channel type='google-play' />
            <Channel type='google-play' size={20} />
            <Channel type='google-play' size={16} />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>google-maps</h3>
            <Channel type='google-maps' size={60} />
            <Channel type='google-maps' size={40} />
            <Channel type='google-maps' />
            <Channel type='google-maps' size={20} />
            <Channel type='google-maps' size={16} />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>sms</h3>
            <Channel type='sms' size={60} />
            <Channel type='sms' size={40} />
            <Channel type='sms' />
            <Channel type='sms' size={20} />
            <Channel type='sms' size={16} />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>rss</h3>
            <Channel type='rss' size={60} />
            <Channel type='rss' size={40} />
            <Channel type='rss' />
            <Channel type='rss' size={20} />
            <Channel type='rss' size={16} />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>telegram</h3>
            <Channel type='telegram' size={60} />
            <Channel type='telegram' size={40} />
            <Channel type='telegram' />
            <Channel type='telegram' size={20} />
            <Channel type='telegram' size={16} />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>apple</h3>
            <Channel type='apple' size={60} />
            <Channel type='apple' size={40} />
            <Channel type='apple' />
            <Channel type='apple' size={20} />
            <Channel type='apple' size={16} />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>apple-apps</h3>
            <Channel type='apple-apps' size={60} />
            <Channel type='apple-apps' size={40} />
            <Channel type='apple-apps' />
            <Channel type='apple-apps' size={20} />
            <Channel type='apple-apps' size={16} />
          </div>
        </div>


      </div>
    )
  }
}
