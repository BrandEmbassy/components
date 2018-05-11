// @flow

import * as React from 'react'
// @flow-skip-next-line
import classNames from 'classnames/bind'
import styles from './Input.css'

const cx = classNames.bind(styles)

type Props = {
  onChange: Function,
  label: string,
  name: string,
  type: string,
  value: string,
  placeholder: string,
  isDisabled: boolean,
  isError: boolean,
  desc: string,
  styleName: string
}

export default class Input extends React.Component<Props> {

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
    const { isDisabled, isError, styleName } = this.props

    const className = cx(styles.Input, styleName, {
      Disabled: isDisabled,
      Error: isError
    })

    return (
      <div className={className}>

        {this.renderLabel()}
        <div className={styles.Field}>
          <input
            type={this.props.type}
            name={this.props.name}
            placeholder={this.props.placeholder}
            disabled={this.props.isDisabled}
            onChange={this.props.onChange}
            value={this.props.value} />
        </div>
        <div className={styles.Desc}>
          {this.props.desc}
        </div>
      </div>
    )
  }
}
