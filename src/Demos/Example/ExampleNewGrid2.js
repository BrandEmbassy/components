import React, { Component } from 'react'
import '!style-loader!css-loader!./../../styles/Base.css'  //eslint-disable-line
import Header from './../../package/components/Header/Header'
import Breadcrumbs from './../../package/components/Breadcrumbs/Breadcrumbs'
import Submit from './../../package/components/Submit/Submit'
import Table from './../../package/components/Table/Table'
import Input from './../../package/components/Input/Input'
import Textarea from './../../package/components/Textarea/Textarea'
import Checkbox from './../../package/components/Checkbox/Checkbox'
import Radio from './../../package/components/Radio/Radio'
import Button from './../../package/components/Button/Button'
import Link from './../../package/components/Link/Link'
import Channel from './../../package/components/Channel/Channel'
import Label from './../../package/components/Label/Label'
import Notification from './../../package/components/Notification/Notification'
import Statuses from './../../package/components/Statuses/Statuses'
import Tag from './../../package/components/Tag/Tag'
import './../../App.css'

export default class ExampleA extends Component {

  render () {
    return (
      <div className="layout">
        <div className="static">
          <div className='row'>
            <Header />
          </div>
        </div>
        <div className="flex">
          <div className="layout horizontal">
            <div className="static">
              <div className='row'>
                <Header />
              </div>
            </div>
            <div className="flex">
              <div className="row">
                <Checkbox id='xzs' label='chose one' ><Channel type='facebook' size='S' /></Checkbox>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
