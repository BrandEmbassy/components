import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Checkbox.css'

const cx = classNames.bind(styles)

export default class Checkbox extends Component {
  static get propTypes () {
    return {
      styleName: PropTypes.string,
      label: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.string
    }
  };

  render () {
    const { styleName } = this.props

    const className = cx(styles.CheckboxContent, styleName)

    return (
      <div className={className}>
        <div className={styles.Checkbox} >
          <input type='checkbox' name={this.props.name} id={this.props.id} />
          <label for={this.props.id} />
        </div>
        <div className={styles.Label}>{this.props.label}</div>
      </div>
    )
  }
}
