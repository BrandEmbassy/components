import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';
import Statuses from './../../node_modules/components/Statuses/Statuses';
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
            Orange / Yellow / Green / Blue / Purple / Red / Grey
          </div>
          <div className="col-xs-10 padding-20">
            <Statuses Orange text="new"/>
            <Statuses Yellow text="open"/>
            <Statuses Green text="resolved"/>
            <Statuses Blue text="pending"/>
            <Statuses Purple text="escalated"/>
            <Statuses Red text="closed"/>
            <Statuses Grey text="trashed"/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Statuses Orange text="new"/>))}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row">
        <div className="col-xs-12 ">
            <h3 className="h3">Reversed</h3>
          </div>
          <div className="col-xs-10 padding-20">
            <Statuses Reversed Orange text="new"/>
            <Statuses Reversed Yellow text="open"/>
            <Statuses Reversed Green text="resolved"/>
            <Statuses Reversed Blue text="pending"/>
            <Statuses Reversed Purple text="escalated"/>
            <Statuses Reversed Red text="closed"/>
            <Statuses Reversed Grey text="trashed"/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Statuses Reversed Orange text="new"/>))}
            </SyntaxHighlighter> 
          </div>
        </div>
      </div>
    );
  }
}

