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

          <div className='col-xs-12 padding-10'>
            <h3 className='h3'>Facebook</h3>
            <Channel type='facebook' />
          </div>

          <div className='col-xs-12 padding-10'>
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Channel type='facebook' />))}
            </SyntaxHighlighter>
          </div>

          <div className='col-xs-12 padding-10'>
            <h3 className='h3'>Size</h3>
            <h4 className='h4'>for 60px use class size60</h4>
            <h4 className='h4'>for 40px use class size40</h4>
            <h4 className='h4'>24px is default</h4>
            <h4 className='h4'>for 20px use class size20</h4>
            <h4 className='h4'>for 16px use class size16</h4>
            <Channel type='facebook' size="large" />
            <Channel type='facebook' size="medium" />
            <Channel type='facebook' />
            <Channel type='facebook' size="small" />
            <Channel type='facebook' size="tiny" />
          </div>

          <div className='col-xs-12 padding-10'>
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Channel type='facebook' size="large" />))}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className='row padding-10'>
          <div className='col-xs-12'>
            <h3 className='h3'>facebook-dm</h3>
            <h4 className='h4'> add class facebook-dm</h4>
            <Channel type='facebook-dm' size="large" />
            <Channel type='facebook-dm' size="medium" />
            <Channel type='facebook-dm' />
            <Channel type='facebook-dm' size="small" />
            <Channel type='facebook-dm' size="tiny" />
          </div>

          <div className='col-xs-12 padding-10'>
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Channel type='facebook-dm' />))}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>facebook-messenger</h3>
            <Channel type='facebook-messenger' size="large" />
            <Channel type='facebook-messenger' size="medium" />
            <Channel type='facebook-messenger' />
            <Channel type='facebook-messenger' size="small" />
            <Channel type='facebook-messenger' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>twitter</h3>
            <Channel type='twitter' size="large" />
            <Channel type='twitter' size="medium" />
            <Channel type='twitter' />
            <Channel type='twitter' size="small" />
            <Channel type='twitter' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>twitter-dm</h3>
            <Channel type='twitter-dm' size="large" />
            <Channel type='twitter-dm' size="medium" />
            <Channel type='twitter-dm' />
            <Channel type='twitter-dm' size="small" />
            <Channel type='twitter-dm' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>instagram</h3>
            <Channel type='instagram' size="large" />
            <Channel type='instagram' size="medium" />
            <Channel type='instagram' />
            <Channel type='instagram' size="small" />
            <Channel type='instagram' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>instagram-dm</h3>
            <Channel type='instagram-dm' size="large" />
            <Channel type='instagram-dm' size="medium" />
            <Channel type='instagram-dm' />
            <Channel type='instagram-dm' size="small" />
            <Channel type='instagram-dm' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>google</h3>
            <Channel type='google' size="large" />
            <Channel type='google' size="medium" />
            <Channel type='google' />
            <Channel type='google' size="small" />
            <Channel type='google' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>google-dm</h3>
            <Channel type='google-dm' size="large" />
            <Channel type='google-dm' size="medium" />
            <Channel type='google-dm' />
            <Channel type='google-dm' size="small" />
            <Channel type='google-dm' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>google-search</h3>
            <Channel type='google-search' size="large" />
            <Channel type='google-search' size="medium" />
            <Channel type='google-search' />
            <Channel type='google-search' size="small" />
            <Channel type='google-search' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>youtube</h3>
            <Channel type='youtube' size="large" />
            <Channel type='youtube' size="medium" />
            <Channel type='youtube' />
            <Channel type='youtube' size="small" />
            <Channel type='youtube' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>linkedin</h3>
            <Channel type='linkedin' size="large" />
            <Channel type='linkedin' size="medium" />
            <Channel type='linkedin' />
            <Channel type='linkedin' size="small" />
            <Channel type='linkedin' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>livechat</h3>
            <Channel type='livechat' size="large" />
            <Channel type='livechat' size="medium" />
            <Channel type='livechat' />
            <Channel type='livechat' size="small" />
            <Channel type='livechat' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>email</h3>
            <Channel type='email' size="large" />
            <Channel type='email' size="medium" />
            <Channel type='email' />
            <Channel type='email' size="small" />
            <Channel type='email' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>forum</h3>
            <Channel type='forum' size="large" />
            <Channel type='forum' size="medium" />
            <Channel type='forum' />
            <Channel type='forum' size="small" />
            <Channel type='forum' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>vkontakte</h3>
            <Channel type='vkontakte' size="large" />
            <Channel type='vkontakte' size="medium" />
            <Channel type='vkontakte' />
            <Channel type='vkontakte' size="small" />
            <Channel type='vkontakte' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>vkontakte-dm</h3>
            <Channel type='vkontakte-dm' size="large" />
            <Channel type='vkontakte-dm' size="medium" />
            <Channel type='vkontakte-dm' />
            <Channel type='vkontakte-dm' size="small" />
            <Channel type='vkontakte-dm' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>listening</h3>
            <Channel type='listening' size="large" />
            <Channel type='listening' size="medium" />
            <Channel type='listening' />
            <Channel type='listening' size="small" />
            <Channel type='listening' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>kbm-1</h3>
            <Channel type='kbm-1' size="large" />
            <Channel type='kbm-1' size="medium" />
            <Channel type='kbm-1' />
            <Channel type='kbm-1' size="small" />
            <Channel type='kbm-1' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>whatsapp</h3>
            <Channel type='whatsapp' size="large" />
            <Channel type='whatsapp' size="medium" />
            <Channel type='whatsapp' />
            <Channel type='whatsapp' size="small" />
            <Channel type='whatsapp' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>viber</h3>
            <Channel type='viber' size="large" />
            <Channel type='viber' size="medium" />
            <Channel type='viber' />
            <Channel type='viber' size="small" />
            <Channel type='viber' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>pinterest</h3>
            <Channel type='pinterest' size="large" />
            <Channel type='pinterest' size="medium" />
            <Channel type='pinterest' />
            <Channel type='pinterest' size="small" />
            <Channel type='pinterest' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>tumblr</h3>
            <Channel type='tumblr' size="large" />
            <Channel type='tumblr' size="medium" />
            <Channel type='tumblr' />
            <Channel type='tumblr' size="small" />
            <Channel type='tumblr' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>snapchat</h3>
            <Channel type='snapchat' size="large" />
            <Channel type='snapchat' size="medium" />
            <Channel type='snapchat' />
            <Channel type='snapchat' size="small" />
            <Channel type='snapchat' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>ok-ru</h3>
            <Channel type='ok-ru' size="large" />
            <Channel type='ok-ru' size="medium" />
            <Channel type='ok-ru' />
            <Channel type='ok-ru' size="small" />
            <Channel type='ok-ru' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>kik</h3>
            <Channel type='kik' size="large" />
            <Channel type='kik' size="medium" />
            <Channel type='kik' />
            <Channel type='kik' size="small" />
            <Channel type='kik' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>slack</h3>
            <Channel type='slack' size="large" />
            <Channel type='slack' size="medium" />
            <Channel type='slack' />
            <Channel type='slack' size="small" />
            <Channel type='slack' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>amazon</h3>
            <Channel type='amazon' size="large" />
            <Channel type='amazon' size="medium" />
            <Channel type='amazon' />
            <Channel type='amazon' size="small" />
            <Channel type='amazon' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>google-play</h3>
            <Channel type='google-play' size="large" />
            <Channel type='google-play' size="medium" />
            <Channel type='google-play' />
            <Channel type='google-play' size="small" />
            <Channel type='google-play' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>google-maps</h3>
            <Channel type='google-maps' size="large" />
            <Channel type='google-maps' size="medium" />
            <Channel type='google-maps' />
            <Channel type='google-maps' size="small" />
            <Channel type='google-maps' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>sms</h3>
            <Channel type='sms' size="large" />
            <Channel type='sms' size="medium" />
            <Channel type='sms' />
            <Channel type='sms' size="small" />
            <Channel type='sms' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>rss</h3>
            <Channel type='rss' size="large" />
            <Channel type='rss' size="medium" />
            <Channel type='rss' />
            <Channel type='rss' size="small" />
            <Channel type='rss' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>telegram</h3>
            <Channel type='telegram' size="large" />
            <Channel type='telegram' size="medium" />
            <Channel type='telegram' />
            <Channel type='telegram' size="small" />
            <Channel type='telegram' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>apple</h3>
            <Channel type='apple' size="large" />
            <Channel type='apple' size="medium" />
            <Channel type='apple' />
            <Channel type='apple' size="small" />
            <Channel type='apple' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>apple-apps</h3>
            <Channel type='apple-apps' size="large" />
            <Channel type='apple-apps' size="medium" />
            <Channel type='apple-apps' />
            <Channel type='apple-apps' size="small" />
            <Channel type='apple-apps' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>wechat</h3>
            <Channel type='wechat' size="large" />
            <Channel type='wechat' size="medium" />
            <Channel type='wechat' />
            <Channel type='wechat' size="small" />
            <Channel type='wechat' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>voice</h3>
            <Channel type='voice' size="large" />
            <Channel type='voice' size="medium" />
            <Channel type='voice' />
            <Channel type='voice' size="small" />
            <Channel type='voice' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>contact-form</h3>
            <Channel type='contact-form' size="large" />
            <Channel type='contact-form' size="medium" />
            <Channel type='contact-form' />
            <Channel type='contact-form' size="small" />
            <Channel type='contact-form' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>livechat-contact-form</h3>
            <Channel type='livechat-contact-form' size="large" />
            <Channel type='livechat-contact-form' size="medium" />
            <Channel type='livechat-contact-form' />
            <Channel type='livechat-contact-form' size="small" />
            <Channel type='livechat-contact-form' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>line-message</h3>
            <Channel type='line-message' size="large" />
            <Channel type='line-message' size="medium" />
            <Channel type='line-message' />
            <Channel type='line-message' size="small" />
            <Channel type='line-message' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>rcs</h3>
            <Channel type='rcs' size="large" />
            <Channel type='rcs' size="medium" />
            <Channel type='rcs' />
            <Channel type='rcs' size="small" />
            <Channel type='rcs' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>apple-imessage</h3>
            <Channel type='apple-imessage' size="large" />
            <Channel type='apple-imessage' size="medium" />
            <Channel type='apple-imessage' />
            <Channel type='apple-imessage' size="small" />
            <Channel type='apple-imessage' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>co-browsing</h3>
            <Channel type='co-browsing' size="large" />
            <Channel type='co-browsing' size="medium" />
            <Channel type='co-browsing' />
            <Channel type='co-browsing' size="small" />
            <Channel type='co-browsing' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>in-app-messaging</h3>
            <Channel type='in-app-messaging' size="large" />
            <Channel type='in-app-messaging' size="medium" />
            <Channel type='in-app-messaging' />
            <Channel type='in-app-messaging' size="small" />
            <Channel type='in-app-messaging' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>kakao-talk</h3>
            <Channel type='kakao-talk' size="large" />
            <Channel type='kakao-talk' size="medium" />
            <Channel type='kakao-talk' />
            <Channel type='kakao-talk' size="small" />
            <Channel type='kakao-talk' size="tiny" />
          </div>

          <div className='col-xs-12 col-md-6 col-lg-4 padding-20'>
            <h3 className='h3'>tango</h3>
            <Channel type='tango' size="large" />
            <Channel type='tango' size="medium" />
            <Channel type='tango' />
            <Channel type='tango' size="small" />
            <Channel type='tango' size="tiny" />
          </div>
        </div>
      </div>
    )
  }
}
