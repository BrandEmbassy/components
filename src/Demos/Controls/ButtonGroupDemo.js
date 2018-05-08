import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';
import ButtonGroup from './../../package/components/ButtonGroup/ButtonGroup';
import Button from './../../package/components/Button/Button';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';
import { renderToString } from 'react-dom/server';
import beautify from 'js-beautify';

const importComponent = `import { ButtonGroup } from 'components';`;

export default class ButtonGroupDemo extends Component {
  render() {
    return (
      <div className="container">
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <h2 className="h2">ButtonGroup</h2>
            <h3 className="h3">{importComponent}</h3>
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12">
            <ButtonGroup>
              <Button text="buttonA" >
              <div className="be-icon-plus"></div>
              </Button>
              <Button text="buttonB" isNegative/>
              <Button text="buttonC" isDisabled/>
              <Button text="buttonD" />
              <Button text="buttonE" isDisabled/>
              <Button text="buttonF" isNegative/>
            </ButtonGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 ">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<ButtonGroup>
              <Button text="buttonA" >
              <div className="be-icon-plus"></div>
              </Button>
              <Button text="buttonB" isNegative/>
              <Button text="buttonC" isDisabled/>
              <Button text="buttonD" />
              <Button text="buttonE" isDisabled/>
              <Button text="buttonF" isNegative/>
            </ButtonGroup>))}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

