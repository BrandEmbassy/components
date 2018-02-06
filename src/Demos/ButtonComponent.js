import React, { Component } from 'react';
import '!style-loader!css-loader!./../styles/Base.css';
import Button from './../Controls/Button/Button';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';

export default class ButtonComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row padding-20">
          <div className="col-xs-5 ">
            <h2 className="h2">Button</h2>
            <Button text="Button"/>
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Button__Button">
  Button
</div>
`}
            </SyntaxHighlighter> 
          </div>
          <div className="col-xs-5 col-xs-offset-1">
          <h2 className="h2">small</h2>
            <Button text="button" Small />
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Button__Button Button__Small">
  Button
</div>
`}
            </SyntaxHighlighter> 
          </div>
        </div>
        <div className="row padding-20">
        <div className="col-xs-5 ">
          <h2 className="h2">Negative</h2>
          <Button text="Button" isNegative/>
          <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Button__Button Button__Negative">
  Button
</div>
`}
          </SyntaxHighlighter> 
        </div>
        <div className="col-xs-5 col-xs-offset-1">
        <h2 className="h2">small</h2>
          <Button text="button" isNegative Small />
          <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Button__Button Button__Negative Button__Small">
  Button
</div>
`}
          </SyntaxHighlighter> 
        </div>
      </div>
      <div className="row padding-20">
        <div className="col-xs-5 ">
          <h2 className="h2">Disabled</h2>
          <Button text="Button" isDisabled/>
          <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Button__Button Button__Disabled">
  Button
</div>
`}
          </SyntaxHighlighter> 
        </div>
        <div className="col-xs-5 col-xs-offset-1">
        <h2 className="h2">small</h2>
          <Button text="button" isDisabled Small />
          <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Button__Button Button__Disabled Button__Small">
  Button
</div>
`}
          </SyntaxHighlighter> 
        </div>
      </div>
      <div className="row padding-20">
        <div className="col-xs-5 ">
          <h2 className="h2">Cancel</h2>
          <Button text="Button" isCancel/>
          <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Button__Button Button__Cancel">
  Button
</div>
`}
          </SyntaxHighlighter> 
        </div>
        <div className="col-xs-5 col-xs-offset-1">
        <h2 className="h2">small</h2>
          <Button text="button" isCancel Small />
          <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Button__Button Button__Cancel Button__Small">
  Button
</div>
`}
          </SyntaxHighlighter> 
        </div>
      </div>
      <div className="row padding-20">
        <div className="col-xs-5 ">
          <h2 className="h2">Reversed</h2>
          <Button text="Button" isReversed/>
          <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Button__Button Button__Reversed">
  Button
</div>
`}
          </SyntaxHighlighter> 
        </div>
        <div className="col-xs-5 col-xs-offset-1">
        <h2 className="h2">small</h2>
          <Button text="button" isReversed Small />
          <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Button__Button  Button__Reversed Button__Small">
  Button
</div>
`}
          </SyntaxHighlighter> 
        </div>
      </div>
      <div className="row padding-20">
        <div className="col-xs-5 ">
          <h2 className="h2">Wide</h2>
          <Button text="Button" Wide/>
          <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Button__Button Button__Wide">
  Button
</div>
`}
          </SyntaxHighlighter> 
        </div>
        <div className="col-xs-5 col-xs-offset-1">
        <h2 className="h2">small</h2>
          <Button text="button" Wide Small />
          <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="Button__Button Button__Small Button__Wide">
  Button
</div>
`}
          </SyntaxHighlighter> 
        </div>
      </div>
      </div>
    );
  }
}

