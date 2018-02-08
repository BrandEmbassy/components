import React, { Component } from 'react';
import Grid from './../src/Basic/Grid/Grid';
import Typography from './../src/Basic/Typography/Typography';

import InputComponent from './../src/Demos/InputComponent';
import TextareaComponent from './../src/Demos/TextareaComponent';
import CheckboxComponent from './../src/Demos/CheckboxComponent';
import RadioComponent from './../src/Demos/RadioComponent';
import TableComponent from './../src/Demos/TableComponent';

import ButtonComponent from './../src/Demos/ButtonComponent';
import ButtonGroupComponent from './../src/Demos/ButtonGroupComponent';
import LinkComponent from './../src/Demos/LinkComponent';

import BreadcrumbsComponent from './../src/Demos/BreadcrumbsComponent';

import Header from './../src/Custom/Header/Header';
import ChannelLabelComponent from './../src/Demos/Custom/ChannelLabelComponent';
import ChannelPictureComponent from './../src/Demos/Custom/ChannelPictureComponent';
import NotificationComponent from './../src/Demos/Custom/NotificationComponent';
import ProfilePictureComponent from './../src/Demos/Custom/ProfilePictureComponent';
import StatusesComponent from './../src/Demos/Custom/StatusesComponent';
import './styles/Base.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <b><a href="http://localhost:6006">Open</a></b> component library
          </div>
        </div>
      </div>
    );
  }
}
