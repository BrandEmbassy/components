import React, { Component } from 'react';
import  '!style-loader!css-loader!./../styles/Base.css';
import Table from './../Forms/Table/Table';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';

export default class TableComponent extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="h2">Table</h2>

        <div className="row">
          <Table />       
        </div>
        
        <h3 className="h3">html</h3>
<SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Table">
<table>
  <thead>
    <tr>
      <th>Channel</th>
      <th class="Fix200">Delaying messages</th>
      <th class="Fix200">Default delay value</th>
      <th class="Fix200">Maximum delay value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span>acc.socialmedia@homecredit.co.id</span>
      </td>
      <td class="Fix200">
        test
      </td>
      <td class="Fix200">
      testtest
      </td>
      <td class="Fix200">
      testtesttest
      </td>
    </tr>
    <tr>
      <td>
        <span>acc.nevim@nevim.co.id</span>
      </td>
      <td class="Fix200">
        test2131
      </td>
      <td class="Fix200">
      testtest32
      </td>
      <td class="Fix200">
      testtesttest31
      </td>
    </tr>
    <tr>
      ...
    </tr>
  </tbody>
</table>
</div>
`}
</SyntaxHighlighter> 

<h3 className="h3">css</h3>
<SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`.Table {
  position: relative;
  display: block;
  width: 100%;
  float: left;
  margin: 20px 0;
  overflow: hidden;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
  border: 1px solid #ccc;
  border-radius: 3px;
  text-align: left;
  font-size: 13px;
  font-weight: 400;
  font-style: normal;
  color: #4a4a4a;
}

.Table table {
  position: relative;
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  border: none;
}

.Table table tr .Fix200 {
  width: 200px;
  max-width: 200px;
}

.Table table tr th:first-child, .Table table tr td:first-child  {
  padding-left: 20px;
}

.Table table tr th{
  height: 40px;
  background-color: #f5f5f5;
  font-weight: 700;
  color: gray;
  display: table-cell;
}

.Table table tr td{
  height: 40px;
  color: gray;
  display: table-cell;
}
`}
</SyntaxHighlighter> 
</div>
    );
  }
}