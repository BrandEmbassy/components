import React, { Component } from 'react';
import '!style-loader!css-loader!./../styles/Base.css';
import Button from './../Controls/Button/Button';

export default class ButtonComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">

          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"> 
          <div class="box">      
            <h2 className="h2"> Button </h2>
              <Button text="button"/>
            <h3 className="h3">Negative </h3>
              <Button text="button" isNegative />
            <h3 className="h3">Cancel </h3>
              <Button text="button" isCancel />
            <h3 className="h3">Reversed </h3>
              <Button text="button" isReversed />
            <h3 className="h3">Disabled </h3>
              <Button text="button" isDisabled />
            </div>
          </div>

          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <h2 className="h2"> props smal</h2>
              <Button text="button" Small />
            <h3 className="h3">Negative </h3>
              <Button text="button" isNegative Small />
            <h3 className="h3">Cancel </h3>
              <Button text="button" isCancel Small />
            <h3 className="h3">Reversed </h3>
              <Button text="button" isReversed Small />
            <h3 className="h3">Disabled </h3>
              <Button text="button" isDisabled Small />
          </div>

        </div>
      </div>
    );
  }
}

