import React, { Component } from 'react'
import classNames from 'classnames/bind'
import styles from './Textarea.css'

const cx = classNames.bind(styles)

export default class Textarea extends Component {
  render () {
    const { isDisabled, isError } = this.props

    const className = cx(styles.Textarea, {
      Disabled: isDisabled,
      Error: isError
    })

    return (
      <div className={className}>
        <div className={styles.Label}>
          {this.props.label}
        </div>
        <div className={styles.Field}>
          <textarea name={this.props.name} placeholder={this.props.placeholder} disabled={this.props.isDisabled} />
        </div>
        <div className={`${styles.Desc} ${styles.isRed} `}>
          {this.props.desc}
        </div>
      </div>
    )
  }
}
