import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';
import Dropdown from './../../package/components/Dropdown/Dropdown';
import DropdownToggle from './../../package/components/DropdownToggle/DropdownToggle';
import DropdownMenu from './../../package/components/DropdownMenu/DropdownMenu';
import DropdownItem from './../../package/components/DropdownItem/DropdownItem';

import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';
import { renderToString } from 'react-dom/server';
import beautify from 'js-beautify';
import styles from './../../App.css';

const importComponent = `import { Dropdown } from 'components';`;

export default class DropdownDemo extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: true
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggle2(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className={styles.App}>
        <div className="row padding-20">
          <div className="col-xs-12">
          <h3 className="h3">{importComponent}</h3>
            <Dropdown>
              <DropdownToggle onClick={this.toggle} >
                Select Channel
              </DropdownToggle>
              <DropdownMenu isOpen={this.state.dropdownOpen} >
                <DropdownItem onClick={this.toggle2}>Facebook</DropdownItem>
                <DropdownItem>Twitter</DropdownItem>
                <DropdownItem>vkontakte</DropdownItem>
                <DropdownItem>Twitter</DropdownItem>
              </DropdownMenu>
            </Dropdown>
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
