import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';
import Statuses from './../../package/components/Statuses/Statuses';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';
import { renderToString } from 'react-dom/server';
import beautify from 'js-beautify';

const importComponent = `import { Statuses } from 'components';`;

export default class StatusesDemo extends Component {
  render() {
    return (
      <div className="container">
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <h2 className="h2">Statuses</h2>
            <h3 className="h3">{importComponent}</h3>
            status = "New, Open, Resolved, Pending, Escalated, Closed, Trashed, Reversed"
          </div>
          <div className="col-xs-10 padding-20">
            <Statuses status="New" />
            <Statuses status="Open" />
            <Statuses status="Resolved" />
            <Statuses status="Pending" />
            <Statuses status="Escalated" />
            <Statuses status="Closed" />
            <Statuses status="Trashed" />
            <Statuses status="Reversed" />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Statuses status="New" />))}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row">
        <div className="col-xs-12 ">
            <h3 className="h3">Reversed</h3>
          </div>
          <div className="col-xs-10 padding-20">
            <Statuses status="New" Reversed />
            <Statuses status="Open" Reversed />
            <Statuses status="Resolved" Reversed />
            <Statuses status="Pending" Reversed />
            <Statuses status="Escalated" Reversed />
            <Statuses status="Closed" Reversed />
            <Statuses status="Trashed" Reversed />
            <Statuses status="Reversed" Reversed />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Statuses status="New" Reversed />))}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

