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
import H1 from 'components/H1';
import H2 from 'components/H2';
import H3 from 'components/H3';
import P from 'components/P';

import Dropdown from './node_modules/components/Dropdown/Dropdown';
import DropdownToggle from './node_modules/components/DropdownToggle/DropdownToggle';
import DropdownMenu from './node_modules/components/DropdownMenu/DropdownMenu';
import DropdownItem from './node_modules/components/DropdownItem/DropdownItem';

import Select from 'components/Select';

import Global from 'components/Global';

export default class App extends Component {
  // constructor() {
  //   super();

  //   this.handleClick = this.handleClick.bind(this);
  //   this.handleOutsideClick = this.handleOutsideClick.bind(this);

  //   this.state = {
  //     popupVisible: false
  //   };
  // }


  render() {
    return (
      <div className={styles.App} >
      <div className={styles.Static}>
        <div className="row">
          <Header/>
        </div>
      </div>
      <div className={styles.Flex} >
        <div className="row">
          <div className="col-xs">
            <b><a href="http://localhost:6006">Open</a></b> component library
            <br /><br />
            {/* isOpen={this.state.popupVisible} */}
            <Dropdown >
              <DropdownToggle  >
                Select Channel
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem><Channel Facebook Size24 />Facebook</DropdownItem>
                <DropdownItem><Channel Twitter Size24 />Twitter</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <br /><br />
            <H1>test H1</H1>
            <H2>test H2</H2>
            <H3>test H3</H3>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet sodales turpis, ac sollicitudin sem. Sed et eros porttitor, ullamcorper ante vel, consectetur metus. Integer in ante nec leo viverra varius et egestas mauris. Vestibulum consequat orci laoreet tellus condimentum lacinia. Maecenas eu justo sit amet nulla aliquam consectetur. Aenean nec fermentum velit. Mauris dictum justo ipsum, vitae pharetra nibh sodales ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce dapibus felis et nunc consequat sollicitudin.
            </P>
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
                <Button text="Send Form" />
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
                <Statuses status="New" />
                <Statuses status="Open" />
                <Statuses status="Resolved" />
                <Statuses status="Pending" />
                <Statuses status="Escalated" />
                <Statuses status="Closed" />
                <Statuses status="Trashed" />
                <Statuses status="Reversed" />
              </div>
              <div className="col-xs-12 padding-15">
                <Statuses status="New" Reversed />
                <Statuses status="Open" Reversed />
                <Statuses status="Resolved" Reversed />
                <Statuses status="Pending" Reversed />
                <Statuses status="Escalated" Reversed />
                <Statuses status="Closed" Reversed />
                <Statuses status="Trashed" Reversed />
                <Statuses status="Reversed" Reversed />
              </div>
            </div>
            <div className="row padding-10">
              <div className="col-xs-12">
                <h3 className="h3">Tags</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 padding-15">
                <Tag text="Tag name"/>
                <Tag color="DarkPurple" text="Tag name"/>
                <Tag color="Purple" text="Tag name"/>
                <Tag color="Pink" text="Tag name"/>
                <Tag color="Red" text="Tag name"/>
                <Tag color="Yellow" text="Tag name"/>
                <Tag color="Turquoise" text="Tag name"/>
                <Tag color="Green" text="Tag name"/>
                <Tag color="LightBlue" text="Tag name"/>
                <Tag color="Blue" text="Tag name"/>
                <Tag text="Tag name"/>
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
