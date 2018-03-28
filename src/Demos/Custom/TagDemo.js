import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';
import Tag from './../../node_modules/componentsBE/Tag/Tag';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';
import { renderToString } from 'react-dom/server';
import beautify from 'js-beautify';

export default class TagDemo extends Component {
  render() {
    return (
      <div className="container">
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <h2 className="h2">Tag</h2>
            DarkPurple / Purple / Pink / Red / Yellow / Turquoise / Green / LightBlue / Blue 
          </div>
          <div className="col-xs-10 padding-20">
            <Tag DarkPurple text="Tag name"/>
            <Tag Purple text="Tag name"/>
            <Tag Pink text="Tag name"/>
            <Tag Red text="Tag name"/>
            <Tag Yellow text="Tag name"/>
            <Tag Turquoise text="Tag name"/>
            <Tag Green text="Tag name"/>
            <Tag LightBlue text="Tag name"/>
            <Tag Blue text="Tag name"/>
            <Tag text="Tag name"/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<Tag Green text="Tag name"/>))}
            </SyntaxHighlighter> 
          </div>
        </div>
      </div>
    );
  }
}

