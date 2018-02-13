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
import Notification from './../../Custom/Notification/Notification';
import styles from './../../App.css';

export default class ExampleB extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.Static}>
          <div className="row">
            <Header/>
          </div>
        </div>
        <div className={styles.Flexcols}>
          <div className={styles.Static}>
     
              <Button text="dadawdawdawda"/>

          </div>
          <div className={styles.Flexrows}>
            <div className={styles.Static}> 
               <Header/>
            </div>
            <div className={styles.Flex}>
         
                  <Button Small text="Add someting" Icon="be-icon-plus" /> <br /><br />
                  <Button Small text="Add someting" Icon="be-icon-plus" /> <br /><br />
                  <Button Small text="Add someting" Icon="be-icon-plus" /> <br /><br />
                  <Button Small text="Add someting" Icon="be-icon-plus" /> <br /><br />
                  <Button Small text="Add someting" Icon="be-icon-plus" /> <br /><br />

                  <Button Small text="Add someting" Icon="be-icon-plus" /> <br /><br />
                  <Button Small text="Add someting" Icon="be-icon-plus" /> <br /><br />
                  <Button Small text="Add someting" Icon="be-icon-plus" /> <br /><br />
                  <Button Small text="Add someting" Icon="be-icon-plus" /> <br /><br />
                  <Button Small text="Add someting" Icon="be-icon-plus" /> <br /><br />
                  <Button Small text="Add someting" Icon="be-icon-plus" /> <br /><br />
                  <Button Small text="Add someting" Icon="be-icon-plus" /> <br /><br />
                  <Button Small text="Add someting" Icon="be-icon-plus" /> <br /><br />
                  <Button Small text="Add someting" Icon="be-icon-plus" /> <br /><br />
                  <Button Small text="Add someting" Icon="be-icon-plus" /> <br /><br />
                  <Button Small text="Add someting" Icon="be-icon-plus" /> <br /><br />
                  <Button Small text="Add someting" Icon="be-icon-plus" /> <br /><br />
                  <Button Small text="Add someting" Icon="be-icon-plus" /> <br /><br />
                  <Button Small text="Add someting" Icon="be-icon-plus" /> <br /><br />

                  <Button Small text="Add someting" Icon="be-icon-plus" /> <br /><br />
                  <Button Small text="Add someting" Icon="be-icon-plus" /> <br /><br />
                  </div>
          </div>
        </div>
      </div>
    );
  }
}

