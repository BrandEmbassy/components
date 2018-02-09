import React, { Component } from 'react';
import '!style-loader!css-loader!./../styles/Base.css';
import Selectbox from './../Forms/Selectbox/Selectbox';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';
import { renderToString } from 'react-dom/server';
import beautify from 'js-beautify';

export default class InputComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <h2 className="h2">Selectbox</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <Selectbox label="Label here" desc="description here"/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 ">
            <h3 className="h3">html</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 ">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Selectbox label="Label here" desc="description here"/>))}
            </SyntaxHighlighter>
          </div>
        </div> 
        <div className="row">
          <div className="col-xs-12 ">
            <h3 className="h3">Wide</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <Selectbox Wide label="Label here" desc="description here"/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 ">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Selectbox Wide label="Label here" desc="description here"/>))}
            </SyntaxHighlighter>
          </div>
        </div> 
        <div className="row">
          <div className="col-xs-12 ">
            <h3 className="h3">Disabled</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <Selectbox Wide isDisabled label="Label here" desc="description here"/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 ">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Selectbox isDisabled Wide label="Label here" desc="description here"/>))}
            </SyntaxHighlighter>
          </div>
        </div> 
        <div className="row">
          <div className="col-xs-12 ">
            <h3 className="h3">Error</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <Selectbox Wide isError label="Label here" desc="description here"/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 ">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Selectbox isError Wide label="Label here" desc="description here"/>))}
            </SyntaxHighlighter>
          </div>
        </div> 
      </div>
    );
  }
}

