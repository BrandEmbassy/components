import React, { Component } from 'react';
import '!style-loader!css-loader!./../styles/Base.css';
import ButtonGroup from './../Controls/ButtonGroup/ButtonGroup';
import Button from './../Controls/Button/Button';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';

export default class ButtonGroupComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <h2 className="h2">ButtonGroup</h2>
          </div>
        </div>
        <div className="row padding-20">
          <ButtonGroup>
            <Button text="buttonA" />
            <Button text="buttonB" isNegative/>
            <Button text="buttonC" isDisabled/>
            <Button text="buttonD" />
            <Button text="buttonE" isDisabled/>
            <Button text="buttonF" isNegative/>
          </ButtonGroup>
        </div>

        <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="ButtonGroup__ButtonGroup">
  ...
</div>
`}
</SyntaxHighlighter> 
      </div>
    );
  }
}

