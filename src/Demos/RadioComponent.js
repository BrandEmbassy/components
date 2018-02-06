import React, { Component } from 'react';
import '!style-loader!css-loader!./../styles/Base.css';
import Radio from './../Forms/Radio/Radio';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';

export default class RadioComponent extends Component {
  render() {
    return (
      <div className="container"> 
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <h2 className="h2">Radio</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <Radio name="name" id="aaa" />
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <h3 className="h3">html</h3>
          </div>
      </div>
      <div className="row">
        <div className="col-xs-12 ">
<SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Radio__RadioComponent">
  <div class="Radio__Radio">
    <input type="radio" name="aaa" id="aaa" />
    <label for="aaa" />
  </div>
</div>
`}
</SyntaxHighlighter> 
</div>
</div>
<div className="row padding-20">
  <div className="col-xs-12 ">
    <h3 className="h3">usage with text </h3>
  </div>
</div>
<div className="row padding-20">
  <div className="col-xs-6">
    <Radio name="yyy" id="bbb" label="chose here" />
    <br />
    <Radio name="yyy" id="ccc" label="or chose this" />
    <br />
    <Radio name="yyy" id="ddd" label="or this" />
  </div>
</div>
<div className="row padding-20">
  <div className="col-xs-12 ">
<SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Radio__RadioComponent">
  <div class="Radio__Radio">
    <input type="radio" name="yyy" id="bbb" />
    <label for="bbb" />
  </div>
  <div class="Radio__Label" >chose here</div>
</div>
<div class="Radio__RadioComponent">
  <div class="Radio__Radio">
    <input type="radio" name="yyy" id="ccc" />
    <label for="ccc" />
  </div>
  <div class="Radio__Label" >or chose this</div>
</div>
<div class="Radio__RadioComponent">
  <div class="Radio__Radio">
    <input type="radio" name="yyy" id="ddd" />
    <label for="ddd" />
  </div>
  <div class="Radio__Label" >or this</div>
</div>
`}
</SyntaxHighlighter>
</div>
</div> 
</div>
);
}
}
