import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';
import Header from './../../node_modules/componentsBE/Header/Header';
import Breadcrumbs from './../../node_modules/componentsBE/Breadcrumbs/Breadcrumbs';
import Table from './../../node_modules/componentsBE/Table/Table';
import Input from './../../node_modules/componentsBE/Input/Input';
import Textarea from './../../node_modules/componentsBE/Textarea/Textarea';
import Checkbox from './../../node_modules/componentsBE/Checkbox/Checkbox';
import Radio from './../../node_modules/componentsBE/Radio/Radio';
import Button from './../../node_modules/componentsBE/Button/Button';
import Link from './../../node_modules/componentsBE/Link/Link';
import Channel from './../../node_modules/componentsBE/Channel/Channel';
import Notification from './../../node_modules/componentsBE/Notification/Notification';
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

