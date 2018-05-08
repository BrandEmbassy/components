import React, { Component } from 'react';
import '!style-loader!css-loader!./../../styles/Base.css';
import Header from './../../package/components/Header/Header';
import Breadcrumbs from './../../package/components/Breadcrumbs/Breadcrumbs';
import Table from './../../package/components/Table/Table';
import Input from './../../package/components/Input/Input';
import Textarea from './../../package/components/Textarea/Textarea';
import Checkbox from './../../package/components/Checkbox/Checkbox';
import Radio from './../../package/components/Radio/Radio';
import Button from './../../package/components/Button/Button';
import Link from './../../package/components/Link/Link';
import Channel from './../../package/components/Channel/Channel';
import Notification from './../../package/components/Notification/Notification';
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

