import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';
import Dropdown from '../../Navigation/Dropdown/Dropdown';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';
import { renderToString } from 'react-dom/server';
import beautify from 'js-beautify';
import styles from './../../App.css';

export default class DropdownDemo extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className="row padding-20">
          <div className="col-xs-12">
            <Dropdown isActive/>
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <br /><br /><br /><br />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Dropdown isActive/>))}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}
