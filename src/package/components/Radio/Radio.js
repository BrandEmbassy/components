import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Radio.css'

const cx = classNames.bind(styles)

export default class Radio extends Component {
  static get propTypes () {
    return {
      id: PropTypes.string,
      name: PropTypes.string,
      label: PropTypes.string,
      styleName: PropTypes.string
    }
  };

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
