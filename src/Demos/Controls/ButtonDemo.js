import React, { PureComponent } from "react";
import "../../package/components/Base.css"; //eslint-disable-line
import Button from "./../../package/components/Button/Button";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { base16AteliersulphurpoolLight } from "react-syntax-highlighter/styles/prism";
import { renderToString } from "react-dom/server";
import beautify from "js-beautify";

const importComponent = `import { Button } from 'components';`;

export default class ButtonDemo extends PureComponent {
  render() {
    return (
      <div className="container">
        <div className="row padding-20">
          <div className="col-xs-5 ">
            <h2 className="h2">Button</h2>

            <h3 className="h3">{importComponent}</h3>

            <Button text="Button" />
            <SyntaxHighlighter
              language="jsx"
              style={base16AteliersulphurpoolLight}
            >
              {beautify.html(renderToString(<Button text="Button" />))}
            </SyntaxHighlighter>
          </div>
          <div className="col-xs-5 col-xs-offset-1">
            <h2 className="h2">small</h2>
            <Button text="button" Small />
            <SyntaxHighlighter
              language="jsx"
              style={base16AteliersulphurpoolLight}
            >
              {beautify.html(renderToString(<Button text="button" Small />))}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-5 ">
            <h2 className="h2">Icon</h2>
            <Button text="Button" Icon="be-icon-plus" />
            <SyntaxHighlighter
              language="jsx"
              style={base16AteliersulphurpoolLight}
            >
              {beautify.html(
                renderToString(<Button text="Button" Icon="be-icon-plus" />)
              )}
            </SyntaxHighlighter>
          </div>
          <div className="col-xs-5 col-xs-offset-1">
            <h2 className="h2">cancel</h2>
            <Button text="button" Negative Icon="be-icon-cross" />
            <SyntaxHighlighter
              language="jsx"
              style={base16AteliersulphurpoolLight}
            >
              {beautify.html(
                renderToString(
                  <Button text="button" Negative Icon="be-icon-cross" />
                )
              )}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-5 ">
            <h2 className="h2">Negative</h2>
            <Button text="Button" Negative />
            <SyntaxHighlighter
              language="jsx"
              style={base16AteliersulphurpoolLight}
            >
              {beautify.html(renderToString(<Button text="Button" Negative />))}
            </SyntaxHighlighter>
          </div>
          <div className="col-xs-5 col-xs-offset-1">
            <h2 className="h2">small</h2>
            <Button text="button" Negative Small />
            <SyntaxHighlighter
              language="jsx"
              style={base16AteliersulphurpoolLight}
            >
              {beautify.html(
                renderToString(<Button text="button" Negative Small />)
              )}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-5 ">
            <h2 className="h2">Disabled</h2>
            <Button text="Button" Disabled />
            <SyntaxHighlighter
              language="jsx"
              style={base16AteliersulphurpoolLight}
            >
              {beautify.html(renderToString(<Button text="Button" Disabled />))}
            </SyntaxHighlighter>
          </div>
          <div className="col-xs-5 col-xs-offset-1">
            <h2 className="h2">small</h2>
            <Button text="button" Disabled Small />
            <SyntaxHighlighter
              language="jsx"
              style={base16AteliersulphurpoolLight}
            >
              {beautify.html(
                renderToString(<Button text="button" Disabled Small />)
              )}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-5 ">
            <h2 className="h2">Cancel</h2>
            <Button text="Button" Cancel />
            <SyntaxHighlighter
              language="jsx"
              style={base16AteliersulphurpoolLight}
            >
              {beautify.html(renderToString(<Button text="Button" Cancel />))}
            </SyntaxHighlighter>
          </div>
          <div className="col-xs-5 col-xs-offset-1">
            <h2 className="h2">small</h2>
            <Button text="button" Cancel Small />
            <SyntaxHighlighter
              language="jsx"
              style={base16AteliersulphurpoolLight}
            >
              {beautify.html(
                renderToString(<Button text="button" Cancel Small />)
              )}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-5 ">
            <h2 className="h2">Reversed</h2>
            <Button text="Button" Reversed />
            <SyntaxHighlighter
              language="jsx"
              style={base16AteliersulphurpoolLight}
            >
              {beautify.html(renderToString(<Button text="Button" Reversed />))}
            </SyntaxHighlighter>
          </div>
          <div className="col-xs-5 col-xs-offset-1">
            <h2 className="h2">small</h2>
            <Button text="button" Reversed Small />
            <SyntaxHighlighter
              language="jsx"
              style={base16AteliersulphurpoolLight}
            >
              {beautify.html(
                renderToString(<Button text="button" Reversed Small />)
              )}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-5 ">
            <h2 className="h2">Wide</h2>
            <Button text="Button" Wide />
            <SyntaxHighlighter
              language="jsx"
              style={base16AteliersulphurpoolLight}
            >
              {beautify.html(renderToString(<Button text="Button" Wide />))}
            </SyntaxHighlighter>
          </div>
          <div className="col-xs-5 col-xs-offset-1">
            <h2 className="h2">small</h2>
            <Button text="button" Wide Small />
            <SyntaxHighlighter
              language="jsx"
              style={base16AteliersulphurpoolLight}
            >
              {beautify.html(
                renderToString(<Button text="button" Wide Small />)
              )}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}
