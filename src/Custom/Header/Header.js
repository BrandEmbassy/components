import React, { Component } from 'react';
import  '!style-loader!css-loader!../../styles/Base.css';
import styles from './Header.css';
import Link from './../../Controls/Link/Link';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.Header}>
        <div className={styles.Logo}><div className="be-icon-be-symbol"></div></div>
        <Link White Icon="be-icon-long-arrow-left" text="Go back to settings"/>
        <div className={styles.Title}>{this.props.Title}</div>
      </div>
    );
  }
}
