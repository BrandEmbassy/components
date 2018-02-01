import React, { Component } from 'react';
import '!style-loader!css-loader!./styles/Grid.css';
import styles from './Appc.css';

import ButtonGroupComponent from './Demos/ButtonGroupComponent';
import Table from './Forms/Table/Table';

import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { duotoneDark } from 'react-syntax-highlighter/styles/prism';
const code = `
<div className="row">
  <div className="col-xs-6">
    dadawda
  </div>
  <div className="col-xs-6">
    ddawwwwddddd
  </div>
</div>         
`;

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className={styles.Appo}>
          <h1> components </h1>

          <ButtonGroupComponent /><br />


          <SyntaxHighlighter language='jsx' style={duotoneDark}>
            {code}
          </SyntaxHighlighter> 


<div class="be-icon-arrow-right"></div>
            <div className="row">
              <div className="col-xs-6">
                dadawda
              </div>
              <div className="col-xs-6">
                ddawwwwddddd
              </div>
            </div>




        </div>

      </div>
    );
  }
}