import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';
import Header from './../../Custom/Header/Header';
import Breadcrumbs from './../../Navigation/Breadcrumbs/Breadcrumbs';
import Table from './../../Forms/Table/Table';
import Input from './../../Forms/Input/Input';
import Textarea from './../../Forms/Textarea/Textarea';
import Checkbox from './../../Forms/Checkbox/Checkbox';
import Radio from './../../Forms/Radio/Radio';
import Button from './../../Controls/Button/Button';
import Link from './../../Controls/Link/Link';
import Channel from './../../Custom/Channel/Channel';

export default class ExampleA extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Header />
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
              <div className="col-xs-12">
                <Textarea label="Input text here" desc="description..." />
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
          </div>
        </div>
      </div>
    );
  }
}

