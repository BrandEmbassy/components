// @flow

import * as React from 'react'
// @flow-skip-next-line
import classNames from 'classnames/bind'
import styles from './Radio.css'

const cx = classNames.bind(styles)

type Props = {
  id: string,
  name: string,
  label: string,
  styleName: string
}

export default class Radio extends React.Component<Props> {

  render () {
    const { styleName } = this.props

    const className = cx(styles.RadioContent, styleName)

    return (
      <div className={className} >
        <div className={styles.Radio} >
          <input type='radio' name={this.props.name} id={this.props.id} />
          <label for={this.props.id} />
        </div>
        <div className={styles.Label}>{this.props.label}</div>
      </div>
    )
  }
}
