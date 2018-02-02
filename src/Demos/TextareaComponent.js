import React, { Component } from 'react';
import '!style-loader!css-loader!./../styles/Base.css';
import Textarea from './../Forms/Textarea/Textarea';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';

export default class TextareaComponent extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="h2">Textarea</h2>
        <div className="row">
          <div className="col-xs-6">
            <Textarea label="Label here" desc="description here"/>
          </div>
        </div>
        <h3 className="h3">html</h3>
<SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Textarea__Input">
  <div class="Textarea__Label">
    label text here
  </div>
  <div class="Textarea__Field">
    <textarea type="text" name="headline" placeholder="..." />
  </div>
  <div class="Textarea__Desc">
    description text here               
  </div>
</div>
`}
</SyntaxHighlighter> 
<div className="row">
</div>

<h3 className="h3">add class Textarea__Disabled</h3>

<h3 className="h3">and property <u>disabled</u> to textarea </h3>

<div className="row">
  <div className="col-xs-6">
  <Textarea label="Label here" desc="description here" isDisabled/>
  </div>
</div>
<SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`
<div class="Textarea__Input Textarea__Disabled">
  <div class="Textarea__Label">
    label text here
  </div>
  <div class="Textarea__Field">
    <textarea type="text" name="headline" placeholder="..." />
  </div>
  <div class="Textarea__Desc">
    description text here               
  </div>
</div>
`}
</SyntaxHighlighter> 
<div className="row">
</div>

<h3 className="h3">add class Textarea__Error</h3>

<div className="row">
  <div className="col-xs-6">
    <Textarea label="Label here" desc="description here" isError/>
  </div>
</div>
<SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`
<div class="Textarea__Input Textarea__Error">
  <div class="Textarea__Label">
    label text here
  </div>
  <div class="Textarea__Field">
    <textarea type="text" name="headline" placeholder="..." />
  </div>
  <div class="Textarea__Desc">
    description text here               
  </div>
</div>
`}
</SyntaxHighlighter> 
</div>
    );
  }
}

