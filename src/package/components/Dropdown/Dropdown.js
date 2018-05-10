import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Dropdown.css'
import DropdownToggle from './../DropdownToggle/DropdownToggle'
import DropdownMenu from './../DropdownMenu/DropdownMenu'

const cx = classNames.bind(styles)

export default class Dropdown extends PureComponent {
  constructor () {
    super()

    this.handleClick = this.handleClick.bind(this)
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
  }

  static get propTypes () {
    return {
      children: PropTypes.Array,
      styleName: PropTypes.string
    }
  };

  handleClick () {
    // console.log('handleclick');
    if (!this.props.isOpen) {
      // attach/remove event handler
      document.addEventListener('click', this.handleOutsideClick, false)
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false)
    }

    this.props.toggleDropdown()
  }

  handleOutsideClick (e) {
    // ignore clicks on the component itself
    if (this.refs.test.contains(e.target)) {
      return
    }

    this.handleClick()
  }

  getToggleComponent (children) {
    return children.filter(child => child.type.name === 'DropdownToggle')[0]
  }

  renderChildren () {
    const {children} = this.props

    if (!this.props.isOpen) {
      return null
    }

    return (
      <DropdownMenu>
        {children}
      </DropdownMenu>
    )
  }

  renderToggle () {
    if (!Number.isInteger(this.props.selectedItem)) {
      return this.props.toggleDefault
    }

    return (this.props.children[this.props.selectedItem])
  }

  render () {
    const { styleName } = this.props
    const className = cx(styles.Dropdown, styleName)

    return (
      <div className={className} onClick={this.handleClick} ref='test'>
        <DropdownToggle isOpen={this.props.isOpen} >
          {this.renderToggle()}
        </DropdownToggle>
        {this.renderChildren()}
      </div>
    )
  }
}
