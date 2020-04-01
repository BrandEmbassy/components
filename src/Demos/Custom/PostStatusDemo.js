import React, { Component } from "react";
import "../../package/components/Base.css"; //eslint-disable-line
import PostStatus from "./../../package/components/PostStatus/PostStatus";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { base16AteliersulphurpoolLight } from "react-syntax-highlighter/styles/prism";
import { renderToString } from "react-dom/server";
import beautify from "js-beautify";

const importComponent = `import { PostStatus } from 'components';`;

export default class PostStatusDemo extends Component {
  render() {
    return (
      <div className="container">
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <h2 className="h2">PostStatus</h2>
            <h3 className="h3">{importComponent}</h3>
            status = "New, Draft, Post, Pending, Escalated, Closed, Trashed,
            Reversed"
          </div>
          <div className="col-xs-10 padding-20">
            <PostStatus status="New" />
            <PostStatus status="Draft" />
            <PostStatus status="Post" />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <SyntaxHighlighter
              language="jsx"
              style={base16AteliersulphurpoolLight}
            >
              {beautify.html(renderToString(<PostStatus status="New" />))}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 ">
            <h3 className="h3">Reversed</h3>
          </div>
          <div className="col-xs-10 padding-20">
            <PostStatus status="New" Reversed />
            <PostStatus status="Draft" Reversed />
            <PostStatus status="Post" Reversed />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <SyntaxHighlighter
              language="jsx"
              style={base16AteliersulphurpoolLight}
            >
              {beautify.html(
                renderToString(<PostStatus status="New" Reversed />)
              )}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}
