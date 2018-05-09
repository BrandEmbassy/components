import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './ButtonGroup.css'

export default class ButtonGroup extends Component {
  static get propTypes () {
    return {
      children: PropTypes.Array
    }
  };

  render () {
    return (
      <div className={styles.ButtonGroup}>
        {this.props.children}
      </div>
    )
  }
}
