// @flow

import * as React from 'react'
// @flow-skip-next-line
import classNames from 'classnames/bind'
import styles from './Textarea.css'

const cx = classNames.bind(styles)

type Props = {
  name: string,
  rows: number,
  value: string,
  placeholder: string,
  isDisabled: Function,
  isError: Function,
  onChange: Function,
  desc: string,
  styleName: string,
  label: string
}

export default class Textarea extends React.Component<Props> {
  renderLabel () {
    if (this.props.label) {
      return (
        <div className={styles.Label}>
          {this.props.label}
        </div>
      )
    }
    return null
  }

  renderDesc () {
    if (this.props.desc) {
      return (
        <div className={`${styles.Desc} ${styles.isRed} `}>
          {this.props.desc}
        </div>
      )
    }
    return null
  }

  render () {
    const { styleName, isDisabled, isError, name, rows, value, placeholder, onChange, desc } = this.props

    const className = cx(styles.Textarea, styleName, {
      Disabled: isDisabled,
      Error: isError
    })

    return (
      <div className={className}>
        {this.renderLabel()}
        <div className={styles.Field}>
          <textarea
            name={name}
            rows={rows}
            value={value}
            placeholder={placeholder}
            disabled={isDisabled}
            onChange={onChange} />
        </div>
        {this.renderDesc()}
      </div>
    )
  }
}
