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
            <br />
        </div>
        </div
        <h3 className="h3">html</h3>
<SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Radio__Radio">
  <input type="radio" name="xxx" id="xxx" />
  <label for="xxx" />
</div>
`}
</SyntaxHighlighter> 

<div className="row">
  <div className="col-xs-6">
    <Radio id="same" />
    <br />
    <Radio id="same1" />
    <br />
    <Radio id="same2" />
  </div>
</div>

        <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Radio__Radio">
  <input type="radio" name="xxx" id="xxx" />
  <label for="xxx" />
</div>
<div class="Radio__Radio">
  <input type="radio" name="xxx" id="xyy" />
  <label for="xxx" />
</div>
<div class="Radio__Radio">
  <input type="radio" name="xxx" id="xzz" />
  <label for="xxx" />
</div>

`}
</SyntaxHighlighter> 
</div>
);
}
}
