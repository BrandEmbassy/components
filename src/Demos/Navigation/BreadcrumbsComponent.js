import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';
import Breadcrumbs from './../../Navigation/Breadcrumbs/Breadcrumbs';

export default class BreadcrumbsComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="HeaderBox">
            <div className="step">Custom</div>
            <div className="step">Breadcrumbs</div>
          </div>
        </div>
        
        <Breadcrumbs />

      </div>
    );
  }
}

