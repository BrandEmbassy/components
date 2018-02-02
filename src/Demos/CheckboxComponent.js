import React, { Component } from 'react';
import '!style-loader!css-loader!./../styles/Base.css';
import Checkbox from './../Forms/Checkbox/Checkbox';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';

export default class CheckboxComponent extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="h2">Checkbox</h2>

        <div className="row">
          <div className="col-xs-6">
            <Checkbox />
          </div>
        </div>

      <h3 className="h3">html</h3>
<SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div className={styles.Checkbox} />
  <input type="checkbox" className={styles.Checkbox} name="xxx" id="xxx" />
  <label for="xxx" ></label>
</div>
`}
</SyntaxHighlighter> 

<h3 className="h3">css</h3>
<SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`
`}
</SyntaxHighlighter> 
</div>
    );
  }
}

