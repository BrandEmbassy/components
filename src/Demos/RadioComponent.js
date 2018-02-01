import React, { Component } from 'react';
import '!style-loader!css-loader!./../styles/Base.css';
import Radio from './../Forms/Radio/Radio';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';

export default class RadioComponent extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="h2">Radio</h2>

        <div className="row">
          <div className="col-xs-6">
            <Radio id="same" />
            <Radio id="same" />
            <Radio id="same" />
          </div>
        </div>

        <h3 className="h3">html</h3>
<SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div className={styles.Radio} />
  <input type="radio" name="xxx" id="xxx" />
  <label for="xxx" ></label>
</div>
`}
</SyntaxHighlighter> 

        <h3 className="h3">css</h3>
<SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`.Radio {
  position: relative;
  display: flex;
  width: 14px;
  height: 14px;
  margin-right: 6px;

  & input {
    height: 14px;
  }
}
.Radio span {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; 
}

[type="radio"]:checked,
[type="radio"]:not(:checked) {
  position: absolute;
  left: -9999px;
}

[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label
{
  position: relative;
  width: 14px;
  height: 14px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  color: #666;
}

[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 1px solid #808080;
  border-radius: 100%;
  box-sizing: border-box;
  background: #fff;
}

[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
  content: '';
  width: 8px;
  height: 8px;
  background: #4d4d4d;
  position: absolute;
  top: 3px;
  left: 3px;
  border-radius: 100%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

[type="radio"]:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}

[type="radio"]:checked + label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
`}
</SyntaxHighlighter> 
</div>
);
}
}
