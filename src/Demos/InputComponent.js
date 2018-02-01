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
{`<div class="InputField">
  <div class="Label">
    label text here
  </div>
  <div class="Input">
    <input type="text" name="headline" id="form" placeholder="" />
  </div>
  <div class="Desc">
    description text here               
  </div>
</div>
`}
</SyntaxHighlighter> 

<h3 className="h3">css</h3>
<SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`.InputField {
  box-sizing: border-box;
  position: relative;
  display: block;
  height: auto;
  width: 100%;
  margin: 10px 0;
  float: left;
}

.Label {
  position: relative;
  display: block;
  height: 20px;
  line-height: 20px;
  font-weight: 400;
  font-style: normal;
  width: 100%;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 13px;
  color: #4a4a4a;
}

.Input {
  position: relative;
  display: block;
  width: 100%;
}

.Input input {
    box-sizing: border-box;
    width: 100%;
    height: 36px;
    padding: 8px 10px;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.1), 0 0 0 #fff;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 13px;
    font-weight: 400;
    font-style: normal;
    color: #999;
    transition: box-shadow .15s linear;
    resize: none;
    position: relative;
    display: block;
    background-color: #fff;
}

.Desc {
  position: relative;
  display: block;
  height: 20px;
  line-height: 20px;
  font-weight: 400;
  font-style: normal;
  margin-top: 2px;
  font-size: 12px;
  color: #9b9b9b;
}
`}
</SyntaxHighlighter> 
</div>
    );
  }
}

