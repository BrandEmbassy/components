import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Breadcrumbs.css';

export default class Breadcrumbs extends Component {

  static get propTypes() {
    return {
      onClick: PropTypes.function
    };
  };

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
