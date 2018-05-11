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

  render () {
    const { styleName, isDisabled, isError } = this.props

    const className = cx(styles.Textarea, styleName, {
      Disabled: isDisabled,
      Error: isError
    })

    return (
      <div className={className}>
        {this.renderLabel()}
        <div className={styles.Field}>
          <textarea
            name={this.props.name}
            rows={this.props.rows}
            value={this.props.value}
            placeholder={this.props.placeholder}
            disabled={this.props.isDisabled}
            onChange={this.props.onChange} />
        </div>
        <div className={`${styles.Desc} ${styles.isRed} `}>
          {this.props.desc}
        </div>
      </div>
    )
  }
}
