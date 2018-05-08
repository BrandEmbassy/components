import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';
import Textarea from './../../package/components/Textarea/Textarea';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';
import { renderToString } from 'react-dom/server';
import beautify from 'js-beautify';

const importComponent = `import { Textarea } from 'components';`;

export default class TextareaDemo extends Component {
  render() {
    return (
      <div className="container">
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <h2 className="h2">Textarea</h2>
            <h3 className="h3">{importComponent}</h3>
          </div>
          </div>
        <div className="row">
          <div className="col-xs-6">
            <Textarea label="Label here" desc="description here"/>
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <h3 className="h3">html</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Textarea label="Label here" desc="description here"/>))}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <h3 className="h3">add class Textarea__Disabled</h3>
            <h3 className="h3">and property <u>disabled</u> to textarea </h3>
          </div>
          <div className="col-xs-6">
          <Textarea label="Label here" desc="description here" isDisabled/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Textarea label="Label here" desc="description here" isDisabled/>))}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <h3 className="h3">add class Textarea__Error</h3>
          </div>
          <div className="col-xs-6">
            <Textarea label="Label here" desc="description here" isError/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Textarea label="Label here" desc="description here" isError/>))}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

