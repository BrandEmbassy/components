import React, { Component } from 'react';
import '!style-loader!css-loader!./../styles/Base.css';
import ButtonGroup from './../Controls/ButtonGroup/ButtonGroup';
import Button from './../Controls/Button/Button';

export default class ButtonGroupComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="HeaderBox">
            <div className="step">Controls</div>
            <div className="step">ButtonGroup</div>
          </div>
        </div>
        <div className="row">
          <ButtonGroup>
            <Button text="buttonA" />
            <Button text="buttonB" isNegative/>
            <Button text="buttonC" isDisabled/>
            <Button text="buttonD" />
            <Button text="buttonE" isDisabled/>
            <Button text="buttonF" isNegative/>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

