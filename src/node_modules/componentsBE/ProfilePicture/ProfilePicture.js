import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './ProfilePicture.css';

const cx = classNames.bind(styles);

export default class ProfilePicture extends Component {
  render() {
    const {  Size60, Size40, Size24, Size20, Size16 } = this.props;

    const className = cx(styles.ProfilePicture, {
      Size60, 
      Size40, 
      Size24,
      Size20, 
      Size16
    });

    return (
      <div className={className}>
        <img src="https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg" alt="" />
      </div>
    );
  }
}

