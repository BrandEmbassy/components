import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';
import Notification from './../../node_modules/componentsBE/Notification/Notification';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';
import { renderToString } from 'react-dom/server';
import beautify from 'js-beautify';

export default class NotificationDemo extends Component {
  render() {
    return (
      <div className="container">
        <div className="row padding-20">
          <div className="col-xs-12" >
            <h2 className="h2">Notification</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 " >
            <Notification Fix text="notification text here" />
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Notification Fix text="notification text here" />))}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12" >
            <h3 className="h3">Fixed</h3>
            fixed on top 
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 " >
            <Notification Fixed isGreen text="notification Fixed here" />
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Notification Fixed isGreen text="notification text here" />))}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12" >
            <h3 className="h3">isGreen</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 " >
            <Notification Fix isGreen text="notification text here" />
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Notification isGreen text="notification text here" />))}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 padding-20" >
            <h3 className="h3">isRed</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12" >
            <Notification isRed text="notification text here" />
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Notification isRed text="notification text here" />))}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 padding-20" >
            <h3 className="h3">isYellow</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12" >
            <Notification isYellow text="notification text here" />
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Notification isYellow text="notification text here" />))}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className="row padding-20">
          <div className="col-xs-12 padding-10" >
            <h3 className="h3">Notification long text</h3>
          </div>
          <div className="col-xs-12" >
            <Notification isRed text="notification longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer longer text here" />
          </div>
        </div>
        <div className="row padding-20">
        </div>
      </div>
    );
  }
}

