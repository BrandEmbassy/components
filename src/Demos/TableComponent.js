import React, { Component } from 'react';
import  '!style-loader!css-loader!./../styles/Base.css';
import Table from './../Forms/Table/Table';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';

export default class TableComponent extends Component {
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
{`<div class="Table__Table">
<table>
  <thead>
    <tr>
        <th>Channel</th>
        <th>Delaying messages</th>
        <th>Default delay value</th>
        <th>Maximum delay value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span>acc.socialmedia@homecredit.co.id</span>
      </td>
      <td>
        test
      </td>
      <td>
      testtest
      </td>
      <td>
      testtesttest
      </td>
    </tr>
    <tr>
      <td>
        <span>acc.nevim@nevim.co.id</span>
      </td>
      <td>
        test2131
      </td>
      <td>
      testtest32
      </td>
      <td>
      testtesttest31
      </td>
    </tr>
  </tbody>
</table>
</div>
`}
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
{`<div class="Table__Table Table__Fixed">
`}
</SyntaxHighlighter>
    </div>
  </div>
</div>
    );
  }
}
