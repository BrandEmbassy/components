import React, { Component } from 'react';
import '!style-loader!css-loader!./../styles/Base.css';
import Input from './../Forms/Input/Input';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';

export default class InputComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <h2 className="h2">Input</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <Input label="Label here" desc="description here"/>
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
{`<div class="Input__Input">
  <div class="Input__Label">
    label text here
  </div>
  <div class="Input__Field">
    <input type="text" name="headline" placeholder="..." />
  </div>
  <div class="Input__Desc">
    description text here               
  </div>
</div>
`}
</SyntaxHighlighter> 
</div>
</div>
<div className="row padding-20">
  <div className="col-xs-12 ">
    <h3 className="h3">add class Input__Disabled</h3>

    <h3 className="h3">and property <u>disabled</u> to input </h3>
  </div>
  <div className="col-xs-6">
    <Input label="Label here" desc="description here" isDisabled/>
  </div>
</div>
<div className="row">
  <div className="col-xs-12 ">
<SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`
<div class="Input__Input Input__Disabled">
  <div class="Input__Label">
    label text here
  </div>
  <div class="Input__Field">
    <input type="text" name="headline" placeholder="..." disabled />
  </div>
  <div class="Input__Desc">
    description text here               
  </div>
</div>
`}
</SyntaxHighlighter> 
  </div>
</div>
<div className="row padding-20">
  <div className="col-xs-12 ">
    <h3 className="h3">add class Input__Error</h3>
  </div>
  
  <div className="col-xs-6">
    <Input label="Label here" desc="description here" isError/>
  </div>
</div>
<div className="row">
  <div className="col-xs-12 ">
<SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`
<div class="Input__Input Input__Error">
  <div class="Input__Label">
    label text here
  </div>
  <div class="Input__Field">
    <input type="text" name="headline" placeholder="..." />
  </div>
  <div class="Input__Desc">
    description text here               
  </div>
</div>
`}
</SyntaxHighlighter>
</div>
</div> 
</div>
    );
  }
}

