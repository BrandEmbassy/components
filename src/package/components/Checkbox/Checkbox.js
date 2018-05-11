// @flow

import * as React from 'react'
// @flow-skip-next-line
import classNames from 'classnames/bind'
import styles from './Checkbox.css'

const cx = classNames.bind(styles)

type Props = {
  styleName: string,
  label: string,
  name: string,
  id: string
}

export default class Checkbox extends React.Component<Props> {
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
