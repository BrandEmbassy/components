import React, { Component } from 'react';
import  '!style-loader!css-loader!./../../styles/Base.css';
import Table from './../../Forms/Table/Table';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';
import { renderToString } from 'react-dom/server';
import beautify from 'js-beautify';

export default class TableDemo extends Component {
  render() {
    return (
      <div className="container">
        <div className="row padding-20">
          <div className="col-xs-12">
            <h2 className="h2">Table</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
          <Table />
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12">
          <h3 className="h3">html</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Table />))}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 padding-20">
            <h3 className="h3">.Fixed</h3>
            try resize window to see diference
          </div>
          <div className="col-xs-12">
            <Table Fixed/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Table Fixed/>))}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}
