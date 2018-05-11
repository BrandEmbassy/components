// @flow

import * as React from 'react'
// @flow-skip-next-line
import classNames from 'classnames/bind'
import styles from './Switcher.css'

const cx = classNames.bind(styles)

type Props = {
  title: string,
  styleName: string,
  isActive: boolean
}

export default class Switcher extends React.Component<Props> {

  constructor (props) {
    super(props)
    this.state = { isActive: this.props.isActive }
  }

  render () {
    const { styleName, isActive } = this.props

    const className = cx(styles.Switcher, styleName, {
      isActive
    })

    return (
      <div
        onClick={(e) => {
          e.stopPropagation()
          this.setState({ isActive: !this.state.isActive })
        }}
        className={className}>
        <div className='Label Label--on'>On</div>
        <div className='Switch' />
        <div className='Label Label--off'>Off</div>
      </div>
    )
  }
}
