import React, { Component } from 'react'
import './styles/Base.css'
import styles from './App.css'

import Breadcrumbs from './package/components/Breadcrumbs'
import Button from './package/components/Button'
import ButtonGroup from './package/components/ButtonGroup'
import Global from './package/components/Global'
import H1 from './package/components/H1'
import H2 from './package/components/H2'
import H3 from './package/components/H3'
import Header from './package/components/Header'
import Channel from './package/components/Channel'
import Checkbox from './package/components/Checkbox'
import Input from './package/components/Input'
import Label from './package/components/Label'
import Link from './package/components/Link'
import Notification from './package/components/Notification'
import P from './package/components/P'
import ProfilePicture from './package/components/ProfilePicture'
import Radio from './package/components/Radio'
import Selectbox from './package/components/Selectbox'
import Statuses from './package/components/Statuses'
import Submit from './package/components/Submit'
import Table from './package/components/Table'
import Tag from './package/components/Tag'
import Textarea from './package/components/Textarea'

export default class App extends Component {
  render () {
    return (
      <div className={styles.App} >
        <Global />
        <div className={styles.Static}>
          <div className='row'>
            <Header />
          </div>
        </div>
        <div className={styles.Flex} >
          <div className='row'>
            <div className='col-xs'>
              <br /><br />
              <b><a href='http://localhost:6006'>Open</a></b> component library
              <br /><br />
              <H1>test H1</H1>
              <H2>test H2</H2>
              <H3>test H3</H3>
              <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet sodales turpis, ac sollicitudin sem. Sed et eros porttitor, ullamcorper ante vel, consectetur metus. Integer in ante nec leo viverra varius et egestas mauris. Vestibulum consequat orci laoreet tellus condimentum lacinia. Maecenas eu justo sit amet nulla aliquam consectetur. Aenean nec fermentum velit. Mauris dictum justo ipsum, vitae pharetra nibh sodales ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce dapibus felis et nunc consequat sollicitudin.
              </P>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs'>
              <Breadcrumbs>
                <Button Small text='Add someting' Icon='be-icon-plus' />
              </Breadcrumbs>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs'>
              <Table isStriped hasRowHover />
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-6'>
              <div className='row'>
                <div className='col-xs-12'>
                  <h3 className='h3'>Form</h3>
                </div>
                <div className='col-xs-12'>
                  <Input label='Input text here' isError desc='description...' />
                </div>
              </div>
              <div className='row'>
                <div className='col-xs-12'>
                  <Textarea label='Textarea here' isError desc='description...' />
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
                  <Channel type='facebook' size='L' DM />
                  <Channel type='instagram' size='L' />
                  <Channel type='twitter' size='L' />
                  <Channel type='livechat' size='L' DM />
                </div>
              </div>
              <div className='row padding-10'>
                <div className='col-xs-12'>
                  <h3 className='h3'>Statuses</h3>
                </div>
              </div>
              <div className='row'>
                <div className='col-xs-12 padding-15'>
                  <Statuses status='New' />
                  <Statuses status='Open' />
                  <Statuses status='Resolved' />
                  <Statuses status='Pending' />
                  <Statuses status='Escalated' />
                  <Statuses status='Closed' />
                  <Statuses status='Trashed' />
                  <Statuses status='Reversed' />
                </div>
                <div className='col-xs-12 padding-15'>
                  <Statuses status='New' Reversed />
                  <Statuses status='Open' Reversed />
                  <Statuses status='Resolved' Reversed />
                  <Statuses status='Pending' Reversed />
                  <Statuses status='Escalated' Reversed />
                  <Statuses status='Closed' Reversed />
                  <Statuses status='Trashed' Reversed />
                  <Statuses status='Reversed' Reversed />
                </div>
              </div>
              <div className='row padding-10'>
                <div className='col-xs-12'>
                  <h3 className='h3'>Tags</h3>
                </div>
              </div>
              <div className='row'>
                <div className='col-xs-12 padding-15'>
                  <Tag text='Tag name' />
                  <Tag color='DarkPurple' text='Tag name' />
                  <Tag color='Purple' text='Tag name' />
                  <Tag color='Pink' text='Tag name' />
                  <Tag color='Red' text='Tag name' />
                  <Tag color='Yellow' text='Tag name' />
                  <Tag color='Turquoise' text='Tag name' />
                  <Tag color='Green' text='Tag name' />
                  <Tag color='LightBlue' text='Tag name' />
                  <Tag color='Blue' text='Tag name' />
                  <Tag text='Tag name' />
                </div>
              </div>
              <div className='row padding-10'>
                <div className='col-xs-12'>
                  <h3 className='h3'>Notification message</h3>
                  <Notification isRed text='notif text' />
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
                    <Channel Facebook Size40 />
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

                  <ButtonGroup>
                    <Button text='Send Form ' />
                    <Button text='Send Form ' />
                    <Button text='Send Form ' />
                  </ButtonGroup>
                  <ProfilePicture />
                  <Selectbox />
                  <Submit />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
