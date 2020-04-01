import React, { Component } from "react";
import "../../package/components/Base.css"; //eslint-disable-line

import ToggleSwitch from "../../package/components/ToggleSwitch/ToggleSwitch";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { base16AteliersulphurpoolLight } from "react-syntax-highlighter/styles/prism";
import { renderToString } from "react-dom/server";
import beautify from "js-beautify";

const importComponent = `import { ToggleSwitch } from 'components';`;

export default class ToggleSwitchDemo extends Component {
  render() {
    return (
      <div className="container">
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <h2 className="h2">Switcher</h2>
            <h3 className="h3">{importComponent}</h3>
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12">
            <ToggleSwitch />
            <ToggleSwitch round />
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12">
            <SyntaxHighlighter
              language="jsx"
              style={base16AteliersulphurpoolLight}
            >
              {beautify.html(renderToString(<ToggleSwitch />))}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}
