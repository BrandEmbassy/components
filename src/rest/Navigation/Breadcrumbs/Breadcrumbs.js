import React, { Component } from 'react';
import  '!style-loader!css-loader!../../styles/Base.css';
import styles from './Breadcrumbs.css';
import Button from './../../Controls/Button/Button';

export default class Breadcrumbs extends Component {
  render() {
    return (
      <div className={styles.Breadcrumbs}>
        <div className={styles.Textwrap}>
          <div className={styles.Step}>Brand Embassy</div>
          <div className={styles.Step}>Breadcrumbs</div>
        </div>
        <div className={styles.Right}>{this.props.children}</div>
      </div>
    );
  }
}