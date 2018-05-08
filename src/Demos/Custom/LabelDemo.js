import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';
import Label from './../../package/components/Label/Label';
import ProfilePicture from './../../package/components/ProfilePicture/ProfilePicture';
import Channel from './../../package/components/Channel/Channel';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';
import { renderToString } from 'react-dom/server';
import beautify from 'js-beautify';

const importComponent = `import { Label } from 'components';`;

export default class LabelDemo extends Component {
  render() {
    return (
      <div className="container">
        <div className="row padding-20">
          <div className="col-xs-12" >
            <h2 className="h2">Label</h2>
            <h3 className="h3">{importComponent}</h3>
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12" >
            <Label text="facebook channel label text here">
              <Channel Facebook Size40/>
            </Label>
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(
              <Label text="facebook channel label text here">
                <Channel Facebook Size40/>
              </Label>))}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12" >
            <Label text="dogo label text here">
              <ProfilePicture Size40/>
            </Label>
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(
              <Label text="Profile label text here">
                <ProfilePicture Size40/>
              </Label>))}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12" >
            <Label text="dogo label text here">
              <ProfilePicture Size20/>
            </Label>
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(
              <Label text="Profile label text here">
                <ProfilePicture Size20/>
              </Label>))}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

