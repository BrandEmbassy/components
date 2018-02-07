import React, { Component } from 'react';
import '!style-loader!css-loader!./../styles/Base.css';
import Breadcrumbs from '../Navigation/Breadcrumbs/Breadcrumbs';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';

export default class BreadcrumbsComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row padding-20">
          <div className="col-xs-12">
            <Breadcrumbs />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
<SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Headings__Headings">
  <div class="Headings__Step">Brand Embassy</div>
  <div class="Headings__Step">Headings</div>
</div>
`}
</SyntaxHighlighter>
</div>
</div>

<div className="row padding-20">
          <div className="col-xs-12">
            <Breadcrumbs />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
<SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Headings__Headings">
  <div class="Headings__Step">Brand Embassy</div>
  <div class="Headings__Step">Headings</div>
</div>
`}
</SyntaxHighlighter>
</div>
</div>
</div>
    );
  }
}
