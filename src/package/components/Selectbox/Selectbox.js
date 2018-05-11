// @flow

import * as React from 'react'
// @flow-skip-next-line
import classNames from 'classnames/bind'
import styles from './Selectbox.css'

const cx = classNames.bind(styles)

type Props = {
  label: string,
  isDisabled: boolean,
  isError: boolean,
  desc: string,
  styleName: string,
  Wide: boolean

}

export default class Selectbox extends React.Component<Props> {
  render () {
    const { styleName, Wide, isDisabled, isError } = this.props

    const className = cx(styles.Selectbox, styleName, {
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
