import React, { Component } from 'react';
import '!style-loader!css-loader!./../styles/Base.css';
import Headings from './../Basic/Headings/Headings';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';

export default class HeadingsComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row padding-20">
          <div className="col-xs-12">
            <Headings />
          </div>
        </div>
<SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Headings__HeaderBox">
  <div class="Headings__Step">Brand Embassy</div>
  <div class="Headings__Step">Headings</div>
</div>
`}
</SyntaxHighlighter>
</div>
    );
  }
}

