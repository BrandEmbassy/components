import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';
import Channel from './../../package/components/Channel/Channel';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';
import { renderToString } from 'react-dom/server';
import beautify from 'js-beautify';

const importComponent = `import { Channel } from 'components';`;

export default class ChannelDemo extends Component {
  render() {
    return (
      <div className="container">
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <h2 className="h2">Channel</h2>
            <h3 className="h3">{importComponent}</h3>
          </div>
          <div className="col-xs-6">
            <h3 className="h3">Facebook</h3>
            <Channel type="facebook"/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Channel type="facebook"/>))}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6">
            <h3 className="h3">Size</h3>
            <h4 className="h4">for 60px use class Size60</h4>
            <h4 className="h4">for 40px use class Size40</h4>
            <h4 className="h4">24px is default</h4>
            <h4 className="h4">for 20px use class Size20</h4>
            <h4 className="h4">for 16px use class Size16</h4>
            <Channel type="facebook" Size60 />
            <Channel type="facebook" Size40 />
            <Channel type="facebook" />
            <Channel type="facebook" Size20 />
            <Channel type="facebook" Size16 />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Channel type="facebook" Size60 />))}
            </SyntaxHighlighter> 
          </div>
        </div>

      <div className="row padding-20">
        <div className="col-xs-6">
            <h3 className="h3">DM</h3>
            <h4 className="h4"> add class DM</h4>
            <Channel type="facebook" Size60 DM/>
            <Channel type="facebook" Size40 DM/>
            <Channel type="facebook" DM/>
            <Channel type="facebook" Size20 DM/>
            <Channel type="facebook" Size16 DM/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Channel Facebook DM/>))}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Twitter</h3>
            <Channel type="twitter" Size60 />
            <Channel type="twitter" Size40 />
            <Channel type="twitter"/>
            <Channel type="twitter" Size20 />
            <Channel type="twitter" Size16 />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Channel type="twitter"/>))}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Instagram</h3>
            <Channel type="instagram" Size60 />
            <Channel type="instagram" Size40 />
            <Channel type="instagram"/>
            <Channel type="instagram" Size20 />
            <Channel type="instagram" Size16 />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Channel type="instagram"/>))}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Google</h3>
            <Channel type="google" Size60 />
            <Channel type="google" Size40 />
            <Channel type="google"/>
            <Channel type="google" Size20 />
            <Channel type="google" Size16 />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Channel type="google"/>))}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Youtube</h3>
            <Channel type="youtube" Size60 />
            <Channel type="youtube" Size40 />
            <Channel type="youtube"/>
            <Channel type="youtube" Size20 />
            <Channel type="youtube" Size16 />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Channel type="youtube"/>))}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Linkedin</h3>
            <Channel type="linkedin" Size60 />
            <Channel type="linkedin" Size40 />
            <Channel type="linkedin"/>
            <Channel type="linkedin" Size20 />
            <Channel type="linkedin" Size16 />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Channel type="linkedin"/>))}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Livechat</h3>
            <Channel type="livechat" Size60 />
            <Channel type="livechat" Size40 />
            <Channel type="livechat"/>
            <Channel type="livechat" Size20 />
            <Channel type="livechat" Size16 />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Channel type="livechat"/>))}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Email</h3>
            <Channel type="email" Size60 />
            <Channel type="email" Size40 />
            <Channel type="email"/>
            <Channel type="email" Size20 />
            <Channel type="email" Size16 />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Channel type="email"/>))}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Forum</h3>
            <Channel type="forum" Size60 />
            <Channel type="forum" Size40 />
            <Channel type="forum"/>
            <Channel type="forum" Size20 />
            <Channel type="forum" Size16 />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Channel type="forum"/>))}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Vkontakte</h3>
            <Channel type="vkontakte" Size60 />
            <Channel type="vkontakte" Size40 />
            <Channel type="vkontakte"/>
            <Channel type="vkontakte" Size20 />
            <Channel type="vkontakte" Size16 />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Channel type="vkontakte"/>))}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Listening</h3>
            <Channel type="listening" Size60 />
            <Channel type="listening" Size40 />
            <Channel type="listening"/>
            <Channel type="listening" Size20 />
            <Channel type="listening" Size16 />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Channel type="listening"/>))}
            </SyntaxHighlighter> 
          </div>
        </div>
      </div>
    );
  }
}

