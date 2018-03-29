import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';
import ProfilePicture from './../../node_modules/components/ProfilePicture/ProfilePicture';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';
import { renderToString } from 'react-dom/server';
import beautify from 'js-beautify';

export default class ProfilePictureDemo extends Component {
  render() {
    return (
      <div className="container">
        <div className="row padding-20">
          <div className="col-xs-12" >
            <h2 className="h2">Profile Pic</h2>
          </div>

          <div className="col-xs-6">
            <h3 className="h3">Size</h3>
            <h4 className="h4">for 60px use class Size60</h4>
            <h4 className="h4">for 40px use class Size40</h4>
            <h4 className="h4">32px is default</h4>
            <h4 className="h4">for 24px use class Size24</h4>
            <h4 className="h4">for 20px use class Size20</h4>
            <h4 className="h4">for 16px use class Size16</h4>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 " >
            <ProfilePicture Size60 />
            <ProfilePicture Size40 />
            <ProfilePicture />
            <ProfilePicture Size24 />
            <ProfilePicture Size20 />
            <ProfilePicture Size16 />
          </div>
        </div>
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
              {beautify.html(renderToString(<ProfilePicture Size24 />))}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

