// @flow

import * as React from 'react'
// @flow-skip-next-line
import classNames from 'classnames/bind'
import styles from './Select.module.css'

const cx = classNames.bind(styles)

type Props = {
  label: string,
  isDisabled: boolean,
  desc: string,
  styleName: string,
  Wide: boolean,
  isError: boolean
};

export default class Select extends React.Component<Props> {
  render () {
    const { styleName, Wide, isDisabled, isError } = this.props

    const className = cx(styles.Select, styleName, {
      Wide,
      Disabled: isDisabled,
      Error: isError
    })

    return (
      <div className={className}>
        <div className={styles.Label}>{this.props.label}</div>
        <select disabled={this.props.isDisabled}>
          <option value='volvo'>Volvo</option>
          <option value='mercedes'>Mercedes</option>
        </select>
        <div className={styles.Desc}>{this.props.desc}</div>
      </div>
    )
  }
}
