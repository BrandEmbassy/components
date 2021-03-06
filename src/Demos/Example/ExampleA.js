import React, { Component } from 'react'
import "../../package/components/Base.css"; //eslint-disable-line
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
import styles from './../../App.module.css'

export default class ExampleA extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ShowNotif: false,
      ShowNotifFix: false
    }
  }

  renderNotif = () => {
    if (this.state.ShowNotif) {
      return <Notification isRed text='button was pressed here here hrere' />
    }
    return null
  };

  renderNotifFix = () => {
    if (this.state.ShowNotifFix) {
      return (
        <Notification Fixed isRed text='button was pressed here here hrere' />
      )
    }
    return null
  };

  render () {
    return (
      <div className={styles.App}>
        <div className={styles.Static}>
          <div className='row'>
            <Header />
          </div>
        </div>
        <div className={styles.Flex}>
          <div className='row'>{this.renderNotifFix()}</div>
          <div className='row'>
            <div className='col-xs'>
              <Breadcrumbs>
                <Button Small text='Add someting' Icon='be-icon-plus' />
              </Breadcrumbs>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs'>
              <Table />
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-6'>
              <div className='row'>
                <div className='col-xs-12'>
                  <h3 className='h3'>Form</h3>
                </div>
                <div className='col-xs-12'>
                  <Input desc='description...' />
                </div>
                <div className='col-xs-12'>
                  <Textarea
                    rows='12'
                    label='Textarea text here'
                    desc='description...'
                  />
                </div>
              </div>
              <div className='row padding-15'>
                <div className='col-xs-12 padding-10'>
                  <Checkbox name='nameA' id='aaa' label='label text here' />
                </div>
                <div className='col-xs-12 padding-10'>
                  <Checkbox name='nameA' id='bbb' label='label text here' />
                </div>
              </div>
              <div className='row padding-10'>
                <div className='col-xs-12 padding-5'>
                  <Radio name='nameB' id='C' label='male' />
                </div>
                <div className='col-xs-12 padding-5'>
                  <Radio name='nameB' id='D' label='female' />
                </div>
                <div className='col-xs-12 padding-5'>
                  <Radio name='nameB' id='E' label='apache helicopter' />
                </div>
                <div className='col-xs-12 padding-15'>
                  <Button text='Send Form Wide' Wide />
                </div>
                <div className='col-xs-12 padding-15'>
                  <Button text='Send Form' />
                </div>
              </div>
            </div>

            <div className='col-xs-6'>
              <div className='row'>
                <div className='col-xs-12'>
                  <h3 className='h3'>Links</h3>
                </div>
              </div>
              <div className='row'>
                <div className='col-xs-12 padding-15'>
                  <Link Icon='be-icon-plus' Green text='Add' />
                  <Link Icon='be-icon-pencil' Blue text='Edit' />
                  <Link Icon='be-icon-trash' text='Remove' />
                  <Link Icon='be-icon-mail' text='' />
                  <Link Icon='be-icon-check' Green text='' />
                  <Link Icon='be-icon-more' text='' />
                  <Link Icon='be-icon-search' Red text='' />
                </div>
                <div className='col-xs-12 color4 padding-10'>
                  <Link Icon='be-icon-check' Green text='' />
                  <Link Icon='be-icon-more' Black text='' />
                  <Link Icon='be-icon-search' Red text='search' />
                  <Link Icon='be-icon-mail' White text='Mail' />
                </div>
              </div>
              <div className='row padding-10'>
                <div className='col-xs-12'>
                  <h3 className='h3'>Channels</h3>
                </div>
              </div>
              <div className='row'>
                <div className='col-xs-12 padding-15'>
                  <Channel type='facebook' Size40 DM />
                  <Channel type='instagram' Size40 />
                  <Channel type='twitter' Size40 />
                  <Channel type='livechat' Size40 DM />
                </div>
              </div>
              <div className='row padding-10'>
                <div className='col-xs-12'>
                  <h3 className='h3'>Statuses</h3>
                </div>
              </div>
              <div className='row'>
                <div className='col-xs-12 padding-15'>
                  <Statuses Orange text='new' />
                  <Statuses Yellow text='open' />
                  <Statuses Green text='resolved' />
                  <Statuses Blue text='pending' />
                  <Statuses Purple text='escalated' />
                  <Statuses Red text='closed' />
                </div>
                <div className='col-xs-12 padding-15'>
                  <Statuses Reversed Orange text='new' />
                  <Statuses Reversed Yellow text='open' />
                  <Statuses Reversed Green text='resolved' />
                  <Statuses Reversed Blue text='pending' />
                  <Statuses Reversed Purple text='escalated' />
                  <Statuses Reversed Red text='closed' />
                </div>
              </div>
              <div className='row padding-10'>
                <div className='col-xs-12'>
                  <h3 className='h3'>Tags</h3>
                </div>
              </div>
              <div className='row'>
                <div className='col-xs-12 padding-15'>
                  <Tag Red text='Tag name' />
                  <Tag Yellow text='Tag name' />
                  <Tag Turquoise text='Tag name' />
                  <Tag Green text='Tag name' />
                  <Tag LightBlue text='Tag name' />
                  <Tag Blue text='Tag name' />
                </div>
              </div>
              <div className='row padding-10'>
                <div className='col-xs-12'>
                  <h3 className='h3'>Notification message</h3>
                </div>
              </div>
              <div className='row'>
                <div className='col-xs-12'>{this.renderNotif()}</div>
                <div className='col-xs-12 padding-15 center'>
                  <Button
                    Small
                    text='Show notification on click'
                    onClick={e => {
                      e.stopPropagation()
                      this.setState({ ShowNotif: !this.state.ShowNotif })
                    }}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-xs-12 padding-15'>
                  <Button
                    Small
                    Wide
                    text='Show Fix notification on click'
                    onClick={e => {
                      e.stopPropagation()
                      this.setState({ ShowNotifFix: !this.state.ShowNotifFix })
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='row around-xs padding-20'>
            <div className='col-xs-6 background padding-20'>
              <div className='row'>
                <div className='col-xs-12'>
                  <h3 className='h3'>Form</h3>
                </div>
                <div className='col-xs-12'>
                  <Label text='facebook channel label text here'>
                    <Channel type='facebook' Size40 />
                  </Label>
                </div>
                <div className='col-xs-12'>
                  <Input label='Input text here' desc='description...' />
                </div>
                <div className='col-xs-12'>
                  <Textarea label='Input text here' desc='description...' />
                </div>
              </div>
              <div className='row'>
                <div className='col-xs-12'>
                  <Button text='Send Form Wide' Wide />
                  <Submit value='Send Form Wide' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
