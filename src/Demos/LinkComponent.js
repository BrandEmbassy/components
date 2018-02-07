import React, { Component } from 'react';
import '!style-loader!css-loader!./../styles/Base.css';
import Link from './../Controls/Link/Link';
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
            <Link Icon="be-icon-trash" />
          </div>
          <div className="col-xs-12">
            <Link Icon="be-icon-pencil" text="edit" /> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12">
        <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Link__Link Link__Blue">
  <div class="be-icon-pencil"></div>
  edit
</div>
<div class="Link__Link Link__White">
  <div class="be-icon-trash"></div>
</div>
`}
          </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <h2 className="h2">Blue</h2>
          </div>
        </div>
        <div className="row padding-20 ">
          <div className="col-xs-12">
            <Link Icon="be-icon-pencil" Blue text="edit" />
          </div>
          <div className="col-xs-12">
            <Link Icon="be-icon-trash" Blue />
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12">
        <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Link__Link Link__Blue">
  <div class="be-icon-pencil"></div>
  edit
</div>
<div class="Link__Link Link__White">
  <div class="be-icon-trash"></div>
</div>
`}
          </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <h2 className="h2">white</h2>
          </div>
        </div>
        <div className="row padding-20 color">
          <div className="col-xs-12">
            <Link Icon="be-icon-pencil" White text="edit" />
          </div>
          <div className="col-xs-12">
            <Link Icon="be-icon-trash" White />
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12">
        <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Link__Link Link__White">
  <div class="be-icon-pencil"></div>
  edit
</div>
<div class="Link__Link Link__White">
  <div class="be-icon-trash"></div>
</div>
`}
          </SyntaxHighlighter> 
          </div>
        </div>
      </div>
    );
  }
}

