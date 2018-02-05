import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';
import Channel from './../../Custom/Channel/Channel';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';

export default class ChannelPictureComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <h2 className="h2">ChanelPicture</h2>
          </div>
          <div className="col-xs-6">
            <h3 className="h3">Facebook</h3>
            <Channel Facebook/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Channel_Channel Channel_Facebook"></div>
`}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6">
            <h3 className="h3">Size</h3>
            <h4 className="h4">24px is default</h4>
            <Channel Facebook Size60 />
            <Channel Facebook Size40 />
            <Channel Facebook />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Channel_Channel Channel_Facebook"></div>
`}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Twitter</h3>
            <Channel Twitter/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Channel_Channel Channel_Twitter"></div>
`}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Instagram</h3>
            <Channel Instagram/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Channel_Channel Channel_Instagram"></div>
`}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Google</h3>
            <Channel Google/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Channel_Channel Channel_Google"></div>
`}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Youtube</h3>
            <Channel Youtube/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Channel_Channel Channel_Youtube"></div>
`}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Linkedin</h3>
            <Channel Linkedin/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Channel_Channel Channel_Linkedin"></div>
`}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Livechat</h3>
            <Channel Livechat/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Channel_Channel Channel_Livechat"></div>
`}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Email</h3>
            <Channel Email/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Channel_Channel Channel_Email"></div>
`}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Forum</h3>
            <Channel Forum/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Channel_Channel Channel_Forum"></div>
`}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Vkontakte</h3>
            <Channel Vkontakte/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Channel_Channel Channel_Vkontakte"></div>
`}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-6 ">
            <h3 className="h3">Listening</h3>
            <Channel Listening/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Channel_Channel Channel_Listening"></div>
`}
            </SyntaxHighlighter> 
          </div>
        </div>
      </div>
    );
  }
}

