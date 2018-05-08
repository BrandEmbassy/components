import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Select.css'

const cx = classNames.bind(styles)

export default class Select extends Component {
  static get propTypes () {
    return {
      label: PropTypes.string,
      isDisabled: PropTypes.boolean,
      desc: PropTypes.string,
      styleName: PropTypes.string
    }
  };

  render () {
    const { styleName, Wide, isDisabled, isError } = this.props

    const className = cx(styles.Select, styleName, {
      Wide,
      Disabled: isDisabled,
      Error: isError
    })

    return (
      <div className={className}>
        <div className={styles.Label}>
          {this.props.label}
        </div>
        <select disabled={this.props.isDisabled} >
          <option value='volvo'>Volvo</option>
          <option value='mercedes'>Mercedes</option>
        </select>
        <div className={styles.Desc}>
          {this.props.desc}
        </div>
      </div>
    )
  }
}
