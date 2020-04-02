import React, { Component } from "react";
import "../../package/components/Base.css"; //eslint-disable-line

import Switcher from "../../package/components/Switcher/Switcher";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { base16AteliersulphurpoolLight } from "react-syntax-highlighter/styles/prism";
import { renderToString } from "react-dom/server";
import beautify from "js-beautify";

const importComponent = `import { Switcher } from 'components';`;

export default class SwitcherDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  hanlerSwitcherClick = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    const { isActive } = this.state;

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
            <Switcher
              SwitcherClick={this.hanlerSwitcherClick}
              isActive={isActive}
            />
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12">
            <SyntaxHighlighter
              language="jsx"
              style={base16AteliersulphurpoolLight}
            >
              {beautify.html(renderToString(<Switcher />))}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}
