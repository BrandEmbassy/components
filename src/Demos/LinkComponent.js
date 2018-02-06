import React, { Component } from 'react';
import '!style-loader!css-loader!./../styles/Base.css';
import Button from './../Controls/Link/Link';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';

export default class ButtonGroupComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <h2 className="h2">Link</h2>
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12">
           
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 ">
        <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="ButtonGroup__ButtonGroup">
  ...
</div>
`}
</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

