// @flow

import React, { Component } from 'react';
import  '!style-loader!css-loader!../../styles/Base.css';
import styles from './Radio.css';

type Props = {
  checked: boolean,
  id: ?string
}

export default class Radio extends Component {
  render() {
    const { checked, id } = this.props;

    return (
      <div>
      <div className={styles.Radio} />
        <input type="radio" name="xxx" id={id} checked={checked} />
        <label htmlFor={id}  />
      </div>
    );
  }
}
