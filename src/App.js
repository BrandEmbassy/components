import React, { Component } from 'react';
import Grid from './../src/Basic/Grid/Grid';
import Typography from './../src/Basic/Typography/Typography';
import Icons from './../src/Basic/Icons/Icons';

import InputDemo from './Demos/Forms/InputDemo';
import SelectDemo from './Demos/Forms/SelectboxDemo';
import TextareaDemo from './Demos/Forms/TextareaDemo';
import CheckboxDemo from './Demos/Forms/CheckboxDemo';
import RadioDemo from './Demos/Forms/RadioDemo';
import TableDemo from './Demos/Forms/TableDemo';
import SubmitDemo from './Demos/Forms/SubmitDemo';

import ButtonDemo from './Demos/Controls/ButtonDemo';
import ButtonGroupDemo from './Demos/Controls/ButtonGroupDemo';
import LinkDemo from './Demos/Controls/LinkDemo';

import StatusesDemo from './Demos/Custom/StatusesDemo';
import TagDemo from './Demos/Custom/TagDemo';

import BreadcrumbsDemo from './Demos/Navigation/BreadcrumbsDemo';
import DropdownDemo from './Demos/Navigation/DropdownDemo';

import HeaderDemo from './Demos/Custom/HeaderDemo';
import LabelDemo from './Demos/Custom/LabelDemo';
import ChannelDemo from './Demos/Custom/ChannelDemo';
import NotificationDemo from './Demos/Custom/NotificationDemo';
import ProfilePictureDemo from './Demos/Custom/ProfilePictureDemo';
import './styles/Base.css';
import styles from './App.css';

import Button from 'components/Button';
import Link from 'components/Link';
import ButtonGroup from 'components/ButtonGroup';
import Switcher from 'components/Switcher';
import Header from 'components/Header';
import Dropdown from 'components/Dropdown';
import Breadcrumbs from 'components/Breadcrumbs';
import Channel from 'components/Channel';
import Checkbox from 'components/Checkbox';
import Input from 'components/Input';
import Label from 'components/Label';
import Notification from 'components/Notification';
import ProfilePicture from 'components/ProfilePicture';
import Radio from 'components/Radio';
import Selectbox from 'components/Selectbox';
import Submit from 'components/Submit';
import Table from 'components/Table';
import Tag from 'components/Tag';
import Textarea from 'components/Textarea';
import Statuses from 'components/Statuses';

import Global from 'components/Global';

export default class App extends Component {
  render() {
    return (
      <div className={styles.App}>
      <div className={styles.Static}>
        <div className="row">
          <Header/>
        </div>
      </div>
      <div className={styles.Flex}>
        <div className="row">
          <div className="col-xs">
            <b><a href="http://localhost:6006">Open</a></b> component library
          </div>
        </div>
        <div className="row">
          <div className="col-xs">
            <Breadcrumbs>
              <Button Small text="Add someting" Icon="be-icon-plus" />
            </Breadcrumbs>
          </div>
        </div>
        <div className="row">
          <div className="col-xs">
            <Table />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <div className="row">
              <div className="col-xs-12">
                <h3 className="h3">Form</h3>
              </div>
              <div className="col-xs-12">
                <Input label="Input text here" desc="description..." />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <Textarea label="Textarea here" desc="description..." />
              </div>
            </div>
            <div className="row padding-15">
              <div className="col-xs-12 padding-10">
                <Checkbox name="nameA" id="aaa" label="label text here"/>
              </div>
              <div className="col-xs-12 padding-10">
                <Checkbox name="nameA" id="bbb" label="label text here"/>
              </div>
            </div>
            <div className="row padding-10">
              <div className="col-xs-12 padding-5">
                <Radio name="nameB" id="C" label="male"/>
              </div>
              <div className="col-xs-12 padding-5">
                <Radio name="nameB" id="D" label="female"/>
              </div>
              <div className="col-xs-12 padding-5">
                <Radio name="nameB" id="E" label="apache helicopter"/>
              </div>
              <div className="col-xs-12 padding-15">
                <Button text="Send Form Wide" Wide/>
              </div>
              <div className="col-xs-12 padding-15">
                <Button text="Send Form"/>
              </div>
            </div>
          </div>
          
          <div className="col-xs-6">
            <div className="row">
              <div className="col-xs-12">
                <h3 className="h3">Links</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 padding-15">
                <Link Icon="be-icon-plus" Green text="Add"/>
                <Link Icon="be-icon-pencil" Blue text="Edit"/>
                <Link Icon="be-icon-trash" text="Remove"/>
                <Link Icon="be-icon-mail" text=""/>
                <Link Icon="be-icon-check" Green text=""/>
                <Link Icon="be-icon-more" text=""/>
                <Link Icon="be-icon-search" Red text=""/>
              </div>
              <div className="col-xs-12 color4 padding-10">
                <Link Icon="be-icon-check" Green text=""/>
                <Link Icon="be-icon-more" Black text=""/>
                <Link Icon="be-icon-search" Red text="search"/>
                <Link Icon="be-icon-mail" White text="Mail"/>
              </div>
            </div>
            <div className="row padding-10">
              <div className="col-xs-12">
                <h3 className="h3">Chanels</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 padding-15">
                <Channel Facebook Size40 DM/>
                <Channel Instagram Size40/>
                <Channel Twitter Size40/>
                <Channel Livechat Size40 DM/>
              </div>
            </div>
            <div className="row padding-10">
              <div className="col-xs-12">
                <h3 className="h3">Statuses</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 padding-15">
                <Statuses New text="new"/>
                <Statuses Open text="open"/>
                <Statuses Resolved text="resolved"/>
                <Statuses Pending text="pending"/>
                <Statuses Escalated text="escalated"/>
                <Statuses Closed text="closed"/>
                <Statuses Trashed text="closed"/>
              </div>
              <div className="col-xs-12 padding-15">
                <Statuses Reversed Orange text="new"/>
                <Statuses Reversed Yellow text="open"/>
                <Statuses Reversed Green text="resolved"/>
                <Statuses Reversed Blue text="pending"/>
                <Statuses Reversed Purple text="escalated"/>
                <Statuses Reversed Red text="closed"/>
              </div>
            </div>
            <div className="row padding-10">
              <div className="col-xs-12">
                <h3 className="h3">Tags</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 padding-15">
                <Tag Red text="Tag name"/>
                <Tag Yellow text="Tag name"/>
                <Tag Turquoise text="Tag name"/>
                <Tag Green text="Tag name"/>
                <Tag LightBlue text="Tag name"/>
                <Tag Blue text="Tag name"/>
              </div>
            </div>
            <div className="row padding-10">
              <div className="col-xs-12">
                <h3 className="h3">Notification message</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row around-xs padding-20">
          <div className="col-xs-6 background padding-20">
          <div className="row">
              <div className="col-xs-12">
                <h3 className="h3">Form</h3>
              </div>
              <div className="col-xs-12">
                <Label text="facebook channel label text here">
                  <Channel Facebook Size40/>
                </Label>
              </div>
              <div className="col-xs-12">
                <Input label="Input text here" desc="description..." />
              </div>
              <div className="col-xs-12">
                <Textarea label="Input text here" desc="description..." />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <Button text="Send Form Wide" Wide/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
