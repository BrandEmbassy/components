import React, { Component } from 'react';
import styles from './Channel.css';

export default class Picture extends Component {
  render() {
    return (
      <div className={`${styles.Channel} 
        ${this.props.Facebook === true ? styles.Facebook : ''}
        ${this.props.Twitter === true ? styles.Twitter : ''}
        ${this.props.Instagram === true ? styles.Instagram : ''}
        ${this.props.Google === true ? styles.Google : ''}
        ${this.props.Youtube === true ? styles.Youtube : ''}
        ${this.props.Linkedin === true ? styles.Linkedin : ''}
        ${this.props.Livechat === true ? styles.Livechat : ''}
        ${this.props.Email === true ? styles.Email : ''}
        ${this.props.Forum === true ? styles.Forum : ''}
        ${this.props.Vkontakte === true ? styles.Vkontakte : ''}
        ${this.props.Listening === true ? styles.Listening : ''}
        ${this.props.Size60 === true ? styles.Size60 : ''}
        ${this.props.Size40 === true ? styles.Size40 : ''}
        ${this.props.Size20 === true ? styles.Size20 : ''}
        ${this.props.Size16 === true ? styles.Size16 : ''}
        `}>
      </div>
    );
  }
}

