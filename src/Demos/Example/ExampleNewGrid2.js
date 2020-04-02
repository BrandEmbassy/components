import React, { Component } from "react";
import "../../package/components/Base.css"; //eslint-disable-line
import Header from "./../../package/components/Header/Header";
import Checkbox from "./../../package/components/Checkbox/Checkbox";
import Channel from "./../../package/components/Channel/Channel";
import "./../../App.module.css";

export default class ExampleA extends Component {
  render() {
    return (
      <div className="layout">
        <div className="static">
          <div className="row">
            <Header />
          </div>
        </div>
        <div className="flex">
          <div className="layout horizontal">
            <div className="static">
              <div className="row">
                <Header />
              </div>
            </div>
            <div className="flex">
              <div className="row">
                <Checkbox id="xzs" label="chose one">
                  <Channel type="facebook" size="S" />
                </Checkbox>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
