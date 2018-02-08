import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Channel.css';

const cx = classNames.bind(styles);

export default class Picture extends Component {
  render() {
    const { Facebook, Twitter, Instagram, Google, Youtube, Linkedin, Livechat, Email, Forum, Vkontakte, Listening, Size60, Size40, Size20, Size16, DM } = this.props;

    const className = cx(styles.Channel, {
      Facebook, 
      Twitter, 
      Instagram, 
      Google, 
      Youtube, 
      Linkedin, 
      Livechat, 
      Email, 
      Forum, 
      Vkontakte, 
      Listening, 
      Size60, 
      Size40, 
      Size20, 
      Size16, 
      DM
    });

    return (
      <div className={className}>
      </div>
    );
  }
}

