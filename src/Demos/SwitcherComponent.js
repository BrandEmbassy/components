import React, { Component } from 'react';
import '!style-loader!css-loader!./../styles/Base.css';
import Switcher from './../Controls/Switcher/Switcher';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';

export default class SwitcherComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="">
            <Switcher />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
<SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Switcher__Switcher">

</div>
`}
</SyntaxHighlighter>
    </div>
  </div>
</div>
    );
  }
}

