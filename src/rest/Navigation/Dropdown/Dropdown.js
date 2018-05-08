import React, { Component } from 'react'
import classNames from 'classnames/bind'
import '!style-loader!css-loader!../../styles/Base.css' // eslint-disable-line
import styles from './Dropdown.css'

const cx = classNames.bind(styles)

export default class Dropdown extends Component {
  render () {
    const { isActive } = this.props

    const className = cx(styles.Dropdown, {
      isActive
    })

    return (
      <div className={styles.DropdownWrap}>
        <div className={className}>
          <div className={styles.Item}>
            <div className='be-icon-users' />
           Acount
          </div>
          <div className={styles.Item}>
            <div className='be-icon-users' />
           Acount
          </div>
          <div className={styles.Item}>
            <div className='be-icon-users' />
           Acount
          </div>
          <div className={styles.Item}>
            <div className='be-icon-logout' />
          Logout
          </div>
        </div>
      </div>
    )
  }
}
