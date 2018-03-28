import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';
import Input from './../../node_modules/componentsBE/Input/Input';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';
import { renderToString } from 'react-dom/server';
import beautify from 'js-beautify';

export default class InputDemo extends Component {
  render() {
    return (
      <div className="container">
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <h2 className="h2">Input</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <Input label="Label here" desc="description here"/>
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <h3 className="h3">html</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 ">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Input label="Label here" desc="description here"/>))}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <h3 className="h3">add class Input__Disabled</h3>
            <h3 className="h3">and property <u>disabled</u> to input </h3>
          </div>
          <div className="col-xs-6">
            <Input label="Label here" desc="description here" isDisabled/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 ">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Input label="Label here" desc="description here" isDisabled/>))}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <h3 className="h3">add class Input__Error</h3>
          </div>
          <div className="col-xs-6">
            <Input label="Label here" desc="description here" isError/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 ">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Input label="Label here" desc="description here" isError/>))}
            </SyntaxHighlighter>
          </div>
        </div> 
      </div>
    );
  }
}

