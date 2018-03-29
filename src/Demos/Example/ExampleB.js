import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';
import Header from './../../node_modules/components/Header/Header';
import Breadcrumbs from './../../node_modules/components/Breadcrumbs/Breadcrumbs';
import Table from './../../node_modules/components/Table/Table';
import Input from './../../node_modules/components/Input/Input';
import Textarea from './../../node_modules/components/Textarea/Textarea';
import Checkbox from './../../node_modules/components/Checkbox/Checkbox';
import Radio from './../../node_modules/components/Radio/Radio';
import Button from './../../node_modules/components/Button/Button';
import Link from './../../node_modules/components/Link/Link';
import Channel from './../../node_modules/components/Channel/Channel';
import Notification from './../../node_modules/components/Notification/Notification';
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

