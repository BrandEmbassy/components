import React, { Component } from 'react';
import Grid from './../src/Basic/Grid/Grid';
import Typography from './../src/Basic/Typography/Typography';
import Icons from './../src/Basic/Icons/Icons';

import InputDemo from './../src/Demos/Forms/InputDemo';
import SelectDemo from './../src/Demos/Forms/SelectboxDemo';
import TextareaDemo from './../src/Demos/Forms/TextareaDemo';
import CheckboxDemo from './../src/Demos/Forms/CheckboxDemo';
import RadioDemo from './../src/Demos/Forms/RadioDemo';
import TableDemo from './../src/Demos/Forms/TableDemo';
import SubmitDemo from './../src/Demos/Forms/SubmitDemo';

import ButtonDemo from './../src/Demos/Controls/ButtonDemo';
import ButtonGroupDemo from './../src/Demos/Controls/ButtonGroupDemo';
import LinkDemo from './../src/Demos/Controls/LinkDemo';

import StatusesDemo from './../src/Demos/Custom/StatusesDemo';
import TagDemo from './../src/Demos/Custom/TagDemo';

import BreadcrumbsDemo from './../src/Demos/Navigation/BreadcrumbsDemo';
import DropdownDemo from './../src/Demos/Navigation/DropdownDemo';

import HeaderDemo from './../src/Demos/Custom/HeaderDemo';
import LabelDemo from './../src/Demos/Custom/LabelDemo';
import ChannelDemo from './../src/Demos/Custom/ChannelDemo';
import NotificationDemo from './../src/Demos/Custom/NotificationDemo';
import ProfilePictureDemo from './../src/Demos/Custom/ProfilePictureDemo';
import './styles/Base.css';
import styles from './App.css';

export default class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <b><a href="http://localhost:6006">Open</a></b> component library
            </div>
          </div>
        </div>
      </div>
    );
  }
}
