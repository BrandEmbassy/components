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
            <h4 className='h4'>for 60px use class Size60</h4>
            <h4 className='h4'>for 40px use class Size40</h4>
            <h4 className='h4'>24px is default</h4>
            <h4 className='h4'>for 20px use class Size20</h4>
            <h4 className='h4'>for 16px use class Size16</h4>
            <Channel type='facebook' Size60 />
            <Channel type='facebook' Size40 />
            <Channel type='facebook' />
            <Channel type='facebook' Size20 />
            <Channel type='facebook' Size16 />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-6'>
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Channel type='facebook' Size60 />))}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className='row padding-20'>
          <div className='col-xs-6'>
            <h3 className='h3'>DM</h3>
            <h4 className='h4'> add class DM</h4>
            <Channel type='facebook' Size60 DM />
            <Channel type='facebook' Size40 DM />
            <Channel type='facebook' DM />
            <Channel type='facebook' Size20 DM />
            <Channel type='facebook' Size16 DM />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-6'>
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Channel Facebook DM />))}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>FacebookMessenger</h3>
            <Channel type='FacebookMessenger' Size60 />
            <Channel type='FacebookMessenger' Size40 />
            <Channel type='FacebookMessenger' />
            <Channel type='FacebookMessenger' Size20 />
            <Channel type='FacebookMessenger' Size16 />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>Twitter</h3>
            <Channel type='twitter' Size60 />
            <Channel type='twitter' Size40 />
            <Channel type='twitter' />
            <Channel type='twitter' Size20 />
            <Channel type='twitter' Size16 />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>Instagram</h3>
            <Channel type='instagram' Size60 />
            <Channel type='instagram' Size40 />
            <Channel type='instagram' />
            <Channel type='instagram' Size20 />
            <Channel type='instagram' Size16 />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>instagram DM</h3>
            <Channel type='instagram' DM Size60 />
            <Channel type='instagram' DM Size40 />
            <Channel type='instagram' DM />
            <Channel type='instagram' DM Size20 />
            <Channel type='instagram' DM Size16 />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>Google</h3>
            <Channel type='google' Size60 />
            <Channel type='google' Size40 />
            <Channel type='google' />
            <Channel type='google' Size20 />
            <Channel type='google' Size16 />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>GoogleSearch</h3>
            <Channel type='GoogleSearch' Size60 />
            <Channel type='GoogleSearch' Size40 />
            <Channel type='GoogleSearch' />
            <Channel type='GoogleSearch' Size20 />
            <Channel type='GoogleSearch' Size16 />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>Youtube</h3>
            <Channel type='youtube' Size60 />
            <Channel type='youtube' Size40 />
            <Channel type='youtube' />
            <Channel type='youtube' Size20 />
            <Channel type='youtube' Size16 />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>Linkedin</h3>
            <Channel type='linkedin' Size60 />
            <Channel type='linkedin' Size40 />
            <Channel type='linkedin' />
            <Channel type='linkedin' Size20 />
            <Channel type='linkedin' Size16 />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>Livechat</h3>
            <Channel type='livechat' Size60 />
            <Channel type='livechat' Size40 />
            <Channel type='livechat' />
            <Channel type='livechat' Size20 />
            <Channel type='livechat' Size16 />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>Email</h3>
            <Channel type='email' Size60 />
            <Channel type='email' Size40 />
            <Channel type='email' />
            <Channel type='email' Size20 />
            <Channel type='email' Size16 />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>Forum</h3>
            <Channel type='forum' Size60 />
            <Channel type='forum' Size40 />
            <Channel type='forum' />
            <Channel type='forum' Size20 />
            <Channel type='forum' Size16 />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>Vkontakte</h3>
            <Channel type='vkontakte' Size60 />
            <Channel type='vkontakte' Size40 />
            <Channel type='vkontakte' />
            <Channel type='vkontakte' Size20 />
            <Channel type='vkontakte' Size16 />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>Listening</h3>
            <Channel type='listening' Size60 />
            <Channel type='listening' Size40 />
            <Channel type='listening' />
            <Channel type='listening' Size20 />
            <Channel type='listening' Size16 />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>Whatsapp</h3>
            <Channel type='Whatsapp' Size60 />
            <Channel type='Whatsapp' Size40 />
            <Channel type='Whatsapp' />
            <Channel type='Whatsapp' Size20 />
            <Channel type='Whatsapp' Size16 />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>Viber</h3>
            <Channel type='Viber' Size60 />
            <Channel type='Viber' Size40 />
            <Channel type='Viber' />
            <Channel type='Viber' Size20 />
            <Channel type='Viber' Size16 />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>Pinterest</h3>
            <Channel type='Pinterest' Size60 />
            <Channel type='Pinterest' Size40 />
            <Channel type='Pinterest' />
            <Channel type='Pinterest' Size20 />
            <Channel type='Pinterest' Size16 />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>Tumblr</h3>
            <Channel type='Tumblr' Size60 />
            <Channel type='Tumblr' Size40 />
            <Channel type='Tumblr' />
            <Channel type='Tumblr' Size20 />
            <Channel type='Tumblr' Size16 />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>Snapchat</h3>
            <Channel type='Snapchat' Size60 />
            <Channel type='Snapchat' Size40 />
            <Channel type='Snapchat' />
            <Channel type='Snapchat' Size20 />
            <Channel type='Snapchat' Size16 />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>OK</h3>
            <Channel type='OK' Size60 />
            <Channel type='OK' Size40 />
            <Channel type='OK' />
            <Channel type='OK' Size20 />
            <Channel type='OK' Size16 />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>Kik</h3>
            <Channel type='Kik' Size60 />
            <Channel type='Kik' Size40 />
            <Channel type='Kik' />
            <Channel type='Kik' Size20 />
            <Channel type='Kik' Size16 />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>Slack</h3>
            <Channel type='Slack' Size60 />
            <Channel type='Slack' Size40 />
            <Channel type='Slack' />
            <Channel type='Slack' Size20 />
            <Channel type='Slack' Size16 />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>Amazon</h3>
            <Channel type='Amazon' Size60 />
            <Channel type='Amazon' Size40 />
            <Channel type='Amazon' />
            <Channel type='Amazon' Size20 />
            <Channel type='Amazon' Size16 />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>GooglePlay</h3>
            <Channel type='GooglePlay' Size60 />
            <Channel type='GooglePlay' Size40 />
            <Channel type='GooglePlay' />
            <Channel type='GooglePlay' Size20 />
            <Channel type='GooglePlay' Size16 />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>GoogleMaps</h3>
            <Channel type='GoogleMaps' Size60 />
            <Channel type='GoogleMaps' Size40 />
            <Channel type='GoogleMaps' />
            <Channel type='GoogleMaps' Size20 />
            <Channel type='GoogleMaps' Size16 />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>SMS</h3>
            <Channel type='SMS' Size60 />
            <Channel type='SMS' Size40 />
            <Channel type='SMS' />
            <Channel type='SMS' Size20 />
            <Channel type='SMS' Size16 />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>RSS</h3>
            <Channel type='RSS' Size60 />
            <Channel type='RSS' Size40 />
            <Channel type='RSS' />
            <Channel type='RSS' Size20 />
            <Channel type='RSS' Size16 />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>Telegram</h3>
            <Channel type='Telegram' Size60 />
            <Channel type='Telegram' Size40 />
            <Channel type='Telegram' />
            <Channel type='Telegram' Size20 />
            <Channel type='Telegram' Size16 />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>Apple</h3>
            <Channel type='Apple' Size60 />
            <Channel type='Apple' Size40 />
            <Channel type='Apple' />
            <Channel type='Apple' Size20 />
            <Channel type='Apple' Size16 />
          </div>
        </div>
        <div className='row padding-20'>
          <div className='col-xs-6 '>
            <h3 className='h3'>AppleApp</h3>
            <Channel type='AppleApp' Size60 />
            <Channel type='AppleApp' Size40 />
            <Channel type='AppleApp' />
            <Channel type='AppleApp' Size20 />
            <Channel type='AppleApp' Size16 />
          </div>
        </div>


      </div>
    )
  }
}
