import React, { Component } from 'react';
import '!style-loader!css-loader!./../styles/Base.css';
import Input from './../Forms/Input/Input';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';

export default class InputComponent extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="h2">Input</h2>

        <div className="row">
          <div className="col-xs-6">
            <Input label="Label here" desc="description here"/>
          </div>
        </div>

      <h3 className="h3">html</h3>
<SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Input__Input">
  <div class="Input__Label">
    label text here
  </div>
  <div class="Input__Field">
    <input type="text" name="headline" id="form" placeholder="..." />
  </div>
  <div class="Input__Desc">
    description text here               
  </div>
</div>
`}
</SyntaxHighlighter> 
<br /><br />
<h3 className="h3">add class Input__Disabled</h3>

<h3 className="h3">and property <u>disabled</u> to input </h3>

<div className="row">
          <div className="col-xs-6">
            <Input label="Label here" desc="description here" isDisabled/>
          </div>
        </div>
<SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`
<div class="Input__Input Input__Disabled">
  <div class="Input__Label">
    label text here
  </div>
  <div class="Input__Field">
    <input type="text" name="headline" id="form" placeholder="..." disabled />
  </div>
  <div class="Input__Desc">
    description text here               
  </div>
</div>
`}
</SyntaxHighlighter> 
<br /><br />

<h3 className="h3">add class Input__Error</h3>


<div className="row">
          <div className="col-xs-6">
            <Input label="Label here" desc="description here" isError/>
          </div>
        </div>
<SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`
<div class="Input__Input Input__Error">
  <div class="Input__Label">
    label text here
  </div>
  <div class="Input__Field">
    <input type="text" name="headline" id="form" placeholder="..." />
  </div>
  <div class="Input__Desc">
    description text here               
  </div>
</div>
`}
</SyntaxHighlighter> 
</div>
    );
  }
}

